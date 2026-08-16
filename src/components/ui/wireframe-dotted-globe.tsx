"use client";

import * as d3 from "d3";
import type { Feature, FeatureCollection } from "geojson";
import { useEffect, useRef, useState } from "react";

interface RotatingEarthProps {
  width?: number;
  height?: number;
  className?: string;
}

function pointInPolygon(point: [number, number], polygon: number[][]): boolean {
  const [x, y] = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i]!;
    const [xj, yj] = polygon[j]!;

    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }

  return inside;
}

function pointInFeature(point: [number, number], feature: Feature): boolean {
  const geometry = feature.geometry;

  if (geometry.type === "Polygon") {
    const coordinates = geometry.coordinates;
    if (!pointInPolygon(point, coordinates[0]!)) return false;
    for (let i = 1; i < coordinates.length; i++) {
      if (pointInPolygon(point, coordinates[i]!)) return false;
    }
    return true;
  }

  if (geometry.type === "MultiPolygon") {
    for (const polygon of geometry.coordinates) {
      if (pointInPolygon(point, polygon[0]!)) {
        let inHole = false;
        for (let i = 1; i < polygon.length; i++) {
          if (pointInPolygon(point, polygon[i]!)) {
            inHole = true;
            break;
          }
        }
        if (!inHole) return true;
      }
    }
  }

  return false;
}

function generateDotsInPolygon(feature: Feature, dotSpacing = 16) {
  const dots: [number, number][] = [];
  const bounds = d3.geoBounds(feature);
  const [[minLng, minLat], [maxLng, maxLat]] = bounds;
  const stepSize = dotSpacing * 0.08;

  for (let lng = minLng; lng <= maxLng; lng += stepSize) {
    for (let lat = minLat; lat <= maxLat; lat += stepSize) {
      const point: [number, number] = [lng, lat];
      if (pointInFeature(point, feature)) dots.push(point);
    }
  }

  return dots;
}

interface DotData {
  lng: number;
  lat: number;
}

export default function RotatingEarth({
  width = 800,
  height = 600,
  className = "",
}: RotatingEarthProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      setContainerSize(container.clientWidth);
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || containerSize <= 0) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const size = Math.min(width, height, containerSize);
    const containerWidth = size;
    const containerHeight = size;
    const radius = size / 2.08;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;
    context.scale(dpr, dpr);

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);
    const allDots: DotData[] = [];
    let landFeatures: FeatureCollection | null = null;

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight);

      const cx = containerWidth / 2;
      const cy = containerHeight / 2;
      const currentScale = projection.scale();
      const scaleFactor = currentScale / radius;

      context.save();
      context.beginPath();
      context.arc(cx, cy, currentScale, 0, 2 * Math.PI);
      context.clip();

      context.beginPath();
      context.arc(cx, cy, currentScale, 0, 2 * Math.PI);
      context.fillStyle = "#0a0a0a";
      context.fill();

      if (landFeatures) {
        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule());
        context.strokeStyle = "rgba(255, 255, 255, 0.22)";
        context.lineWidth = 1.15 * scaleFactor;
        context.stroke();

        context.beginPath();
        landFeatures.features.forEach((feature) => {
          path(feature);
        });
        context.strokeStyle = "#ffffff";
        context.lineWidth = 1.35 * scaleFactor;
        context.stroke();

        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= containerWidth &&
            projected[1] >= 0 &&
            projected[1] <= containerHeight
          ) {
            context.beginPath();
            context.arc(projected[0], projected[1], 1.25 * scaleFactor, 0, 2 * Math.PI);
            context.fillStyle = "#e6007e";
            context.fill();
          }
        });
      }

      context.restore();

      context.beginPath();
      context.arc(cx, cy, currentScale, 0, 2 * Math.PI);
      context.strokeStyle = "rgba(255, 255, 255, 0.75)";
      context.lineWidth = 2.2 * scaleFactor;
      context.stroke();

      context.save();
      context.globalCompositeOperation = "destination-in";
      const edgeMask = context.createRadialGradient(
        cx,
        cy,
        currentScale * 0.88,
        cx,
        cy,
        currentScale * 1.02,
      );
      edgeMask.addColorStop(0, "rgba(0, 0, 0, 1)");
      edgeMask.addColorStop(0.92, "rgba(0, 0, 0, 1)");
      edgeMask.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = edgeMask;
      context.fillRect(0, 0, containerWidth, containerHeight);
      context.restore();
    };

    const loadWorldData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
        );
        if (!response.ok) throw new Error("Failed to load land data");

        landFeatures = (await response.json()) as FeatureCollection;
        landFeatures.features.forEach((feature) => {
          generateDotsInPolygon(feature, 16).forEach(([lng, lat]) => {
            allDots.push({ lng, lat });
          });
        });

        render();
      } catch {
        setError("No se pudo cargar el mapa");
      }
    };

    const rotation: [number, number] = [0, 0];
    let autoRotate = true;
    const rotationSpeed = 0.5;

    const rotate = () => {
      if (autoRotate) {
        rotation[0] += rotationSpeed;
        projection.rotate(rotation);
        render();
      }
    };

    const rotationTimer = d3.timer(rotate);
    const dragSensitivity = 0.5;

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false;
      const startX = event.clientX;
      const startY = event.clientY;
      const startRotation: [number, number] = [...rotation];

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;

        rotation[0] = startRotation[0] + dx * dragSensitivity;
        rotation[1] = startRotation[1] - dy * dragSensitivity;
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]));

        projection.rotate(rotation);
        render();
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        setTimeout(() => {
          autoRotate = true;
        }, 800);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      autoRotate = false;
      const touch = event.touches[0]!;
      const startX = touch.clientX;
      const startY = touch.clientY;
      const startRotation: [number, number] = [...rotation];

      const handleTouchMove = (moveEvent: TouchEvent) => {
        if (moveEvent.touches.length !== 1) return;
        const moveTouch = moveEvent.touches[0]!;
        const dx = moveTouch.clientX - startX;
        const dy = moveTouch.clientY - startY;

        rotation[0] = startRotation[0] + dx * dragSensitivity;
        rotation[1] = startRotation[1] - dy * dragSensitivity;
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]));

        projection.rotate(rotation);
        render();
      };

      const handleTouchEnd = () => {
        canvas.removeEventListener("touchmove", handleTouchMove);
        canvas.removeEventListener("touchend", handleTouchEnd);
        setTimeout(() => {
          autoRotate = true;
        }, 800);
      };

      canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
      canvas.addEventListener("touchend", handleTouchEnd);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("wheel", handleWheel, { passive: false });

    loadWorldData();

    return () => {
      rotationTimer.stop();
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [width, height, containerSize]);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-card p-8 ${className}`}
      >
        <div className="text-center">
          <p className="mb-2 font-semibold text-destructive">
            Error al cargar el globo
          </p>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative aspect-square w-full ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at center, rgba(230,0,126,0.05) 0%, transparent 62%)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="relative z-[1] aspect-square h-full w-full cursor-grab bg-transparent active:cursor-grabbing"
      />
      <p className="pointer-events-none absolute bottom-1 left-1/2 z-[2] -translate-x-1/2 text-[10px] text-white/30">
        Arrastra para girar
      </p>
    </div>
  );
}

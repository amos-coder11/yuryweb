"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export interface LiquidGlassProps {
  radius?: number;
  border?: number;
  lightness?: number;
  displace?: number;
  blend?: string;
  xChannel?: "R" | "G" | "B";
  yChannel?: "R" | "G" | "B";
  alpha?: number;
  blur?: number;
  rOffset?: number;
  gOffset?: number;
  bOffset?: number;
  scale?: number;
  frost?: number;
  className?: string;
  containerClass?: string;
  children?: ReactNode;
}

export default function LiquidGlass({
  radius = 16,
  border = 0.07,
  lightness = 50,
  displace = 0,
  blend = "difference",
  xChannel = "R",
  yChannel = "B",
  alpha = 0.93,
  blur = 11,
  rOffset = 0,
  gOffset = 10,
  bOffset = 20,
  scale = -180,
  frost = 0.05,
  className,
  containerClass,
  children,
}: LiquidGlassProps) {
  const reactId = useId().replace(/:/g, "");
  const filterId = `liquid-glass-filter-${reactId}`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      let width = 0;
      let height = 0;

      if (entry.borderBoxSize?.length) {
        width = entry.borderBoxSize[0]!.inlineSize;
        height = entry.borderBoxSize[0]!.blockSize;
      } else {
        width = entry.contentRect.width;
        height = entry.contentRect.height;
      }

      setDimensions({ width, height });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const displacementDataUri = useMemo(() => {
    const { width, height } = dimensions;
    if (width === 0 || height === 0) return "";

    const edge = Math.min(width, height) * (border * 0.5);

    const svg = `
      <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${width}" height="${height}" fill="black"></rect>
        <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#red)" />
        <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#blue)" style="mix-blend-mode: ${blend}" />
        <rect
          x="${edge}"
          y="${edge}"
          width="${width - edge * 2}"
          height="${height - edge * 2}"
          rx="${radius}"
          fill="hsl(0 0% ${lightness}% / ${alpha})"
          style="filter:blur(${blur}px)"
        />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }, [alpha, blend, blur, border, dimensions, lightness, radius]);

  const effectStyle: CSSProperties = {
    "--frost": frost,
    borderRadius: `${radius}px`,
    backdropFilter:
      displacementDataUri !== ""
        ? `url(#${filterId}) blur(${blur}px)`
        : `blur(${blur}px)`,
    WebkitBackdropFilter:
      displacementDataUri !== ""
        ? `url(#${filterId}) blur(${blur}px)`
        : `blur(${blur}px)`,
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      style={effectStyle}
      className={cn("liquid-glass-effect", containerClass)}
    >
      <div className={cn("liquid-glass-slot", className)}>{children}</div>

      <svg
        className="liquid-glass-filter-svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            {displacementDataUri && (
              <feImage
                x="0"
                y="0"
                width="100%"
                height="100%"
                href={displacementDataUri}
                result="map"
              />
            )}
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + rOffset}
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="red"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + gOffset}
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="green"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + bOffset}
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
              result="blue"
            />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur stdDeviation={displace} />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

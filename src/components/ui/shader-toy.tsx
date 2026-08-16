"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { InspiraShaderToy, type MouseMode } from "@/lib/inspira-shader-toy";
import { cn } from "@/lib/utils";

interface NoiseConfig {
  opacity: number;
  scale: number;
}

export interface ShaderToyProps {
  mouseMode?: MouseMode;
  className?: string;
  shaderCode: string;
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
  mouseSensitivity?: number;
  damping?: number;
  frameRate?: number;
  pixelRatio?: number;
  paused?: boolean;
  autoPause?: boolean;
  interactive?: boolean;
  noise?: NoiseConfig;
}

export default function ShaderToy({
  mouseMode = "click",
  className,
  shaderCode,
  hue = 0,
  saturation = 1,
  brightness = 1,
  speed = 1,
  mouseSensitivity = 1,
  damping = 0,
  frameRate = 60,
  pixelRatio = 1,
  paused = false,
  autoPause = true,
  interactive = true,
  noise,
}: ShaderToyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shaderRef = useRef<InspiraShaderToy | null>(null);
  const [isInViewport, setIsInViewport] = useState(true);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

  const shouldPlay = useMemo(
    () => !paused && (!autoPause || (isInViewport && isDocumentVisible)),
    [autoPause, isDocumentVisible, isInViewport, paused],
  );

  const backgroundSize = `${(noise?.scale || 0) * 200}%`;
  const noiseOpacity = Math.min(1, Math.max(0, (noise?.opacity ?? 0) / 2));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let shader: InspiraShaderToy;

    try {
      shader = new InspiraShaderToy(container, mouseMode, frameRate, pixelRatio);
      shaderRef.current = shader;
    } catch {
      return;
    }

    shader.setHSV({ hue, saturation, brightness });
    shader.setSpeed(speed);
    shader.setMouseSensitivity(mouseSensitivity);
    shader.setMouseDamping(damping);
    shader.setShader({ source: shaderCode });

    if (shouldPlay) shader.play();
    else shader.pause();

    return () => {
      shader.dispose();
      shaderRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const shader = shaderRef.current;
    if (!shader) return;
    shader.setShader({ source: shaderCode });
  }, [shaderCode]);

  useEffect(() => {
    shaderRef.current?.setHue(hue);
  }, [hue]);

  useEffect(() => {
    shaderRef.current?.setSaturation(saturation);
  }, [saturation]);

  useEffect(() => {
    shaderRef.current?.setBrightness(brightness);
  }, [brightness]);

  useEffect(() => {
    shaderRef.current?.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    shaderRef.current?.setMouseSensitivity(mouseSensitivity);
  }, [mouseSensitivity]);

  useEffect(() => {
    shaderRef.current?.setMouseDamping(damping);
  }, [damping]);

  useEffect(() => {
    const shader = shaderRef.current;
    if (!shader) return;
    if (shouldPlay) shader.play();
    else shader.pause();
  }, [shouldPlay]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !autoPause) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry?.isIntersecting ?? true);
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [autoPause]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    handleVisibilityChange();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const noiseStyle: CSSProperties | undefined =
    noise && noise.opacity > 0
      ? {
          backgroundSize,
          backgroundPosition: "center",
          opacity: noiseOpacity,
        }
      : undefined;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative isolate block h-full w-full overflow-hidden [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full [&>canvas]:max-w-full",
        interactive ? "[&>canvas]:cursor-pointer" : "pointer-events-none",
        className,
      )}
    >
      {noise && noise.opacity > 0 && (
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-[url(https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png)] bg-repeat"
          style={noiseStyle}
          aria-hidden
        />
      )}
    </div>
  );
}

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ── átomos tipográficos ────────────────────────────────────────── */

export function Eyebrow({
  children,
  tone = "lime",
  className,
}: {
  children: ReactNode;
  tone?: "lime" | "yellow" | "magenta";
  className?: string;
}) {
  const color =
    tone === "yellow"
      ? "var(--alfa-yellow)"
      : tone === "magenta"
        ? "var(--yc-magenta)"
        : "var(--alfa-lime)";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em]",
        className,
      )}
      style={{ color }}
    >
      <span
        className="h-px w-6"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        aria-hidden
      />
      {children}
    </div>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn("max-w-[52ch] text-base font-light leading-relaxed sm:text-lg", className)}
      style={{ color: "var(--alfa-fog)" }}
    >
      {children}
    </p>
  );
}

export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn("text-[13px] font-light leading-relaxed", className)}
      style={{ color: "var(--alfa-fog-2)" }}
    >
      {children}
    </p>
  );
}

export function Micro({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div
      className={cn("text-[9px] font-semibold uppercase tracking-[0.22em]", className)}
      style={{ color: "var(--alfa-fog-2)", ...style }}
    >
      {children}
    </div>
  );
}

/** Título grande. `alto` va en Bebas (display de la web), el resto en Montserrat. */
export function Title({
  children,
  accent,
  className,
}: {
  children: ReactNode;
  accent?: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.92] tracking-wide text-white",
        className,
      )}
    >
      {children}
      {accent ? (
        <>
          {" "}
          <span style={{ color: "var(--alfa-lime)" }}>{accent}</span>
        </>
      ) : null}
    </h2>
  );
}

/* ── superficies ────────────────────────────────────────────────── */

export function Glass({
  children,
  className,
  hover = true,
  style,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn("alfa-glass p-5 sm:p-6", hover && "alfa-glass-hover", className)}
      style={style}
    >
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

/** Bloque a la espera del texto literal de la propuesta comercial. */
export function Slot({
  children,
  label = "Editable",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("alfa-slot", className)}>
      <span className="alfa-slot-label">{label}</span>
      <p className="text-[12.5px] font-light leading-relaxed text-white/45">{children}</p>
    </div>
  );
}

export function Chip({
  children,
  tone = "ghost",
  className,
}: {
  children: ReactNode;
  tone?: "ghost" | "yellow" | "lime";
  className?: string;
}) {
  const map = {
    ghost: {
      border: "var(--alfa-line-2)",
      color: "#F2F6F0",
      background: "linear-gradient(180deg, rgba(242,246,240,.07), rgba(242,246,240,.02))",
    },
    yellow: {
      border: "rgba(245,224,75,.42)",
      color: "var(--alfa-yellow)",
      background: "linear-gradient(180deg, rgba(245,224,75,.16), rgba(245,224,75,.05))",
    },
    lime: {
      border: "rgba(143,224,74,.42)",
      color: "var(--alfa-lime)",
      background: "linear-gradient(180deg, rgba(143,224,74,.16), rgba(143,224,74,.05))",
    },
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em]",
        className,
      )}
      style={{ borderColor: map.border, color: map.color, background: map.background }}
    >
      {children}
    </span>
  );
}

export function KeyValue({ k, v, strong }: { k: string; v: ReactNode; strong?: boolean }) {
  return (
    <div
      className="flex flex-col gap-1 border-b py-3 sm:flex-row sm:items-baseline sm:gap-4"
      style={{ borderColor: "var(--alfa-line)" }}
    >
      <span
        className="w-full shrink-0 text-[9.5px] font-semibold uppercase tracking-[0.18em] sm:w-44"
        style={{ color: "var(--alfa-fog-2)" }}
      >
        {k}
      </span>
      <span className={cn("text-[15px] text-white", strong && "font-semibold")}>{v}</span>
    </div>
  );
}

export function Rule({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px w-full", className)}
      style={{ background: "linear-gradient(90deg, var(--alfa-line-2), transparent)" }}
    />
  );
}

/* ── pedestal de producto ───────────────────────────────────────── */

export function Podium({
  src,
  alt,
  size = 160,
  scale = 1.02,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  scale?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("alfa-podium shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={Math.round(size * 1.4)}
        height={Math.round(size * 1.4)}
        unoptimized
        className="absolute bottom-[12%] left-1/2 w-auto -translate-x-1/2 object-contain"
        style={{ maxHeight: `${scale * 100}%` }}
      />
    </div>
  );
}

/* ── sección ────────────────────────────────────────────────────── */

export function Sec({
  id,
  n,
  kicker,
  children,
  className,
  floor = false,
  tint,
}: {
  id: string;
  n: string;
  kicker: string;
  children: ReactNode;
  className?: string;
  floor?: boolean;
  tint?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen scroll-mt-0 flex-col justify-center overflow-hidden px-5 py-24 sm:px-10 lg:px-20 lg:py-28",
        className,
      )}
    >
      <div className="alfa-bg" aria-hidden>
        <div className="alfa-aurora" style={tint ? { background: tint } : undefined} />
        <div className="alfa-grid" />
        {floor ? <div className="alfa-floor" /> : null}
        <div className="alfa-noise" />
        <div className="alfa-vignette" />
      </div>

      {/* numeración de la sección */}
      <div className="pointer-events-none absolute right-5 top-8 z-[2] flex items-baseline gap-2 sm:right-10 lg:right-20">
        <span
          className="font-display text-2xl leading-none"
          style={{ color: "var(--alfa-yellow)" }}
        >
          {n}
        </span>
        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">/ 13</span>
      </div>
      <div className="pointer-events-none absolute left-5 top-9 z-[2] text-[9px] font-semibold uppercase tracking-[0.24em] text-white/30 sm:left-10 lg:left-20">
        {kicker}
      </div>

      <div className="relative z-[3] mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

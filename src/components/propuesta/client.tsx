"use client";

import { useEffect, useRef, useState } from "react";
import { PUNTOS } from "@/lib/propuesta-data";

/** Barra de progreso de lectura. */
export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="alfa-rail-wrap fixed inset-x-0 top-0 z-50 h-[3px] bg-white/5">
      <div
        className="h-full origin-left transition-[width] duration-150 ease-out"
        style={{
          width: `${p * 100}%`,
          background: "linear-gradient(90deg,var(--alfa-yellow),var(--alfa-lime),var(--alfa-green))",
          boxShadow: "0 0 12px rgba(143,224,74,.7)",
        }}
      />
    </div>
  );
}

/** Rail lateral con los 13 puntos y la sección activa. */
export function SectionRail() {
  const [activo, setActivo] = useState<string>(PUNTOS[0].id);

  useEffect(() => {
    const secciones = PUNTOS.map((p) => document.getElementById(p.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!secciones.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActivo(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    secciones.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Índice de la propuesta"
      className="alfa-rail-wrap fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {PUNTOS.map((p) => (
        <a
          key={p.id}
          href={`#${p.id}`}
          data-active={activo === p.id}
          className="alfa-rail-item group flex items-center gap-3"
          aria-current={activo === p.id ? "true" : undefined}
        >
          <span className="alfa-rail-dot" />
          <span className="alfa-rail-label flex items-baseline gap-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em]">
            <span style={{ color: "var(--alfa-yellow)" }}>{p.n}</span>
            <span className="text-white/70">{p.titulo}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}

/** Cifra que cuenta al entrar en pantalla. Formato es-US con separador de miles. */
export function CountUp({
  value,
  prefix = "$",
  suffix = "",
  duration = 1400,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const corrio = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducido) {
      const frame = requestAnimationFrame(() => setN(value));
      return () => cancelAnimationFrame(frame);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || corrio.current) return;
        corrio.current = true;

        const t0 = performance.now();
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - k, 3);
          setN(Math.round(value * eased));
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

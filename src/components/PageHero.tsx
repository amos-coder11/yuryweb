import type { ReactNode } from "react";
import Container from "./Container";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  compact?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`page-aurora relative overflow-hidden border-b border-white/10 ${
        compact ? "pb-16 pt-32 sm:pb-20 sm:pt-40" : "pb-20 pt-36 sm:pb-28 sm:pt-44"
      }`}
    >
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-extrabold tracking-[0.28em] text-yc-magenta">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.92] tracking-wide text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

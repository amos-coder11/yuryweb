import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./HaloCard.module.css";

interface HaloCardProps {
  children: ReactNode;
  accentColor?: string;
  className?: string;
  innerClassName?: string;
}

export default function HaloCard({
  children,
  accentColor = "var(--yc-magenta)",
  className,
  innerClassName,
}: HaloCardProps) {
  return (
    <div
      className={cn(styles.haloCard, className)}
      style={{ "--accent-color": accentColor } as CSSProperties}
    >
      <div className={cn(styles.haloCardInner, innerClassName)}>{children}</div>
    </div>
  );
}

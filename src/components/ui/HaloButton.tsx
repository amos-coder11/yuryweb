import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./HaloButton.module.css";

type HaloButtonVariant = "primary" | "secondary" | "solid";
type HaloButtonSize = "sm" | "md";

interface HaloButtonProps {
  href: string;
  children: ReactNode;
  variant?: HaloButtonVariant;
  size?: HaloButtonSize;
  fullWidth?: boolean;
  className?: string;
}

export default function HaloButton({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: HaloButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        styles.haloButton,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className,
      )}
    >
      <span className={cn(styles.glowLayer, styles.auroraGlow)} aria-hidden />
      <span className={cn(styles.glowLayer, styles.outerRing)} aria-hidden />
      <span className={cn(styles.glowLayer, styles.outerRing)} aria-hidden />
      <span className={cn(styles.glowLayer, styles.outerRing)} aria-hidden />
      <span className={cn(styles.glowLayer, styles.innerGlow)} aria-hidden />
      <span className={cn(styles.glowLayer, styles.mainBorder)} aria-hidden />
      <span className={styles.buttonInner}>{children}</span>
    </Link>
  );
}

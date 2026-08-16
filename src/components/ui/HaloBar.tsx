import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./HaloBar.module.css";

interface HaloBarProps {
  children: ReactNode;
  className?: string;
}

export default function HaloBar({ children, className }: HaloBarProps) {
  return (
    <div className={cn(styles.haloBar, className)}>
      <span className={styles.haloBarGlow} aria-hidden />
      <span className={styles.haloBarSpin} aria-hidden />
      <div className={styles.haloBarInner}>{children}</div>
    </div>
  );
}

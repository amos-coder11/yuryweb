import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const PATTERN_BACKGROUND_DIRECTION = {
  Top: "top",
  Bottom: "bottom",
  Left: "left",
  Right: "right",
  TopLeft: "top-left",
  TopRight: "top-right",
  BottomLeft: "bottom-left",
  BottomRight: "bottom-right",
} as const;

export const PATTERN_BACKGROUND_VARIANT = {
  Grid: "grid",
  Dot: "dot",
  BigDot: "big-dot",
} as const;

export const PATTERN_BACKGROUND_SPEED = {
  Default: 10000,
  Slow: 25000,
  Fast: 5000,
} as const;

export const PATTERN_BACKGROUND_MASK = {
  Ellipse: "ellipse",
  EllipseTop: "ellipse-top",
} as const;

export type PatternBackgroundDirection =
  (typeof PATTERN_BACKGROUND_DIRECTION)[keyof typeof PATTERN_BACKGROUND_DIRECTION];

export type PatternBackgroundSpeed =
  (typeof PATTERN_BACKGROUND_SPEED)[keyof typeof PATTERN_BACKGROUND_SPEED];

const patternBackgroundVariants = cva("relative text-clip bg-[length:24px_24px]", {
  variants: {
    variant: {
      [PATTERN_BACKGROUND_VARIANT.Grid]:
        "bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)]",
      [PATTERN_BACKGROUND_VARIANT.Dot]:
        "bg-[radial-gradient(#ffffff22_1px,transparent_1px)]",
      [PATTERN_BACKGROUND_VARIANT.BigDot]:
        "bg-[radial-gradient(#ffffff28_3px,transparent_3px)]",
    },
    size: {
      xs: "bg-[length:8px_8px]",
      sm: "bg-[length:16px_16px]",
      md: "bg-[length:24px_24px]",
      lg: "bg-[length:32px_32px]",
      xl: "bg-[length:40px_40px]",
    },
  },
  defaultVariants: {
    variant: "grid",
    size: "md",
  },
});

const patternBackgroundMaskVariants = cva(
  "pointer-events-none absolute inset-0 flex items-center justify-center bg-black",
  {
    variants: {
      mask: {
        [PATTERN_BACKGROUND_MASK.Ellipse]:
          "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        [PATTERN_BACKGROUND_MASK.EllipseTop]:
          "[mask-image:radial-gradient(ellipse_at_top,transparent_20%,black)]",
      },
    },
    defaultVariants: {
      mask: "ellipse",
    },
  },
);

interface PatternBackgroundProps {
  className?: string;
  animate?: boolean;
  direction?: PatternBackgroundDirection;
  variant?: VariantProps<typeof patternBackgroundVariants>["variant"];
  size?: VariantProps<typeof patternBackgroundVariants>["size"];
  mask?: VariantProps<typeof patternBackgroundMaskVariants>["mask"];
  speed?: PatternBackgroundSpeed;
}

export default function PatternBackground({
  className,
  animate = false,
  direction = PATTERN_BACKGROUND_DIRECTION.Top,
  variant = PATTERN_BACKGROUND_VARIANT.Grid,
  size = "md",
  mask,
  speed = PATTERN_BACKGROUND_SPEED.Default,
}: PatternBackgroundProps) {
  return (
    <div
      className={cn(
        patternBackgroundVariants({ variant, size }),
        animate && `pattern-move pattern-move-${direction}`,
        className,
      )}
      style={animate ? { animationDuration: `${speed}ms` } : undefined}
    >
      {mask && (
        <div className={cn(patternBackgroundMaskVariants({ mask }))} aria-hidden />
      )}
    </div>
  );
}

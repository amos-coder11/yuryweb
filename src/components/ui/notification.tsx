import HaloCard from "./HaloCard";
import { cn } from "@/lib/utils";

export interface NotificationProps {
  name: string;
  description: string;
  time: string;
  icon: string;
  color: string;
  className?: string;
}

export default function Notification({
  name,
  description,
  icon,
  color,
  className,
}: NotificationProps) {
  return (
    <HaloCard accentColor={color} className={cn("transform-gpu", className)}>
      <div className="flex flex-row items-center gap-2 px-3 py-2 sm:gap-2.5 sm:px-3 sm:py-2.5">
        <div
          className="flex size-8 shrink-0 items-center justify-center rounded-xl sm:size-9 md:size-10"
          style={{
            backgroundColor: `${color}22`,
            border: `1px solid ${color}55`,
          }}
        >
          <span className="text-lg" aria-hidden>
            {icon}
          </span>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <p className="truncate text-xs font-semibold text-white sm:text-sm">{name}</p>
          <p className="truncate text-xs text-white/60">{description}</p>
        </div>
      </div>
    </HaloCard>
  );
}

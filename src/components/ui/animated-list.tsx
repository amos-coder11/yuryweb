"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedListProps<T> {
  items: T[];
  delay?: number;
  maxVisible?: number;
  renderItem: (item: T) => ReactNode;
  className?: string;
}

export default function AnimatedList<T>({
  items,
  delay = 1000,
  maxVisible = 3,
  renderItem,
  className,
}: AnimatedListProps<T>) {
  const [displayed, setDisplayed] = useState<{ item: T; id: string }[]>([]);

  useEffect(() => {
    if (items.length === 0) return;

    let cancelled = false;
    let nextIndex = 0;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
      });

    async function startLoop() {
      const queue: { item: T; id: string }[] = [];
      const visibleCount = Math.min(maxVisible, items.length);

      while (!cancelled && queue.length < visibleCount) {
        queue.push({
          item: items[nextIndex]!,
          id: `${nextIndex}-${Date.now()}`,
        });
        nextIndex = (nextIndex + 1) % items.length;
        setDisplayed([...queue]);
        await wait(delay);
      }

      while (!cancelled) {
        queue.shift();
        queue.push({
          item: items[nextIndex]!,
          id: `${nextIndex}-${Date.now()}`,
        });
        nextIndex = (nextIndex + 1) % items.length;
        setDisplayed([...queue]);
        await wait(delay);
      }
    }

    startLoop();

    return () => {
      cancelled = true;
    };
  }, [items, delay, maxVisible]);

  return (
    <LayoutGroup>
      <div className={cn("flex flex-col items-stretch gap-3 overflow-visible sm:gap-4", className)}>
        <div className="flex flex-col-reverse items-stretch gap-3 overflow-visible sm:gap-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {displayed.map((entry) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, scale: 0.88, y: 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -28 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 36,
                  layout: { type: "spring", stiffness: 400, damping: 38 },
                }}
                className="w-full origin-bottom"
              >
                {renderItem(entry.item)}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </LayoutGroup>
  );
}

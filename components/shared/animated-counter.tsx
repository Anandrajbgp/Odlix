"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
  format?: "number" | "compact";
};

export function AnimatedCounter({
  end,
  durationMs = 1400,
  suffix = "",
  className,
  format = "number"
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node === null) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting === true) {
          setRunKey((prev) => prev + 1);
        }
      },
      {
        threshold: 0.45
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();

    setValue(0);

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = elapsed >= durationMs ? 1 : elapsed / durationMs;
      const nextValue = Math.round(end * progress);
      setValue(nextValue > end ? end : nextValue);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [durationMs, end, runKey]);

  const formatted = useMemo(() => {
    if (format === "compact") {
      return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
    }
    return value.toLocaleString();
  }, [format, value]);

  return (
    <span ref={nodeRef} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}

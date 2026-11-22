"use client";

import React, { useState, useEffect } from "react";

interface BackgroundBubblesProps {
  count?: number;
  multicolor?: boolean;
}

const platformColors = [
  "rgba(0, 0, 0, 0.95)",  // Pure Black Star
  "rgba(0, 0, 0, 0.9)",   // Black Star
  "rgba(0, 0, 0, 0.9)",   // Black Star
  "rgba(0, 0, 0, 0.9)",   // Black Star
  "rgba(0, 0, 0, 0.9)",   // Black Star
  "rgba(0, 0, 0, 0.9)",   // Black Star
  "rgba(0, 0, 0, 0.9)",   // Black Star
  "rgba(0, 0, 0, 0.9)",   // Black Star
];

export function BackgroundBubbles({ count = 8, multicolor = true }: BackgroundBubblesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3 + 1.5; // Tiny stars 1.5px to 4.5px
      const left = Math.random() * 100; // percentage width across screen
      const duration = Math.random() * 14 + 10; // 10s to 24s slow float
      const delay = Math.random() * 12; // 0s to 12s stagger
      const opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1.0 high brightness
      const color = multicolor ? platformColors[i % platformColors.length] : "rgba(0, 0, 0, 0.9)";

      return {
        id: i,
        size,
        left,
        duration,
        delay,
        opacity,
        color,
      };
    });
  }, [count, multicolor]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="absolute rounded-full animate-bubble bg-black"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              bottom: `-20px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 3}px #000000, 0 0 ${star.size * 5}px ${star.color}, 0 0 ${star.size * 8}px ${star.color}`,
            }}
          />
        );
      })}
    </div>
  );
}

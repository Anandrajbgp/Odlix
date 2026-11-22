"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateCapability = () => {
      setEnabled(mediaQuery.matches);
    };

    updateCapability();
    mediaQuery.addEventListener("change", updateCapability);

    return () => {
      mediaQuery.removeEventListener("change", updateCapability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${event.clientX - 48}px, ${event.clientY - 48}px, 0)`;
      }
    };

    const onPointerLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    const onPointerEnter = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointerenter", onPointerEnter);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerenter", onPointerEnter);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-[96px] w-[96px] rounded-full opacity-100 transition-opacity duration-150"
      style={{
        background:
          "radial-gradient(circle, rgba(129,140,248,0.30) 0%, rgba(34,211,238,0.16) 35%, rgba(168,85,247,0.10) 58%, rgba(0,0,0,0) 72%)",
        filter: "blur(10px)",
      }}
    />
  );
}

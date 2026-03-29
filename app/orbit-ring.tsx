"use client";

import { useRef, useEffect, CSSProperties } from "react";

export function OrbitRing({
  children,
  className = "",
  lightColor = "#a5b4fc",
  duration = 4,
}: {
  children: React.ReactNode;
  className?: string;
  lightColor?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const rx = w / 2;
    const ry = h / 2;
    el.style.setProperty(
      "--orbit-path",
      `path('M ${rx} 0 A ${rx} ${ry} 0 1 1 ${rx - 0.01} 0 Z')`,
    );
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ isolation: "isolate" } as CSSProperties}
    >
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute w-12 h-12 animate-star-btn rounded-full blur-md"
          style={
            {
              "--duration": duration,
              offsetPath: "var(--orbit-path)",
              offsetDistance: "0%",
              background: `radial-gradient(circle, ${lightColor}, transparent)`,
              transform: "translate(-50%, -50%)",
            } as CSSProperties
          }
        />
      </div>
      {children}
    </div>
  );
}

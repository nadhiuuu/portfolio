"use client";

import { useMemo } from "react";
import { Sparkles } from "lucide-react";

type Particle = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

export default function BackgroundSparkles() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        top: `${(i * 73) % 100}%`,
        left: `${(i * 41 + 17) % 100}%`,
        size: 12 + ((i * 7) % 14),
        delay: `${(i % 6) * 0.4}s`,
        duration: `${6 + (i % 5) * 1.5}s`,
        opacity: 0.15 + (i % 4) * 0.08,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-50 dark:opacity-20">
        <div className="absolute -top-20 left-1/3 h-[360px] w-[360px] rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute -bottom-28 right-[-80px] h-[420px] w-[420px] rounded-full bg-lime-600/40 blur-3xl dark:bg-lime-500/10" />
      </div>

      {particles.map((p) => (
        <Sparkles
          key={p.id}
          className="absolute text-emerald-600/60 dark:text-emerald-300/80"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
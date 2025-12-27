"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

type Sparkle = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  opacity: number;
};

export default function BackgroundSparkles() {
  const [sparkles] = useState<Sparkle[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${(i * 83) % 100}%`,
      left: `${(i * 47) % 100}%`,
      size: (i % 5) + 4,
      delay: `${(i % 4) * 0.8}s`,
      opacity: 0.3 + (i % 3) * 0.15,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((s) => (
        <Sparkles
          key={s.id}
          className="absolute text-purple-400/50 animate-pulse"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size * 4}px`,
            height: `${s.size * 4}px`,
            opacity: s.opacity,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

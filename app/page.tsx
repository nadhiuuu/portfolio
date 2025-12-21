import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Home() {
  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 5}%`,
    left: `${Math.random() * 80 + 5}%`,
    size: Math.floor(Math.random() * 5) + 4,
    delay: `${Math.random() * 3}s`,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <div className="relative flex min-h-[89vh] items-start pt-5 bg-zinc-50 px-4 font-sans dark:bg-black overflow-hidden">
      {sparkles.map((s) => (
        <Sparkles
          key={s.id}
          className="absolute text-purple-400 animate-float"
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

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-10 md:flex-row md:px-8" style={{ animationDelay: "0.5s" }}>
        <div className="flex flex-col text-center md:text-left animate-fade-up">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl">
            Hi, I’m <span className="text-purple-600 dark:text-purple-400">Nadhifatus Aulia Enggarsya</span>👋
          </h1>
          <h2 className="mt-4 text-lg font-medium text-gray-500 md:text-xl animate-fade-up">
            Informatics Engineering Student, Frontend Enthusiast, Administration Enthusiast
          </h2>
        </div>
        <div className="flex justify-center relative animate-fade-up">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-gray-500 sm:h-64 sm:w-64 md:h-40 md:w-40">
            <Image src="/image/Foto.jpeg" alt="enggar" fill className="object-cover" priority/>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 flex min-h-[90vh] flex-col justify-center pt-20">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        {/* Foto */}
        <div className="relative opacity-0 animate-[fadeSide_1s_ease-out_0.3s_forwards]">
          <div aria-hidden className="absolute -inset-8 -z-10 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-500/10"/>
          <div className="relative h-60 w-60 overflow-hidden rounded-full border border-emerald-200/60 bg-white/40 shadow-xl ring-2 ring-emerald-200/40 transition-all duration-500 hover:scale-105 sm:h-72 sm:w-72 dark:border-emerald-900/40 dark:bg-zinc-950/30 dark:ring-emerald-900/40">
            <Image src="/image/Foto_2.jpeg" alt="Nadhifatus Aulia Enggarsya" fill className="object-cover transition-transform duration-700 hover:scale-110"priority/>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 dark:from-black/30 dark:to-transparent" />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col text-center md:text-left">
          <h1 className="opacity-0 text-4xl font-bold tracking-tight sm:text-5xl animate-[fadeUp_0.8s_ease-out_0.1s_forwards]">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-lime-300">
              Nadhifatus Aulia Enggarsya
            </span>{" "}
            <span className="inline-block origin-[70%_70%] animate-[wave_1.6s_ease-in-out_infinite]">
              👋
            </span>
          </h1>

          <h2 className="opacity-0 mt-3 text-xl font-bold text-zinc-600 dark:text-zinc-400 animate-[fadeUp_0.8s_ease-out_0.25s_forwards]">
            Informatics Engineering Student, Frontend & Administration Enthusiast
          </h2>

          <p className="opacity-0 mt-3 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 text-justify md:text-left animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
            An Informatics Engineering student with a strong interest in frontend development and administrative work. Experienced in
            managing data, documentation, and financial records, while actively learning to build organized, simple, and user-friendly
            digital solutions.
          </p>

          <div className="opacity-0 mt-6 flex justify-center gap-4 md:justify-start animate-[fadeUp_0.8s_ease-out_0.55s_forwards]">
            <a
              href="https://drive.google.com/file/d/1bMPuMgbQB5PvUJ809dZIvmDXnHVbTr9w/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-600 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-emerald-300"
            >
              <FileText className="h-4 w-4" />
              Curriculum Vitae
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface ExperienceItemProps {
  logo: string;
  alt: string;
  title: string;
  date: string;
  role: string;
  description: string;
}

export default function ExperienceItem({
  logo,
  alt,
  title,
  date,
  role,
  description,
}: ExperienceItemProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggle();
      }}
      aria-expanded={open}
      className="relative group select-none cursor-pointer rounded-2xl border border-emerald-200/40 bg-white/60 p-4 shadow-sm backdrop-blur transition-all duration-300
      hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-lg hover:shadow-emerald-500/10
      active:translate-y-0 active:scale-[0.99]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white
      sm:p-5
      dark:border-emerald-900/30 dark:bg-zinc-950/30 dark:focus-visible:ring-emerald-300/40 dark:focus-visible:ring-offset-zinc-950"
    >
      {/* HEADER */}
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-emerald-200/40 bg-white/70 p-2 shadow-sm sm:h-12 sm:w-12 dark:border-emerald-900/30 dark:bg-zinc-900/40">
          <Image src={logo} alt={alt} fill className="object-contain p-1" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 sm:text-lg dark:text-zinc-50 dark:group-hover:text-emerald-300">
              {title}
            </h3>

            <ChevronDown
              className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                open
                  ? "rotate-180 text-emerald-600 dark:text-emerald-300"
                  : "text-zinc-400"
              }`}
            />
          </div>

          <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <p className="font-medium text-zinc-700 dark:text-zinc-300">
              {role}
            </p>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* ACCORDION CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>

      {/* soft highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-emerald-950/30"
      />
    </div>
  );
}
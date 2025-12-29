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

  return (
    <div
      onClick={() => setOpen(!open)}
      className="group cursor-pointer rounded-2xl border border-zinc-100 bg-white p-5
      transition-all duration-300
      hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5
      dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      {/* HEADER */}
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl
        border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-800">
          <Image src={logo} alt={alt} fill className="object-contain p-1" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-sans text-lg font-bold text-zinc-800 transition-colors
            group-hover:text-purple-600 dark:text-zinc-100 dark:group-hover:text-purple-600">
              {title}
            </h3>

            <ChevronDown
              className={`h-5 w-5 text-zinc-400 transition-transform duration-300 ${
                open ? "rotate-180 text-purple-500" : ""
              }`}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mt-1">
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">
              {role}
            </p>
            <span className="text-sm font-medium text-zinc-400">
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* ACCORDION CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-sans text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}

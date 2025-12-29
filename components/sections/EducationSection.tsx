import Image from "next/image";
import { GraduationCap } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="education" className="scroll-mt-20 py-10">
          <div className="mb-5 flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-purple-600" />
            <h2 className="font-sans text-3xl font-bold tracking-tight">Education</h2>
          </div>
          <div className="grid gap-6">
            <a
              href="https://www.polije.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Politeknik Negeri Jember Website"
              className="group block focus:outline-none"
            >
              <div className="relative rounded-2xl border border-zinc-100 bg-white p-5 transition-all duration-200 ease-out
                hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5
                active:translate-y-0 active:scale-[0.97] active:shadow-md
                dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-800">
                    <Image
                      src="/image/Logo-POLIJE.png"
                      alt="Logo Politeknik Negeri Jember"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h3 className="font-sans text-lg font-bold text-zinc-800 transition-colors group-hover:text-purple-600 dark:text-zinc-100 dark:group-hover:text-purple-600">
                        Politeknik Negeri Jember
                      </h3>
                      <span className="font-sans text-sm font-medium text-zinc-400">
                        2023 — Present
                      </span>
                    </div>
                    <p className="font-sans font-medium text-zinc-600 dark:text-zinc-400">
                      Bachelor of Informatics Engineering
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.smasa-nganjuk.sch.id/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SMA Negeri 1 Nganjuk Website"
              className="group block focus:outline-none"
            >
              <div className="relative rounded-2xl border border-zinc-100 bg-white p-5 transition-all duration-200 ease-out
                hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5
                active:translate-y-0 active:scale-[0.97] active:shadow-md
                dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-800">
                    <Image
                      src="/image/Logo-SMASA.png"
                      alt="Logo SMA Negeri 1 Nganjuk"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h3 className="font-sans text-lg font-bold text-zinc-800 transition-colors group-hover:text-purple-600 dark:text-zinc-100 dark:group-hover:text-purple-600">
                        SMA Negeri 1 Nganjuk
                      </h3>
                      <span className="font-sans text-sm font-medium text-zinc-400">
                        2020 — 2023
                      </span>
                    </div>
                    <p className="font-sans font-medium text-zinc-600 dark:text-zinc-400">
                      MIPA – Mathematics and Science
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
  );
}
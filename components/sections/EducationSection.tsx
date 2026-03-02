import Image from "next/image";
import { GraduationCap, ExternalLink } from "lucide-react";

const educationItems = [
  {
    name: "Politeknik Negeri Jember",
    href: "https://www.polije.ac.id",
    ariaLabel: "Politeknik Negeri Jember Website",
    period: "2023 — Present",
    degree: "Bachelor of Informatics Engineering",
    logoSrc: "/image/Logo-POLIJE.png",
    logoAlt: "Logo Politeknik Negeri Jember",
  },
  {
    name: "SMA Negeri 1 Nganjuk",
    href: "https://www.smasa-nganjuk.sch.id/",
    ariaLabel: "SMA Negeri 1 Nganjuk Website",
    period: "2020 — 2023",
    degree: "MIPA – Mathematics and Science",
    logoSrc: "/image/Logo-SMASA.png",
    logoAlt: "Logo SMA Negeri 1 Nganjuk",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 py-12">
      <div className="mb-7 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-200/60 bg-emerald-50/70 text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
          <GraduationCap className="h-6 w-6" />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Academic background and learning journey.
          </p>
        </div>
      </div>
      <div className="relative pl-6">
        <div aria-hidden className="absolute left-2 top-1 h-full w-px bg-gradient-to-b from-emerald-300/60 via-emerald-200/30 to-transparent dark:from-emerald-700/40 dark:via-emerald-800/20"/>
        <div className="grid gap-5">
          {educationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className="group block focus:outline-none"
            >
              <div className="relative rounded-2xl border border-emerald-200/40 bg-white/60 p-4 shadow-sm backdrop-blur transition-all duration-200 ease-out hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-lg hover:shadow-emerald-500/10 active:translate-y-0 active:scale-[0.99] sm:p-5 dark:border-emerald-900/30 dark:bg-zinc-950/30 dark:hover:border-emerald-800/40">
                <div aria-hidden className="absolute -left-[22px] top-7 h-3.5 w-3.5 rounded-full border border-emerald-200 bg-emerald-100 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950"/>
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Logo */}
                  <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-emerald-200/40 bg-white/70 p-2 shadow-sm sm:h-12 sm:w-12 dark:border-emerald-900/30 dark:bg-zinc-900/40">
                    <Image
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-50 dark:group-hover:text-emerald-300">
                        {item.name}
                      </h3>
                      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:text-right">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 font-medium text-zinc-700 dark:text-zinc-300">
                      {item.degree}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-700/90 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100 dark:text-emerald-300/90">
                      <span>Visit website</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-emerald-950/30"/>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
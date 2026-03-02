import Image from "next/image";
import { Code, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SABI - Sahabat Cabai",
    desc: "A smart farming platform that combines IoT sensors for plant monitoring and SVM-based image processing to detect chili leaf diseases early and ensure optimal crop health.",
    tech: ["PHP", "Laravel", "Blade", "Tailwind CSS", "JavaScript", "MariaDB"],
    image: "/image/SABI.png",
    code: "https://github.com/nadhiuuu/sabi-sahabat_cabai",
  },
  {
    title: "JTI Care",
    desc: "A web-based donation platform for the Information Technology Department, built with Laravel 10 and Midtrans to support secure and accessible donations for students in need.",
    tech: ["PHP", "Laravel", "Blade", "SCSS/CSS", "JavaScript", "MySQL", "Midtrans SDK"],
    image: "/image/JTICare.jpeg",
    code: "https://github.com/nadhiuuu/jticare",
  },
];

function TechChips({ tech }: { tech: string[] }) {
  const visible = tech.slice(0, 5);
  const rest = tech.length - visible.length;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((t) => (
        <span
          key={t}
          className="rounded-full border border-emerald-200/50 bg-emerald-50/60 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-900/30 dark:bg-emerald-950/30 dark:text-emerald-200"
        >
          {t}
        </span>
      ))}
      {rest > 0 ? (
        <span className="rounded-full border border-zinc-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300">
          +{rest}
        </span>
      ) : null}
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section id="project" className="scroll-mt-20 py-12">
      {/* Header */}
      <div className="mb-7 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-200/60 bg-emerald-50/70 text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
          <Code className="h-6 w-6" />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Projects
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Selected works that showcase my skills and learning.
          </p>
        </div>
      </div>

      {/* Grid (no empty col) */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-emerald-200/40 bg-white/60 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-emerald-900/30 dark:bg-zinc-950/30"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-5">
              <TechChips tech={p.tech} />

              <div>
                <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-emerald-700 dark:text-zinc-50 dark:group-hover:text-emerald-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {p.desc}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-auto flex gap-2">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full rounded-xl bg-zinc-900 text-white hover:bg-emerald-700 active:scale-[0.99] dark:bg-white dark:text-black dark:hover:bg-emerald-300">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </a>
              </div>
            </div>

            {/* soft highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-emerald-950/30"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
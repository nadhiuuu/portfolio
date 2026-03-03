import { Github, Linkedin, Handshake } from "lucide-react";

export default function ConnectSection() {
  return (
    <section id="connect" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/70 px-4 py-1.5 text-sm font-medium text-emerald-700 backdrop-blur dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
          <Handshake className="h-4 w-4" />
          <span>Let’s Connect</span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Open for Collaboration
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
          I’m always excited to collaborate on meaningful projects, learn from
          new experiences, and contribute to a team. You can find my work on
          GitHub or reach out professionally via LinkedIn.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/nadhiuuu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
          className="group relative flex items-start gap-4 rounded-2xl border border-emerald-200/40 bg-white/60 p-4 shadow-sm backdrop-blur transition-all duration-300
          hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-lg hover:shadow-emerald-500/10
          active:translate-y-0 active:scale-[0.99]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white
          dark:border-emerald-900/30 dark:bg-zinc-950/30 dark:focus-visible:ring-emerald-300/40 dark:focus-visible:ring-offset-zinc-950
          sm:items-center sm:p-5"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200/40 bg-emerald-50/60 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:border-emerald-900/30 dark:bg-emerald-950/30 dark:text-emerald-300 dark:group-hover:bg-emerald-400 dark:group-hover:text-zinc-950 sm:h-12 sm:w-12">
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              GitHub
            </h3>
            <p className="truncate text-base font-bold text-zinc-900 dark:text-zinc-50 sm:text-lg">
              github.com/nadhiuuu
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Explore repositories & projects
            </p>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-emerald-950/30"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nadhifatusae"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
          className="group relative flex items-start gap-4 rounded-2xl border border-emerald-200/40 bg-white/60 p-4 shadow-sm backdrop-blur transition-all duration-300
          hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-lg hover:shadow-emerald-500/10
          active:translate-y-0 active:scale-[0.99]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white
          dark:border-emerald-900/30 dark:bg-zinc-950/30 dark:focus-visible:ring-emerald-300/40 dark:focus-visible:ring-offset-zinc-950
          sm:items-center sm:p-5"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200/40 bg-emerald-50/60 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:border-emerald-900/30 dark:bg-emerald-950/30 dark:text-emerald-300 dark:group-hover:bg-emerald-400 dark:group-hover:text-zinc-950 sm:h-12 sm:w-12">
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              LinkedIn
            </h3>
            <p className="truncate text-base font-bold text-zinc-900 dark:text-zinc-50 sm:text-lg">
              linkedin.com/in/nadhifatusae
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Professional profile & contact
            </p>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-emerald-950/30"
          />
        </a>
      </div>
    </section>
  );
}
import { Mail, Instagram } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-3 flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
              <Mail className="h-4 w-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s Work Together
            </h2>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              I am currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I’ll try my best
              to get back to you!
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="mailto:nadhifatusae@gmail.com"
              aria-label="Send email"
              className="group flex items-center gap-4 rounded-2xl border border-zinc-100 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-zinc-600 transition-colors group-hover:bg-purple-600 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-50 dark:group-hover:bg-purple-600">
                <Mail className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Email Me
                </h3>
                <p className="truncate text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-100">
                  nadhifatusae@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/ersyaulia_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Instagram DM"
              className="group flex items-center gap-4 rounded-2xl border border-zinc-100 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-zinc-600 transition-colors group-hover:bg-purple-600 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-50 dark:group-hover:bg-purple-600">
                <Instagram className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  DM Me
                </h3>
                <p className="truncate text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-100">
                  instagram.com/ersyaulia_
                </p>
              </div>
            </a>
          </div>
        </section>
  );
}
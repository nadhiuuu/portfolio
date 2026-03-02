import { Github, Linkedin, Instagram, Mail, Leaf } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/nadhiuuu",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/nadhifatusae",
      icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ersyaulia_",
      icon: Instagram,
    },
    {
      label: "Email",
      href: "mailto:nadhifatusae@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-emerald-200/40 bg-white/60 backdrop-blur dark:border-emerald-900/30 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left */}
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-semibold">Nadhifatus Aulia Enggarsya</span>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              © {year} All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/40 bg-white/60 text-zinc-600 shadow-sm transition-all
                hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md
                active:translate-y-0 active:scale-[0.98]
                dark:border-emerald-900/30 dark:bg-zinc-950/30 dark:text-zinc-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
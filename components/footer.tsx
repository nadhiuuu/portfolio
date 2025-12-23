import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Nadhifatus Aulia Enggarsya. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/nadhiuuu"
              target="_blank"
              aria-label="GitHub"
              className="text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-500"
            >
              <Github size={18} />
            </Link>

            <Link
              href="https://linkedin.com/in/nadhifatusae"
              target="_blank"
              aria-label="LinkedIn"
              className="text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-500"
            >
              <Linkedin size={18} />
            </Link>

            <Link
              href="https://www.instagram.com/ersyaulia_"
              target="_blank"
              aria-label="Instagram"
              className="text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-500"
            >
              <Instagram size={18} />
            </Link>

            <Link
              href="mailto:nadhifatusae@gmail.com"
              aria-label="Email"
              className="text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-500"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

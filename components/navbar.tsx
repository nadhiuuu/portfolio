"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Menu,
  Code,
  Handshake ,
  Sparkles,
  Sun,
  Moon,
  GraduationCap,
  Layers,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home", icon: Sparkles },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Experience", href: "#experience", icon: Layers },
  { name: "Achievements", href: "#achievement", icon: Award },
  { name: "Project", href: "#project", icon: Code },
  { name: "Connect", href: "#connect", icon: Handshake  },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  // Detect Active Section by Scroll
  React.useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const onScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id!);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-gradient-to-b from-emerald-50/80 via-white/60 to-white/40 backdrop-blur-md dark:border-emerald-200/10 dark:bg-gradient-to-b dark:from-emerald-950/70 dark:via-zinc-950/60 dark:to-zinc-950/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2 text-xl font-bold transition-transform hover:scale-105"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-300">
            Portfolio.
          </span>
        </Link>

        {/* Navbar Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = activeSection === href.replace("#", "");

            return (
              <Link
                key={name}
                href={href}
                className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-all ${
                    isActive
                      ? "opacity-100 scale-110"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
                {name}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <div className="ml-4 flex items-center gap-2 border-l border-zinc-200 pl-4 dark:border-zinc-800">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-zinc-600 dark:text-zinc-400">
              {mounted &&
                (theme === "dark" ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                ))}
            </Button>
          </div>
        </nav>

        {/* Navbar Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-emerald-600 dark:text-emerald-400">
            {mounted &&
              (theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              ))}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-emerald-600 dark:text-emerald-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px]">
              <div className="mt-8 flex flex-col gap-2">
                {navItems.map(({ name, href, icon: Icon }) => {
                  const isActive = activeSection === href.replace("#", "");

                  return (
                    <Link
                      key={name}
                      href={href}
                      className={`flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                          : "text-zinc-700 hover:bg-emerald-50 hover:text-emerald-600 dark:text-zinc-300 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {name}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
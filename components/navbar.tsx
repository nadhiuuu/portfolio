"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Menu,
  Heart,
  Code,
  Mail,
  Sparkles,
  Sun,
  Moon,
  GraduationCap,
  BadgeInfo,
  Layers,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/", icon: Sparkles },
  { name: "About", href: "/about", icon: BadgeInfo },
  { name: "Experience", href: "/experience", icon: Layers },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Project", href: "/project", icon: Code },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/70 backdrop-blur-md dark:border-purple-900/50 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold transition-transform hover:scale-105"
        > 
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-fuchsia-300">
            Portfolio.
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={name}
                href={href}
                className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-all ${
                    isActive 
                      ? "opacity-100 scale-110" 
                      : "opacity-0 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                />
                {name}
              </Link>
            );
          })}

          <div className="ml-4 flex items-center gap-2 border-l border-zinc-200 pl-4 dark:border-zinc-800">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-zinc-600 dark:text-zinc-400"
            >
              {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </Button>
          </div>
        </nav>

        {/* ================= MOBILE NAV ================= */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-purple-600 dark:text-purple-400"
          >
            {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-purple-600 dark:text-purple-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px]">
              <div className="mt-8 flex flex-col gap-2">
                {navItems.map(({ name, href, icon: Icon }) => {
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={name}
                      href={href}
                      className={`flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400"
                          : "text-zinc-700 hover:bg-purple-50 hover:text-purple-600 dark:text-zinc-300 dark:hover:bg-purple-950/30 dark:hover:text-purple-400"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-all ${
                          isActive ? "opacity-100" : "opacity-70"
                        }`}
                      />
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
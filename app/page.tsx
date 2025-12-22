"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, GraduationCap, Layers, Code, Mail, FileText, Github, ExternalLink} from "lucide-react";

// --- Komponen Sparkle Background ---
const BackgroundSparkles = () => {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.floor(Math.random() * 5) + 4,
      delay: `${Math.random() * 4}s`,
      opacity: Math.random() * 0.4 + 0.3,
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((s) => (
        <Sparkles
          key={s.id}
          className="absolute text-purple-400/50 animate-pulse"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size * 4}px`,
            height: `${s.size * 4}px`,
            opacity: s.opacity,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100 selection:bg-purple-100 dark:selection:bg-purple-900/30">
      <BackgroundSparkles />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="flex min-h-[90vh] flex-col justify-center pt-20">
          <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
            <div className="flex flex-col text-center md:text-left">
              <h1 className="opacity-0 text-4xl font-bold tracking-tight sm:text-5xl animate-[fadeUp_0.8s_ease-out_0.1s_forwards]">
                Hi, I’m <span className="text-purple-600 dark:text-purple-400"> Nadhifatus Aulia Enggarsya</span>👋
              </h1>
              <h2 className="opacity-0 mt-3 text-xl font-bold text-zinc-600 dark:text-zinc-400 animate-[fadeUp_0.8s_ease-out_0.25s_forwards]">
                Informatics Engineering Student, Frontend Enthusiast & Administration Enthusiast
              </h2>
              <p className="opacity-0 mt-2 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 text-justify md:text-left animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
                An Informatics Engineering student with a strong interest in frontend development
                and administrative work. Experienced in managing data, documentation, and
                financial records, while actively learning to build organized, simple, and
                user-friendly digital solutions that improve efficiency and usability.
              </p>
              <div className="opacity-0 mt-5 flex justify-center md:justify-start gap-4 animate-[fadeUp_0.8s_ease-out_0.55s_forwards]">
                <a href="#cv" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                  <FileText className="h-4 w-4" />Curriculum Vitae
                </a>
              </div>
            </div>
            <div className="relative opacity-0 translate-x-6 animate-[fadeSide_1s_ease-out_0.3s_forwards]">
              <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 rotate-3 transition-transform duration-500 hover:rotate-0 sm:h-72 sm:w-72 shadow-2xl">
                <Image src="/image/Foto.jpeg" alt="Nadhifatus Aulia Enggarsya" fill className="object-cover" priority/>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-purple-200/50 blur-2xl dark:bg-purple-900/20" />
            </div>

          </div>
        </section>

        {/* ================= SECTION EDUCATION ================= */}
        <section id="education" className="py-10">
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="text-purple-600 w-8 h-8" />
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
          <div className="grid gap-6">
            <div className="group relative rounded-2xl border border-zinc-100 bg-white p-5 transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-800">
                  <Image src="/image/Logo-POLIJE.png" alt="Logo Polije" fill className="object-contain p-1" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-purple-600 transition-colors">
                      Politeknik Negeri Jember
                    </h3>
                    <span className="text-sm font-medium text-zinc-400">2023 — Present</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">Bachelor of Informatics Engineering</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-2xl border border-zinc-100 bg-white p-5 transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-800">
                  <Image src="/image/Logo-SMASA.png" alt="Logo SMASA" fill className="object-contain p-1"/>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-purple-600 transition-colors">
                      SMA Negeri 1 Nganjuk
                    </h3>
                    <span className="text-sm font-medium text-zinc-400">2020 — 2023</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">MIPA - Mathematics and Science</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION EXPERIENCE ================= */}
        <section id="experience" className="py-10">
          <div className="flex items-center gap-2 mb-5">
            <Layers className="text-purple-600" />
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          </div>
          <div className="grid gap-6">
            <div className="group relative rounded-2xl border border-zinc-100 bg-white p-5 transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-800">
                  <Image src="/image/Logo-TSI.png" alt="Logo TSI" fill className="object-contain p-1" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-purple-600 transition-colors">
                      PT. Truspices Indonesia — Sidoarjo
                    </h3>
                    <span className="text-sm font-medium text-zinc-400">June – August 2025</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">Admin Warehouse</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-2xl border border-zinc-100 bg-white p-5 transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-800">
                  <Image src="/image/Logo-HMJTI.png" alt="Logo HMJTI" fill className="object-contain p-1"/>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-purple-600 transition-colors">
                      Himpunan Mahasiswa Jurusan Teknologi Informasi (HMJ TI)
                    </h3>
                    <span className="text-sm font-medium text-zinc-400">January – December 2024</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">Treasurer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION PROJETC ================= */}
        <section id="project" className="py-10">
          <div className="mb-5 flex items-center gap-2">
            <Code className="text-purple-600" />
            <h2 className="text-3xl font-bold tracking-tight">Project</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* ================= PROJECT CARD ================= */}
            {[
              {
                title: "SABI - Sahabat Cabai",
                desc: "A smart farming platform that combines IoT sensors for plant monitoring and SVM-based image processing to detect chili leaf diseases early and ensure optimal crop health.",
                tech: ["PHP", "Laravel", "Tailwind CSS", "JavaScript"],
                image: "/image/SABI.png",
                link: "https://github.com/nadhiuuu/sabi-sahabat_cabai",
              },
              {
                title: "JTI Care",
                desc: "A web-based donation platform for the Information Technology Department, built with Laravel 10 and Midtrans to support secure and accessible donations for students in need.",
                tech: ["PHP", "Laravel", "Tailwind CSS", "JavaScript"],
                image: "/image/.png",
                link: "https://github.com/nadhiuuu/jticare",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white transition-all duration-500 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                {/* IMAGE */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110"/>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6">
                  {/* TECH STACK */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-purple-600">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mb-6 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.desc}
                  </p>

                  {/* BUTTON (SELALU DI BAWAH) */}
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-700 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, GraduationCap, Layers, Code, Mail, FileText, Github, Instagram} from "lucide-react";
import ExperienceItem from "@/components/ui/experience-item";

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
        <section id="home" className="scroll-mt-20 flex min-h-[90vh] flex-col justify-center pt-20">
          <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
            <div className="flex flex-col text-center md:text-left">
              <h1 className="opacity-0 text-4xl font-bold tracking-tight sm:text-5xl animate-[fadeUp_0.8s_ease-out_0.1s_forwards]">
                Hi, I’m <span className="text-purple-600 dark:text-purple-400"> Nadhifatus Aulia Enggarsya</span>👋
              </h1>
              <h2 className="opacity-0 mt-3 text-xl font-bold text-zinc-600 dark:text-zinc-400 animate-[fadeUp_0.8s_ease-out_0.25s_forwards]">
                Informatics Engineering Student, Frontend & Administration Enthusiast
              </h2>
              <p className="opacity-0 mt-2 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 text-justify md:text-left animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
                An Informatics Engineering student with a strong interest in frontend development
                and administrative work. Experienced in managing data, documentation, and
                financial records, while actively learning to build organized, simple, and
                user-friendly digital solutions that improve efficiency and usability.
              </p>
              <div className="opacity-0 mt-5 flex justify-center md:justify-start gap-4 animate-[fadeUp_0.8s_ease-out_0.55s_forwards]">
                <a href="#cv" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-500 dark:bg-white dark:text-black dark:hover:bg-purple-500">
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
        <section id="education" className="scroll-mt-20 py-10">
          <div className="mb-5 flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
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
                      <h3 className="text-lg font-bold text-zinc-800 transition-colors group-hover:text-purple-600 dark:text-zinc-100 dark:group-hover:text-purple-600">
                        Politeknik Negeri Jember
                      </h3>
                      <span className="text-sm font-medium text-zinc-400">
                        2023 — Present
                      </span>
                    </div>
                    <p className="font-medium text-zinc-600 dark:text-zinc-400">
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
                      <h3 className="text-lg font-bold text-zinc-800 transition-colors group-hover:text-purple-600 dark:text-zinc-100 dark:group-hover:text-purple-600">
                        SMA Negeri 1 Nganjuk
                      </h3>
                      <span className="text-sm font-medium text-zinc-400">
                        2020 — 2023
                      </span>
                    </div>
                    <p className="font-medium text-zinc-600 dark:text-zinc-400">
                      MIPA – Mathematics and Science
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* ================= SECTION EXPERIENCE ================= */}
        <section id="experience" className="scroll-mt-20 py-10">
          <div className="flex items-center gap-2 mb-5">
            <Layers className="text-purple-600" />
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          </div>

          <div className="grid gap-6">
            <ExperienceItem
              logo="/image/Logo-TSI.png"
              alt="Logo TSI"
              title="PT. Truspices Indonesia — Sidoarjo"
              date="June – August 2025"
              role="Admin Warehouse"
              description="Responsible for managing warehouse administrative data, recording incoming and outgoing goods, and ensuring accurate documentation to support operational efficiency."
            />

            <ExperienceItem
              logo="/image/Logo-HMJTI.png"
              alt="Logo HMJTI"
              title="Himpunan Mahasiswa Jurusan Teknologi Informasi (HMJ TI)"
              date="January – December 2024"
              role="Treasurer"
              description="Managed organizational finances, prepared financial reports, recorded income and expenses, and ensured transparency and accountability of funds."
            />
          </div>
        </section>

        {/* ================= SECTION PROJECT ================= */}
        <section id="project" className="scroll-mt-20 py-10">
          <div className="mb-5 flex items-center gap-2">
            <Code className="text-purple-600" />
            <h2 className="text-3xl font-bold tracking-tight">Project</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
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
                image: "/image/JTICare.jpeg",
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

                  {/* BUTTON*/}
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-700 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION CONTACT ================= */}
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
      </div>
    </main>
  );
}
import Image from "next/image";
import { Code, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="project" className="scroll-mt-20 py-10">
          <div className="mb-5 flex items-center gap-2">
            <Code className="text-purple-600" />
            <h2 className="font-sans text-3xl font-bold tracking-tight">Project</h2>
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
                  <h3 className="font-sans mb-2 text-xl font-bold transition-colors group-hover:text-purple-600">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="font-sans mb-6 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.desc}
                  </p>

                  {/* BUTTON*/}
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-700 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
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
  );
}
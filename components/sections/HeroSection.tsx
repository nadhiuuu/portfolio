import Image from "next/image";
import { FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-20 flex min-h-[90vh] flex-col justify-center pt-20"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
        <div className="flex flex-col text-center md:text-left">
          <h1 className="font-sans opacity-0 text-4xl font-bold tracking-tight sm:text-5xl animate-[fadeUp_0.8s_ease-out_0.1s_forwards]">
            Hi, I’m{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Nadhifatus Aulia Enggarsya
            </span> 👋
          </h1>

          <h2 className="font-sans opacity-0 mt-3 text-xl font-bold text-zinc-600 dark:text-zinc-400 animate-[fadeUp_0.8s_ease-out_0.25s_forwards]">
            Informatics Engineering Student, Frontend & Administration Enthusiast
          </h2>

          <p className="font-sans opacity-0 mt-2 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 text-justify md:text-left animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
            An Informatics Engineering student with a strong interest in frontend development and administrative work. Experienced in
            managing data, documentation, and financial records, while actively learning to build organized, simple, and user-friendly
            digital solutions.
          </p>

          <div className="opacity-0 mt-5 flex justify-center md:justify-start gap-4 animate-[fadeUp_0.8s_ease-out_0.55s_forwards]">
            <a
              href="https://drive.google.com/file/d/1daDfjRCCrGI7AzZX3VBBxa10uFhTph_l/view"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-purple-600 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-purple-400"
            >
              <FileText className="h-4 w-4" />
              Curriculum Vitae
            </a>
          </div>
        </div>

        <div className="relative opacity-0 translate-x animate-[fadeSide_1s_ease-out_0.3s_forwards]">
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border rotate-2 transition-transform hover:rotate-0 sm:h-72 sm:w-72 shadow-2xl">
            <Image
              src="/image/Foto.jpeg"
              alt="Nadhifatus Aulia Enggarsya"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

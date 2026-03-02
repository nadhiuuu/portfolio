import { Layers } from "lucide-react";
import ExperienceItem from "@/components/ui/experience-item";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-12">
      <div className="mb-7 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-200/60 bg-emerald-50/70 text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
          <Layers className="h-6 w-6" />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Experience
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Roles, responsibilities, and organizational experience.
          </p>
        </div>
      </div>
      <div className="relative pl-6 sm:pl-7">
        <div aria-hidden className="absolute left-2 top-1 bottom-1 w-px bg-gradient-to-b from-emerald-300/60 via-emerald-200/30 to-transparent dark:from-emerald-700/40 dark:via-emerald-800/20"/>
        <div className="grid gap-6">
          <div className="relative">
            <div aria-hidden className="absolute -left-[20px] top-7 h-3.5 w-3.5 rounded-full border border-emerald-200 bg-emerald-100 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950 sm:-left-[22px]"/>
            <ExperienceItem
              logo="/image/Logo-TSI.png"
              alt="Logo TSI"
              title="PT. Truspices Indonesia — Sidoarjo"
              date="June – August 2025"
              role="Admin Warehouse"
              description="Responsible for managing warehouse administrative data, recording incoming and outgoing goods, and ensuring accurate documentation to support operational efficiency."
            />
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -left-[20px] top-7 h-3.5 w-3.5 rounded-full border border-emerald-200 bg-emerald-100 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950 sm:-left-[22px]"/>
            <ExperienceItem
              logo="/image/Logo-HMJTI.png"
              alt="Logo HMJTI"
              title="Himpunan Mahasiswa Jurusan Teknologi Informasi (HMJ TI)"
              date="January – December 2024"
              role="Treasurer"
              description="Managed organizational finances, prepared financial reports, recorded income and expenses, and ensured transparency and accountability of funds."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
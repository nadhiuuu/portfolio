import { Layers } from "lucide-react";
import ExperienceItem from "@/components/ui/experience-item";

export default function HeroSection() {
  return (
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
  );
}
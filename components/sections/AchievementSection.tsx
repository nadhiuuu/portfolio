import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

type Certificate = {
  date: string;
  course: string;
  issuer: string;
  image: string;
};

const DRIVE_FOLDER_ALL =
  "https://drive.google.com/drive/folders/11OVTd0Dz3PRXsUyTdbVTxixCvsdmBfzU?usp=sharing";

const certificates: Certificate[] = [
  {
    date: "01/03/2026",
    course: "Menggunakan Bootstrap Framework",
    issuer: "Codepolitan",
    image: "/image/Sertifikat 1.jpg",
  },
  {
    date: "19/07/2025",
    course: "4th Winner of TIF Exhibition 2025",
    issuer: "Politeknik Negeri Jember",
    image: "/image/Sertifikat 2.png",
  },
  {
    date: "17/02/2025",
    course: "Belajar Data Science",
    issuer: "Dicoding Indonesia",
    image: "/image/Sertifikat 3.jpg",
  },
];

export default function CertificationsSection() {
  return (
    <section id="achievement" className="scroll-mt-20 py-12">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-200/60 bg-emerald-50/70 text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
            <Award className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Certificate of Completion
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Selected certificates & achievements.
            </p>
          </div>
        </div>

        {/* View All Button */}
        <a
          href={DRIVE_FOLDER_ALL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200/50 bg-white/60 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-emerald-300/60 hover:shadow-md active:translate-y-0 active:scale-[0.99] dark:border-emerald-900/30 dark:bg-zinc-950/30 dark:text-emerald-300"
        >
          <span>View All Certificates</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <div
            key={`${c.course}-${c.date}`}
            className="group overflow-hidden rounded-2xl border border-emerald-200/40 bg-white/60 shadow-sm backdrop-blur transition-all duration-200 ease-out hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-lg hover:shadow-emerald-500/10 active:translate-y-0 active:scale-[0.99] dark:border-emerald-900/30 dark:bg-zinc-950/30 dark:hover:border-emerald-800/40"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={c.image}
                alt={c.course}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/25" />
            </div>

            {/* Text */}
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {c.issuer}
                </p>
                <p className="shrink-0 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {c.date}
                </p>
              </div>

              <h3 className="mt-2 line-clamp-2 text-base font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-50 dark:group-hover:text-emerald-300">
                {c.course}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
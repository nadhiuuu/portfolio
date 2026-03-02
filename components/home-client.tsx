"use client";
import HeroSection from "@/components/sections/HeroSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ConnectSection from "@/components/sections/ConnectSection";
import dynamic from "next/dynamic";

const BgSparkles = dynamic(
  () => import("@/components/ui/bg-sparkles"),
  { ssr: false }
);

export default function HomeClient() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BgSparkles />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectSection />
        <ConnectSection />
      </div>
    </main>
  );
}

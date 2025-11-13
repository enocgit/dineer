import Features from "@/components/sections/home/features";
import HeroSection from "@/components/sections/home/hero-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Homepage });

function Homepage() {
  return (
    <>
      <HeroSection />
      <Features />
    </>
  );
}

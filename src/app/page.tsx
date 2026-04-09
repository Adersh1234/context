import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { VeAttention } from "@/components/sections/VeAttention";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Privacy } from "@/components/sections/Privacy";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-dark focus:text-chartreuse focus:px-4 focus:py-2 focus:rounded">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <VeAttention />
        <HowItWorks />
        <Privacy />
        <FinalCTA />
      </main>
      <div className="bg-chartreuse">
        <Footer />
      </div>
    </>
  );
}

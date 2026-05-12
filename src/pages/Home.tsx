import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}

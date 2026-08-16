import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import FeaturedNewsSection from "@/components/FeaturedNewsSection";
import FeaturedShopSection from "@/components/FeaturedShopSection";
import PillarsSection from "@/components/PillarsSection";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
        <Hero />
        <PillarsSection />
        <AboutSection />
        <FeaturedNewsSection />
        <FeaturedShopSection />
        <TestimonialsSection />
        <CtaSection />
    </SiteShell>
  );
}

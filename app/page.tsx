import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { BlogListSection } from "@/components/blog-list-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BlogListSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

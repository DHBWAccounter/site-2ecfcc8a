import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutIntroSection } from "@/components/about-intro-section";
import { CatTeamSection } from "@/components/cat-team-section";
import { BlogStorySection } from "@/components/blog-story-section";
import { FunFactsSection } from "@/components/fun-facts-section";
import { AboutContactSection } from "@/components/about-contact-section";

export const metadata: Metadata = {
  title: "About Lena | Lena's Cat Blog",
  description:
    "Get to know Lena and her three rescue cats. Learn about the story behind the blog and why she started sharing her cat adventures.",
  keywords: ["about Lena", "cat blog", "rescue cats", "cat lovers", "Portland"],
  openGraph: {
    title: "About Lena | Lena's Cat Blog",
    description:
      "Get to know Lena and her three rescue cats. Learn about the story behind the blog and why she started sharing her cat adventures.",
    type: "website",
    locale: "en_US",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="py-8 md:py-12">
        <AboutIntroSection />
        <CatTeamSection />
        <BlogStorySection />
        <FunFactsSection />
        <AboutContactSection />
      </main>
      <Footer />
    </>
  );
}

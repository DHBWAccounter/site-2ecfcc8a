"use client";

import { useEffect, useRef } from "react";
import { Heart, Sparkles } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="animate-on-scroll opacity-0">
            <div className="inline-flex items-center gap-2 bg-secondary/80 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to my cozy corner</span>
            </div>
          </div>

          <h1 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Welcome to My Little Corner of the Internet!
          </h1>

          <div className="animate-on-scroll opacity-0 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi there! I'm so glad you found your way here. This blog is my happy place where I share everything about life with my three rescue cats:{" "}
              <span className="font-semibold text-primary">Mochi</span>,{" "}
              <span className="font-semibold text-primary">Biscuit</span>, and{" "}
              <span className="font-semibold text-primary">Nugget</span>. Whether you're a seasoned cat parent or just someone who appreciates a good cat photo (and really, who doesn't?), I hope you'll feel right at home.
            </p>

            <p>
              Cats have a way of teaching us about patience, love, and the importance of a good nap in a sunbeam. Through this blog, I've connected with so many wonderful people who share the same passion for our feline friends. It's become so much more than just a blog—it's a community.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 flex items-center gap-3 text-sm text-muted-foreground pt-2">
            <Heart className="w-5 h-5 text-primary animate-paw" />
            <span>Featuring Mochi, Biscuit & Nugget</span>
          </div>
        </div>

        {/* Decorative Cat Illustration */}
        <div className="animate-on-scroll opacity-0 relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Main circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-primary/10 rounded-full animate-float" />
            
            {/* Cat silhouette decoration */}
            <div className="absolute inset-8 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full flex items-center justify-center">
              <div className="text-6xl md:text-8xl">🐱</div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-8 text-2xl animate-float delay-200">
              😸
            </div>
            <div className="absolute bottom-8 left-4 text-2xl animate-float delay-400">
              😻
            </div>
            <div className="absolute top-1/2 right-0 text-xl animate-float delay-300">
              💕
            </div>

            {/* Paw prints */}
            <div className="absolute -bottom-4 left-1/4 text-3xl opacity-30 animate-paw">
              🐾
            </div>
            <div className="absolute -top-2 right-1/4 text-2xl opacity-20 animate-paw delay-500">
              🐾
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

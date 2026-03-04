"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Heart } from "lucide-react";

export function CTASection() {
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
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 right-8 text-4xl opacity-20 animate-float">
          🐱
        </div>
        <div className="absolute bottom-4 left-8 text-3xl opacity-20 animate-float delay-300">
          😺
        </div>
        <div className="absolute top-1/2 right-1/4 text-2xl opacity-10 animate-paw">
          🐾
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let's Be Friends!
          </h2>

          <div className="animate-on-scroll opacity-0 space-y-4 text-primary-foreground/90 text-lg leading-relaxed mb-8">
            <p>
              I'd love to get to know you and your cats! This blog is all about building connections with fellow cat enthusiasts. Got a story to share? A question about cat care? Or just want to say hi and tell me about your furry friend?
            </p>

            <p>
              Drop me a message through my contact page, or connect with me on social media. I try to respond to every message because every cat parent has a story worth hearing.
            </p>

            <p className="font-medium text-primary-foreground">
              After all, the internet is better when we're all friends. 🐱
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="/about">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </Button>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Pinterest"
              >
                <Heart className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

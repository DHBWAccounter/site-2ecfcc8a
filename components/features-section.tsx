"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lightbulb, Users, Camera } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Heartwarming Stories",
    description:
      "From the day I adopted my first cat to the countless adventures (and misadventures) since, I share it all. The funny moments, the touching ones, and everything in between.",
    emoji: "💕",
  },
  {
    icon: Lightbulb,
    title: "Practical Tips",
    description:
      "Over the years, I've learned a thing or two about cat care. I share honest reviews of products, tips for new cat owners, and advice on everything from nutrition to behavior.",
    emoji: "💡",
  },
  {
    icon: Users,
    title: "Community Spotlights",
    description:
      "I love featuring stories from other cat parents! Every month, I highlight a fellow cat lover and their furry companions.",
    emoji: "🌟",
  },
  {
    icon: Camera,
    title: "Plenty of Photos",
    description:
      "Because what's a cat blog without an abundance of adorable cat pictures? My camera roll is 90% cats, and I'm not even a little sorry about it.",
    emoji: "📸",
  },
];

export function FeaturesSection() {
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
    <section ref={sectionRef} className="py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-foreground mb-4">
          What You'll Find Here
        </h2>
        <p className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-2xl mx-auto">
          A little bit of everything for cat lovers
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className={`animate-on-scroll opacity-0 delay-${(index + 1) * 100} group hover:-translate-y-1 hover:border-primary/30`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

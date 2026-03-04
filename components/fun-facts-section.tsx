"use client";

import { Coffee, Heart, Home, Camera, Cat, Globe, Sparkles } from "lucide-react";

const funFacts = [
  {
    icon: Globe,
    text: "I've visited 12 cat cafés around the world (and counting!)",
  },
  {
    icon: Heart,
    text: "My favorite cat breed is the Ragdoll, but mixed breeds have my heart",
  },
  {
    icon: Cat,
    text: "I can identify most cats by their meow alone",
  },
  {
    icon: Home,
    text: "I've fostered 8 kittens and found them all forever homes",
  },
  {
    icon: Camera,
    text: "My phone has over 10,000 photos—approximately 95% are of my cats",
  },
  {
    icon: Coffee,
    text: "I believe every cat deserves a chance, regardless of age or background",
  },
];

export function FunFactsSection() {
  return (
    <section className="mb-16 md:mb-24">
      {/* Section header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Get to Know Me</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Fun Facts About Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A few things that make me, well, me!
        </p>
      </div>

      {/* Fun facts grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {funFacts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <div
              key={index}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {fact.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

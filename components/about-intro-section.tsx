"use client";

import { Heart, Sparkles } from "lucide-react";

export function AboutIntroSection() {
  return (
    <section className="mb-16 md:mb-24">
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/50 rounded-full blur-3xl" />
        
        {/* Main content card */}
        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 soft-shadow border border-border/30">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Lena (and the Cats!)
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              Hello again! If we haven't met yet, I'm Lena—a 30-something cat enthusiast living in Portland, Oregon with my three rescue cats and an embarrassing number of cat-themed mugs. By day, I work in marketing, but my true passion has always been animals, particularly the feline variety.
            </p>

            <p>
              Growing up, we always had pets, but it wasn't until I adopted Mochi on a whim from a local shelter that I truly understood the bond between human and cat. That little orange tabby changed everything for me. Now, I can't imagine life without the sound of purring in my home.
            </p>
          </div>

          {/* Decorative heart */}
          <div className="mt-8 flex items-center gap-2 text-primary/60">
            <Heart className="w-5 h-5 fill-primary/20 animate-paw" />
            <span className="text-sm font-medium">Portland, Oregon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Crown, Heart, Sparkles, Star } from "lucide-react";

const cats = [
  {
    name: "Mochi",
    description: "My first rescue and the reason this blog exists. She's a 7-year-old orange tabby with the loudest purr you've ever heard. Mochi is the queen of the household, and she knows it. She loves chin scratches, sleeping in cardboard boxes, and judging me from across the room.",
    age: "7 years old",
    breed: "Orange Tabby",
    personality: "Queen of the household",
    icon: Crown,
    color: "bg-orange-100 border-orange-200",
    accentColor: "text-orange-600",
  },
  {
    name: "Biscuit",
    description: "A 5-year-old tuxedo cat who showed up on my porch as a stray three years ago. He's the friendliest cat you'll ever meet—everyone who visits falls in love with him. His hobbies include following me from room to room and making biscuits on every soft surface.",
    age: "5 years old",
    breed: "Tuxedo",
    personality: "Everyone's best friend",
    icon: Heart,
    color: "bg-slate-100 border-slate-200",
    accentColor: "text-slate-700",
  },
  {
    name: "Nugget",
    description: "The baby of the family at 2 years old. She's a tiny calico with a big personality. Nugget was found abandoned in a parking lot as a kitten, and she's been living her best spoiled life ever since. She's playful, mischievous, and absolutely fearless.",
    age: "2 years old",
    breed: "Calico",
    personality: "Tiny but mighty",
    icon: Sparkles,
    color: "bg-amber-50 border-amber-200",
    accentColor: "text-amber-700",
  },
];

export function CatTeamSection() {
  return (
    <section className="mb-16 md:mb-24">
      {/* Section header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
          <Star className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">The Furry Family</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          The Stars of the Show
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet the three rescue cats who inspire everything I do
        </p>
      </div>

      {/* Cat cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {cats.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.name}
              className={`relative group ${index === 0 ? "md:-mt-4" : ""} ${index === 2 ? "md:-mt-4" : ""}`}
            >
              <div
                className={`h-full ${cat.color} border-2 rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                {/* Cat avatar placeholder */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 mx-auto bg-white/80 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Icon className={`w-10 h-10 ${cat.accentColor}`} />
                  </div>
                  {/* Age badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-full shadow-md border border-border/30">
                    <span className="text-xs font-semibold text-muted-foreground">{cat.age}</span>
                  </div>
                </div>

                {/* Name and breed */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{cat.name}</h3>
                  <p className={`text-sm font-medium ${cat.accentColor}`}>{cat.breed}</p>
                </div>

                {/* Personality tag */}
                <div className="flex justify-center mb-4">
                  <span className={`px-3 py-1 ${cat.color} rounded-full text-xs font-semibold ${cat.accentColor} border`}>
                    {cat.personality}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {cat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

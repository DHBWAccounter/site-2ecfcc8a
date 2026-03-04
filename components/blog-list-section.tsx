"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    title: "How I Turned My Tiny Apartment Into a Cat Paradise",
    description: "Budget-friendly tips for making any space cat-friendly.",
    emoji: "🏠",
    color: "from-orange-100 to-amber-50",
  },
  {
    title: "The Day Mochi Taught Me About Patience",
    description: "A personal story about bonding with a shy rescue.",
    emoji: "🧡",
    color: "from-rose-100 to-pink-50",
  },
  {
    title: "Homemade Cat Treats Your Fur Baby Will Love",
    description: "Three simple recipes even non-bakers can master.",
    emoji: "🍪",
    color: "from-amber-100 to-yellow-50",
  },
];

export function BlogListSection() {
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
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-foreground">
            A Few of My Favorite Posts
          </h2>
        </div>
        <p className="animate-on-scroll opacity-0 text-lg text-muted-foreground">
          Looking for a place to start? Here are some reader favorites:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {posts.map((post, index) => (
          <Card
            key={post.title}
            className={`animate-on-scroll opacity-0 delay-${(index + 1) * 100} group cursor-pointer hover:border-primary/40 overflow-hidden`}
          >
            <div
              className={`h-32 bg-gradient-to-br ${post.color} flex items-center justify-center`}
            >
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {post.emoji}
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                "{post.title}"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {post.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="animate-on-scroll opacity-0 bg-secondary/50 rounded-2xl p-6 text-center">
        <p className="text-muted-foreground">
          I publish new posts every <span className="font-semibold text-primary">Tuesday</span> and{" "}
          <span className="font-semibold text-primary">Friday</span>, so there's always something fresh to read! 🐱
        </p>
      </div>
    </section>
  );
}

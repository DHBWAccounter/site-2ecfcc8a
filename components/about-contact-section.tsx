"use client";

import Link from "next/link";
import { Mail, Instagram, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutContactSection() {
  return (
    <section className="mb-16 md:mb-24">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/30 rounded-3xl p-8 md:p-12 border border-primary/20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full mb-4 border border-primary/20">
              <Heart className="w-4 h-4 text-primary fill-primary/20 animate-paw" />
              <span className="text-sm font-semibold text-primary">Stay Connected</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Let's Connect!
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm always thrilled to meet fellow cat lovers! Whether you want to share a funny cat story, ask for advice, or just chat about how great cats are, I'd love to hear from you.
            </p>
          </div>

          {/* Contact info */}
          <div className="max-w-xl mx-auto">
            {/* Email */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-border/30 soft-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                  <a
                    href="mailto:hello@lenascatblog.com"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    hello@lenascatblog.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30 soft-shadow">
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Follow Along:</strong> Join over 25,000 cat lovers on Instagram and Pinterest for daily cat content, behind-the-scenes moments, and community features.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Sparkles className="w-4 h-4" />
                    Pinterest
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Closing message */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Thanks for stopping by—I hope you'll stick around and become part of our little cat-loving family! 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

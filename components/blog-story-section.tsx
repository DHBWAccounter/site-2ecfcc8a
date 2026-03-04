"use client";

import { BookOpen, Calendar, Heart, Users } from "lucide-react";

export function BlogStorySection() {
  return (
    <section className="mb-16 md:mb-24">
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl" />
        
        <div className="relative bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/30 soft-shadow">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why I Started This Blog
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed mb-8">
            <p>
              In 2019, after one too many friends told me I should "write a book" about my cats, I decided to start a blog instead. What began as a fun side project quickly turned into something I genuinely looked forward to every week. I discovered a whole community of cat lovers online, and I realized how much I enjoyed sharing experiences and learning from others.
            </p>

            <p>
              This blog is my way of celebrating the joy cats bring to our lives. It's not about being an expert—it's about being a fellow cat lover who's learning as I go. Some posts are funny, some are practical, and some are just me gushing about how much I love my cats. That's the beauty of having your own little corner of the internet!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 rounded-2xl p-4 text-center border border-border/20">
              <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">2019</div>
              <div className="text-xs text-muted-foreground">Started</div>
            </div>
            <div className="bg-white/60 rounded-2xl p-4 text-center border border-border/20">
              <Users className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">25K+</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
            <div className="bg-white/60 rounded-2xl p-4 text-center border border-border/20">
              <Heart className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-xs text-muted-foreground">Rescue Cats</div>
            </div>
            <div className="bg-white/60 rounded-2xl p-4 text-center border border-border/20">
              <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">100+</div>
              <div className="text-xs text-muted-foreground">Posts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

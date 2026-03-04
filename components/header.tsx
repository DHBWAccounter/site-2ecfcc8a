"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/30">
      <nav className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Cat className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-paw" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Lena's Cat Blog
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/about">Let's Connect</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-64 pb-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="w-full mt-2">
            <Link href="/about">Let's Connect</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

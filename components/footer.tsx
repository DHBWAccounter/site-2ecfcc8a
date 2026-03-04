import Link from "next/link";
import { Cat, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Cat className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
          <span className="text-lg font-bold text-foreground">
            Lena's Cat Blog
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Pinterest
          </a>
        </nav>

        {/* Copyright */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-primary animate-paw" />
          <span>for cat lovers</span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lena's Cat Blog. All purrs reserved. 🐱
        </p>
      </div>
    </footer>
  );
}

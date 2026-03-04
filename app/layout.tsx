import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lena's Cat Blog - Let's be friends",
  description:
    "Welcome to Lena's Cat Blog! Discover heartwarming cat stories, helpful care tips, and join our growing community of cat lovers.",
  keywords: ["cat blog", "cat stories", "cat care", "pet blog", "cat lovers"],
  authors: [{ name: "Lena" }],
  openGraph: {
    title: "Lena's Cat Blog - Let's be friends",
    description:
      "Discover heartwarming cat stories, helpful care tips, and join our growing community of cat lovers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body
        className={`${nunito.className} antialiased warm-gradient min-h-screen`}
      >
        <div className="paw-pattern min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

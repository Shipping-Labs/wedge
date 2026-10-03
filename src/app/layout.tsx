import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Same Google Fonts as the original page: Fraunces (optical size axis) + Inter 400–700.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Wedge — a weekly brief for indie developers and founders",
  description:
    "One focused email each week: SaaS themes, ideas worth stealing, launches with real traction numbers, and the pain points founders are voicing. Free.",
  openGraph: {
    title: "The Wedge — weekly brief for indie devs & founders",
    description:
      "Themes, ideas, traction and pain points for people building small software that pays.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="bg-cream font-sans leading-[1.6] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

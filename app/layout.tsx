import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numonor - The Ultimate Numbers Logic Puzzle",
  description: "Unwind with Numonor, a calming numbers logic puzzle. Improve your problem-solving skills, enjoy hundreds of puzzles, and take your time thinking through each board. Download now on App Store and Google Play!",
  icons: {
    icon: [{ url: "/appIconsmall.png", type: "image/png" }],
    shortcut: "/appIconsmall.png",
    apple: "/appIconsmall.png",
  },
  other: {
    "google-adsense-account": "ca-pub-8686187463793411",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8686187463793411"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}

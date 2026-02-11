import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numonor - The Ultimate Numbers Logic Puzzle",
  description: "Unwind with Numonor, a calming numbers logic puzzle. Improve your problem-solving skills, enjoy hundreds of puzzles, and take your time thinking through each board. Download now on App Store and Google Play!",
  icons: {
    icon: [{ url: "/appIconsmall.png", type: "image/png" }],
    shortcut: "/appIconsmall.png",
    apple: "/appIconsmall.png",
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
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numonor - The Ultimate Numbers Logic Puzzle",
  description: "Challenge your mind with Numonor - an addictive numbers logic puzzle game. Improve your problem-solving skills, compete on leaderboards, and enjoy hundreds of puzzles. Download now on App Store and Google Play!",
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

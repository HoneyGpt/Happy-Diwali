import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Diwali - Festival of Lights",
  description: "Celebrate Diwali with beautiful interactive fireworks, traditional diya lamps, and stunning visual effects. Experience the Festival of Lights like never before.",
  keywords: ["Diwali", "Festival of Lights", "Fireworks", "Diya", "Indian Festival", "Celebration", "Interactive"],
  authors: [{ name: "Diwali Celebration" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "1024x1024", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Happy Diwali - Festival of Lights",
    description: "Celebrate Diwali with beautiful interactive fireworks and stunning visual effects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Diwali - Festival of Lights",
    description: "Celebrate Diwali with beautiful interactive fireworks and stunning visual effects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

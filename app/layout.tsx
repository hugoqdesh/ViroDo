import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViroDo - Martial arts for everyone",
  description:
    "We offer a new way to practice martial arts with confidence while staying safe and healthy.",
  openGraph: {
    title: "ViroDo - Martial arts for everyone",
    description:
      "We offer a new way to practice martial arts with confidence while staying safe and healthy.",
    type: "website",
    locale: "en-US",
    url: "viroo.vercel.app",
    siteName: "ViroDo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

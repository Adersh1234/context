import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ve Recall — Your work, recalled in seconds",
  description:
    "Ve runs quietly in the background. When you need to find something — anything you've seen, read, or worked on — it's already there.",
  icons: {
    icon: "https://us.images.ve.ai/public/dashboard/image.png",
    apple: "https://us.images.ve.ai/public/dashboard/image.png",
  },
  openGraph: {
    title: "Ve Recall — Your work, recalled in seconds",
    description:
      "Ve runs quietly in the background. When you need to find something — anything you've seen, read, or worked on — it's already there.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}

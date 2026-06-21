import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web3Abdul — AI & Web3 Builder",
  description: "I build AI-powered products, MVPs, and modern websites using Next.js. Based in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
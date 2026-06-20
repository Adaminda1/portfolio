import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web3Abdul — Digital Builder",
  description: "Digital builder shipping real, working products — onchain tools, AI-powered features, and clean web products. Based in Nigeria.",
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

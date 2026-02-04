import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Brooks | Product Designer",
  description: "Modern portfolio showcasing product design, strategy, and experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

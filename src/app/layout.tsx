import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/effects/CustomCursor";

export const metadata: Metadata = {
  title: "Najib Alfarizi — Software Engineer & Fullstack Systems Builder",
  description:
    "Portfolio profesional Najib Alfarizi — Software Engineer spesialis dalam membangun sistem POS 3-in-1, multi-tenant SaaS, arsitektur backend Next.js & Express, dan integrasi hardware printer kasir ESC/POS.",
  keywords: [
    "Najib Alfarizi",
    "Software Engineer",
    "Fullstack Developer",
    "IbiiOS",
    "Konter System",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "POS",
    "Indonesia",
  ],
  authors: [{ name: "Najib Alfarizi" }],
  openGraph: {
    title: "Najib Alfarizi — Software Engineer Portfolio",
    description: "Membangun sistem digital tangguh: IbiiOS (3-in-1 POS) & Konter System (Multi-tenant Store OS).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

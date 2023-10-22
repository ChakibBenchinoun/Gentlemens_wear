import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moulay Menswear",
  description: "Company Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={cn(inter.className, "flex flex-col h-full")}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

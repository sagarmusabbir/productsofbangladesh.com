import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderNavigation } from "@/components/ui/header";
import { FooterMain } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Best Platform for sourcing Made in Bangladesh Products | Products of Bangladesh",
  description:
    "Products of Bangladesh connects global sellers and brands with top manufacturers and suppliers from bangladesh, specializing in sourcing high-quality products made in Bangladesh for seamless sourcing experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNavigation />
        {children}
        <FooterMain />
      </body>
    </html>
  );
}

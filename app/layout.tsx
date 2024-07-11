import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderNavigation } from "@/components/ui/header";
import { FooterMain } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | Products of Bangladesh",
    default:
      "Best Platform for sourcing Made in Bangladesh Products | Products of Bangladesh",
  },
  alternates: {
    canonical: "/",
  },

  description:
    "Products of Bangladesh connects global sellers and brands with top manufacturers and suppliers from bangladesh, specializing in sourcing high-quality products made in Bangladesh for seamless sourcing experience.",
  // canonical: "https://productsofbangladesh.com/",
  openGraph: {
    url: "https://productsofbangladesh.com/",
    title:
      "Best Platform for sourcing Made in Bangladesh Products | Products of Bangladesh",
    description:
      "Products of Bangladesh connects global sellers and brands with top manufacturers and suppliers from bangladesh, specializing in sourcing high-quality products made in Bangladesh for seamless sourcing experience.",
    siteName: "Products of Bangladesh",
    type: "website",
    images: [
      {
        // url: "https://og.tailgraph.com/og?fontFamily=Roboto&title=Best%20Platform%20for%20sourcing%20Made%20in%20Bangladesh%20Products&titleTailwind=font-extrabold%20text-white%20text-5xl%20text-center%20px-4&titleFontFamily=Inter&text=ProductsofBangladesh.com&textTailwind=text-2xl%20mt-4%20text-center%20text-white&textFontFamily=Inter&logoUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Ftb%2Fmain%2Fpublic%2Foldlogo.svg&logoTailwind=text-center%20mx-auto%20w-20%20h-20%20p-4&bgUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Ftb%2Fmain%2Fpublic%2Fcover-mint.svg&bgTailwind=bg-white%20bg-opacity-50&footer=ProductsofBangladesh.com&footerTailwind=text-white&containerTailwind=p-4&t=1720553933274&refresh=1",
        url: "https://og.tailgraph.com/og?fontFamily=Roboto&title=Products%20of%20Bangladesh&titleTailwind=text-white%20text-left%20font-extrabold%20text-7xl&titleFontFamily=Inter&text=Best%20Platform%20for%20sourcing%20Made%20in%20Bangladesh%20Products&textTailwind=mt-4%20text-white%20text-left%20font-normal%20text-3xl&textFontFamily=Inter&logoUrl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F12784%2F12784808.png&logoTailwind=bg-blueGray-200%20border%20w-16%20h-16%20rounded-md&bgUrl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff9%2FFlag_of_Bangladesh.svg&bgTailwind=bg-white%20bg-no-repeat%20bg-center%20bg-cover&footer=PRODUCTSOFBANGLADESH.COM&footerTailwind=bg-transparent%20text-white&t=1720656543845&refresh=1",
        alt: "productsofbangladesh.com og-image",
        width: 800,
        height: 600,
      },
    ],
  },
  // twitter: {
  //   handle: "@handle",
  //   site: "@site",
  //   cardType: "summary_large_image",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <HeaderNavigation />
        {children}
        <FooterMain />
      </body>
    </html>
  );
}

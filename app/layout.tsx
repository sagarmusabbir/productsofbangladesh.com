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
        url: "https://og.tailgraph.com/og?fontFamily=Roboto&title=Hub%20for%20Made%20in%20Bangladesh%20Products&titleTailwind=text-white%20font-bold%20text-center%20text-5xl%20antialiased%20text-wrap&titleFontFamily=Inter&text=Connecting%20global%20sellers%20and%20brands%20with%20top%20manufacturers%20and%20suppliers%20from%20bangladesh&textTailwind=text-white%20antialiased%20text-xl%20text-center&textFontFamily=Inter&logoUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Fproductsofbangladesh.com%2Fmain%2Fpublic%2Foglogo.svg&logoTailwind=opacity-100%20border%20mx-auto%20rounded-lg%20pl-2%20pt-2%20pb-2%20border-gray-200%20bg-transparent&bgUrl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff9%2FFlag_of_Bangladesh.svg%2F510px-Flag_of_Bangladesh.svg.png&bgTailwind=bg-white%20bg-no-repeat%20bg-cover%20bg-center%20bg-opacity-70&overlay=1&overlayTailwind=bg-blueGray-400%20bg-gray-500%20bg-gray-700%20opacity-50&footer=productsofbangladesh.com&footerTailwind=text-teal-600%20text-xl&containerTailwind=p-4%20overflow-hidden&t=1720668348785&refresh=1",
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

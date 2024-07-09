/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nomad-flowbiteReact-next-starter",
  titleTemplate: "%s | nomad-flowbiteReact-next-starter",
  defaultTitle: "nomad-flowbiteReact-next-starter",
  description: "Nomad Next.js + FlowbiteReact + TypeScript starter template",
  canonical: "https://nomad-flowbite-react-next-starter.vercel.app/",
  openGraph: {
    url: "https://nomad-flowbite-react-next-starter.vercel.app/",
    title: "nomad-flowbiteReact-next-starter",
    description: "Next.js + FlowbiteReact + TypeScript starter template",
    type: "website",
    images: [
      {
        url: "https://yehez-og-image.yehezgun.com/**Nomad**%20nextjs%2BflowbiteReact%2BTypescript%20Starter.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fnextjs-icon-512x512-y563b8iq.png&images=https%3A%2F%2Fflowbite.com%2Fimages%2Flogo.svg&images=https%3A%2F%2Fwww.svgrepo.com%2Fshow%2F374146%2Ftypescript-official.svg&widths=50&widths=100&widths=100&widths=100&heights=50&heights=100&heights=100&heights=100",
        alt: "https://nomad-flowbitenext-starter.vercel.app og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "nomad-flowbiteReact-next-starter",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://raw.githubusercontent.com/sagarmusabbir/tb/main/public/logo.svg",
    },
  ],
};

export default defaultSEOConfig;

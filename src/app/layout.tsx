"use server";
import "./globals.css";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Link from "next/link";
import { Metadata } from "next";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
const banner = (
  <Banner storageKey="AGAZATI_BANNER_DISMISSED">
    Frissített felület ✨ Hozzáférés mindenkinek{" "}
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <AuroraText colors={["#22c55e", "#6d28d9", "#059669", "#9333ea"]}>
        Khrone Ágazati
      </AuroraText>
    }
    // ... Your additional navbar options
  />
);
const metadata: Metadata = {
  title: {
    default: "Ágazati",
    template: "%s | Khrone",
  },
};
export async function generateMetadata(): Promise<Metadata> {
  return metadata;
}
const footer = (
  <Footer className="flex flex-row gap-2 items-center justify-center">
    Copyright {new Date().getFullYear()} ©{" "}
    <Link
      href={"https://khrone.tech"}
      className="font-semibold text-lg mx-2 text-green-500 tracking-wide font-mono"
    >
      Khrone
    </Link>
  </Footer>
);
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="hu"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        color={{
          hue: 278,
        }}
        // ... Your additional head options
      >
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Khrone Ágazati" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>"
        />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <div
          className="fixed top-0 left-0 w-full h-full -z-10 md:bg-[url('../../public/background-light.svg')] opacity-50 bg-[url(../../public/background-light.svg)] dark:bg-[url(../../public/background.svg)] bg-cover bg-no-repeat bg-bottom-left md:dark:bg-left;
"
        ></div>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-D3XNH4Q8XG" />
        <Layout
          banner={banner}
          navbar={navbar}
          themeSwitch={{
            light: "Világos mód",
            dark: "Sötét mód",
            system: "Rendszer",
          }}
          editLink={false}
          toc={{
            backToTop: false,
            float: true,
          }}
          feedback={{
            content: "",
          }}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Benceszalaiii/agazati"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

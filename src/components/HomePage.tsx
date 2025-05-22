"use client";
import { useTheme } from "next-themes";
import { AuroraText } from "./magicui/aurora-text";
import localFont from "next/font/local";
import Link from "next/link";
import { IconAppWindow, IconSitemap, IconWorld } from "@tabler/icons-react";
export const caveat = localFont({
  src: "../CaveatBrush-Regular.ttf",
  variable: "--font-caveat",
  display: "swap",
});
export function HomePage() {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <main
        suppressHydrationWarning
        className="flex z-10 flex-col items-center justify-between min-h-[80vh]"
      >
        <header
          suppressHydrationWarning
          className="pt-24 flex flex-col items-center justify-center w-full gap-4"
        >
          <h1
            suppressHydrationWarning
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-widest ${caveat.className}`}
          >
            <AuroraText
              colors={
                resolvedTheme === "dark"
                  ? ["#22c55e", "#6d28d9", "#059669", "#9333ea"]
                  : undefined
              }
            >
              Ágazati
            </AuroraText>
          </h1>
        </header>
        <section className="flex flex-col md:flex-row min-h-48 p-4 md:px-8 rounded-xl items-center justify-evenly w-full gap-6 border border-gray-200/15 backdrop-blur group">
  <Link
    href="/halozat"
    className="group/card size-24 w-full py-2 gap-2 rounded-xl transition-all flex-col duration-500 border flex items-center justify-center backdrop-blur bg-white/5
    hover:scale-110 hover:-translate-y-6 hover:border-border border-transparent
    group-has-[.group\/card:hover]:opacity-40 hover:!opacity-100"
  >
    <IconSitemap className="size-8" />
    <h2 className="font-semibold text-sm">Hálózat</h2>
  </Link>

  <Link
    href="/py"
    className="group/card size-24 w-full gap-2 rounded-xl transition-all flex-col duration-500 border flex items-center justify-center backdrop-blur bg-white/5
    hover:scale-110 hover:-translate-y-6 hover:border-border border-transparent
    group-has-[.group\/card:hover]:opacity-40 hover:!opacity-100"
  >
    <IconAppWindow className="size-8" />
    <h2 className="font-semibold text-sm">Python</h2>
  </Link>

  <Link
    href="/web"
    className="group/card size-24 w-full gap-2 rounded-xl transition-all flex-col duration-500 border flex items-center justify-center backdrop-blur bg-white/5
    hover:scale-110 hover:-translate-y-6 hover:border-border border-transparent
    group-has-[.group\/card:hover]:opacity-40 hover:!opacity-100"
  >
    <IconWorld className="size-8" />
    <h2 className="font-semibold text-sm">Web</h2>
  </Link>
</section>
      </main>
    </>
  );
}

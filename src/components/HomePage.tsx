"use client";
import { useTheme } from "next-themes";
import { AuroraText } from "./magicui/aurora-text";
import localFont from "next/font/local";
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
        className="flex z-10 flex-col items-center justify-start min-h-[50vh]"
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
      </main>
    </>
  );
}

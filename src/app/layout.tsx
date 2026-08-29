import type { Metadata } from "next";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/public-sans/wght-italic.css";
import "./globals.css";
import InteractiveSplatter from "@/components/InteractiveSplatter";

export const metadata: Metadata = {
  title: "LocalAI Away Day — Punk AI Risk Exploration",
  description:
    "Join LocalAI and Softwire for a day of insight, collaboration and practical AI risk scenarios. Featuring an abstract punk aesthetic with vibrant pink and yellow paint splatters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-punk-pink selection:text-black">
        <InteractiveSplatter />
        {children}
      </body>
    </html>
  );
}


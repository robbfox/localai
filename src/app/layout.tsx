import type { Metadata } from "next";
import { Permanent_Marker, Sedgwick_Ave_Display } from "next/font/google";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/public-sans/wght-italic.css";
import "./globals.css";
import InteractiveSplatter from "@/components/InteractiveSplatter";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-graffiti",
  display: "swap",
});

const sedgwickAve = Sedgwick_Ave_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-street",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LocalAI Away Day",
  description:
    "Join LocalAI and Softwire for a day of insight, collaboration and practical AI risk scenarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${permanentMarker.variable} ${sedgwickAve.variable}`}>
      <body className="font-sans antialiased selection:bg-punk-pink selection:text-black">
        <InteractiveSplatter />
        {children}
      </body>
    </html>
  );
}


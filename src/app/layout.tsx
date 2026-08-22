import type { Metadata } from "next";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/public-sans/wght-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Building AI solutions for better lives — LocalAI & Softwire",
  description:
    "Join LocalAI, a department in MHCLG, and Softwire for a day of insight, collaboration and practical AI solutions for housing and local government. Wednesday 18 June 2025, Softwire Office, London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}

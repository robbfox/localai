import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import WhyAttend from "@/components/WhyAttend";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-bg-dark-1"
      >
        Skip to main content
      </a>

      <TopBar />

      <main id="main">
        <Hero />
        <About />
        <WhyAttend />
      </main>

      <Footer />
    </>
  );
}

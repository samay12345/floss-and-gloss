import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Cause from "@/components/Cause";
import HowToOrder from "@/components/HowToOrder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <About />
        <Cause />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

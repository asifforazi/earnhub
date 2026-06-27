import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <FAQ />
      <Footer />
    </main>
  );
}
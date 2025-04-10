"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Consult from "./components/Consult";
import Digital from "./components/Digital";
import Training from "./components/Training";
import Casestudy from "./components/Casestudy";
import Blogs from "./components/Blogs";
import Twoinone from "./components/Twoinone";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Hero section with sticky positioning */}
      <section className="sticky top-0 left-0 w-full h-screen bg-black z-0" id="hero">
       
        <Hero />
      </section>

      {/* Content section with proper spacing and reveal effect */}
      <section className="relative bg-black z-10">
        <div className="relative z-20">
          <About />
          <Consult />
          <Digital />
          <Training />
          <Casestudy />
          <Blogs />
          <Twoinone />
          <Footer />
        </div>
      </section>
    </main>
  );
}

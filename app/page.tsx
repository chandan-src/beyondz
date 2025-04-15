"use client"

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
    <div>

      {/* Wrapper for all sections */}
      <div className="relative h-[300vh] w-screen overflow-hidden">
        {/* Black Section (scrolls initially) */}
        <div className="relative  w-full bg-black z-10 flex items-center justify-center">
          <Hero />
        </div>


        <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-y-auto">
          <About />
          <Consult />
          <div className="relative">
            <Digital />
          </div>
          <Training />
          <Casestudy />
          <Blogs />
          <Twoinone />
          <Footer />
        </div>
      </div>
    </div>
  );
}

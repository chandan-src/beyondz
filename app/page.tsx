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
import { useEffect, useRef } from "react";
import LocomotiveScroll from "@/components/L";
import { useScroll, useTransform } from "framer-motion";
import { motion } from 'framer-motion';

export default function Home() {
  const contentRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (contentRef.current) {
        if (scrollPosition >= heroHeight) {
          contentRef.current.style.overflowY = "auto";
        }
        else {
          contentRef.current.style.overflowY = "hidden";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* Wrapper for all sections */}
      <div className="relative h-[300vh] w-screen overflow-hidden">
        {/* Black Section (scrolls initially) */}
        <div className="relative w-full bg-black z-10 flex items-center justify-center">
          <Hero />
        </div>

        <motion.div

          ref={contentRef} className="fixed top-0 left-0 w-full h-screen z-0">

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
        </motion.div>
      </div>
    </div>
  );
}

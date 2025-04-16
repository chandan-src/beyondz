"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heebo } from 'next/font/google'
import { motion } from "framer-motion";
import Image from "next/image"
import "../globals.css";
import { useRef } from "react";
import { IBM_Plex_Mono } from 'next/font/google'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
})

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const Consult = () => {
  const containerRef = useRef(null);

  const lines = [
    "We have consulting packages for companies at all stages in their AI adoption journey.",
    "This includes companies who are merely trying to understand AI and their options through our ReadinessReview.",
    "AI service, as well as companies who would like guidance on how to transform themselves and be AI first."
  ];

  return (
    <div ref={containerRef} id="consult" className={`relative text-[#808285] text-[40px] ${heebo.className} min-h-screen`}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/consult.png"
            alt="Business professionals looking at data"
            fill
            className="object-cover brightness-75 contrast-110"
            priority
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
        {/* Centered header section with improved animations */}
        <motion.div
          className="flex items-center mt-20 md:justify-center justify-end pr-8 md:pr-0 mb-16 text-4xl w-full md:text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.h1
            className="text-heading font-bold text-transparent mr-10 md:mr-0 bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text min-h-[60px] flex items-center"
            initial={{ letterSpacing: "0px" }}
            whileInView={{ letterSpacing: "2px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            / Consulting
          </motion.h1>
        </motion.div>

        {/* Center content */}
        <div className="px-10">
          {/* Right section */}
          <div className="flex flex-col md:items-end items-center mb-0 mt-auto pt-[40vh] ">
            {/* Description text */}
            <motion.div


              className={`text-para flex  flex-wrap gap-y-2 relative z-0 text-3xl font-bold lg: ml-20 ${heebo.className} `}
            >
              {[
                "We", "have", "consulting", "packages", "for", "companies", "at", "all", "stages", "in", "their", "AI", "adoption", "journey.",
                "This", "includes", "companies", "who", "are", "merely", "trying", "to", "understand", "AI", "and", "their", "options", "through", "our", "ReadinessReview.",
                "AI", "service,", "as", "well", "as", "companies", "who", "would", "like", "guidance", "on", "how", "to", "transform", "themselves", "and", "be", "AI", "first."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  className="mr-1 text-md "
                  initial={{ opacity: 0.4 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Explore button with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.3
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(8, 255, 255, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/consult"
                  className="uppercase mt-8 border-2 mb-20 text-[#08FFFF] px-10 py-6 w-[380px] md:w-[392px] h-[52px] flex items-center gap-2 text-sm bg-[#1A1F25] rounded-xl border-transparent [border-image:linear-gradient(to_right,#193CC4,#08FFFF)_1]"
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-2"
                  >
                    EXPLORE our consulting services
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-1"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consult;















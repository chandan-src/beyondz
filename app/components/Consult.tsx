"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heebo } from 'next/font/google'
import Image from "next/image"
const heebo = Heebo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
const Consult = () => {
  return (
    <div className={`relative  text-[#808285] text-[40px] ${heebo.className} min-h-screen`}>
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

        {/* Centered header section */}
        <motion.div
          className="flex items-center mt-20 justify-center mb-16 text-4xl w-full text-center  0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-[48px] font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text min-h-[60px] flex items-center justify-center">/ Consulting</h1>
        </motion.div>

        {/* Center content */}
        <div className=" px-10">
          {/* Left section with small text */}


          {/* Right section */}
          <div className="flex flex-col items-end mb-0 mt-auto pt-[40vh]">
            {/* Logo */}


            {/* Heading with gradient */}


            {/* Description text */}
            <p className="text-[32px] w-[80%] bg-clip-text text-transparent bg-gradient-to-r from-[#808285] to-[#F5F5F5] font-bold mb-20">
              We have consulting packages for companies at all stages in their AI adoption journey.
              This includes companies who are merely trying to understand AI and their options through our ReadinessReview.AI service, as well as companies who would like guidance on how to transform themselves and be AI first.
            </p>


            {/* Explore button */}
            <Link href="/consult"

              className=" uppercase mt-8 border-2 mb-20 text-[#08FFFF] px-10 py-6 w-[392px] h-[52px] flex items-center gap-2 text-sm bg-[#1A1F25] rounded-xl border-transparent [border-image:linear-gradient(to_right,#193CC4,#08FFFF)_1]"
            >
              EXPLORE our consulting services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Consult;















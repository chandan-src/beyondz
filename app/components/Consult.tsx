import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
const Consult = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/consult.png"
          alt="Business professionals looking at data"
          className="w-full h-full object-cover brightness-125"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>




      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-screen flex flex-col">

        {/* Centered header section */}
        <motion.div
          className="pt-16 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 bg-blue-500"></div>
            <h1 className="text-4xl font-bold text-blue-500">Consulting</h1>
          </div>
        </motion.div>

        {/* Center content */}
        <div className="flex-1 flex items-center justify-between px-10">
          {/* Left section with small text */}
          <div className="w-1/2 flex items-center">

          </div>

          {/* Right section */}
          <div className="w-1/2 flex flex-col items-end space-y-4">
            {/* Logo */}


            {/* Heading with gradient */}


            {/* Description text */}
            <motion.div
              className="text-right text-sm text-gray-300 max-w-md mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  staggerChildren: 0.08
                }}
              >
                {["We have consulting packages for companies at all stages in their AI adoption journey.",
                  "This includes companies who are merely trying to understand AI and their options through our ReadinessReview.AI service,",
                  "as well as companies who would like guidance on how to transform themselves and be AI first."].map((line, index) => (
                    <motion.span
                      key={index}
                      className="block"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.15
                      }}
                    >
                      {line}
                    </motion.span>
                  ))}
              </motion.p>
            </motion.div>

            {/* Explore button */}
            <Link href="/consult"

              className="mt-8 border-cyan-500 text-cyan-500 \ hover:text-cyan-400 px-10 py-6 h-auto flex items-center gap-2 text-sm"
            >
              EXPLORE
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















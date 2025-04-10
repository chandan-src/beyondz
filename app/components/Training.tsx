import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Training = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/images/neurology.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 min-h-screen flex flex-col">
        {/* Main content section */}
        <div className="flex flex-col items-center justify-between flex-1">
          {/* Centered heading */}
          <motion.div
            className="w-full text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              / Training
            </motion.h2>
          </motion.div>

          {/* Content section */}
          <motion.div
            className="w-full flex flex-col mt-12 sm:mt-16 md:mt-24 lg:mt-32 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.p
              className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                staggerChildren: 0.08
              }}
            >
              {[
                "The impact of AI stretches far beyond the people who will be working on it and using it actively.",
                "For an inclusive world it is imperative that every person in every workplace is given some level of AI training.",
                "But for each audience, the content might need to be tailored based on their context.",
                "We offer a range of training services that help everyone, from business leaders, to lower-level employees be a part of the global AI revolution."
              ].map((line, index) => (
                <motion.span
                  key={index}
                  className="block mb-4"
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

            <motion.div
              className="mt-6 sm:mt-8 flex justify-center sm:justify-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Link href="/training">
                <Button className="bg-transparent hover:bg-blue-900/40 text-blue-400 border border-blue-400 rounded-sm px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider flex items-center group transition-all duration-300">
                  Explore our training programs
                  <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer section */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <motion.div
            className="text-teal-400 font-bold text-2xl sm:text-3xl tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            GET<span className="text-white">AI</span>
            <p className="text-xs font-normal text-teal-500/70 tracking-wider">FOUNDATION</p>
          </motion.div>

          <motion.div
            className="md:ml-6 text-xs sm:text-sm text-gray-400 max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            Our passion for educating communities around the world in order to make AI
            and its benefits inclusive, goes well beyond our commercial interests. If you
            are a non-profit, passionate about demystifying AI and making AI accessible
            to your community, reach out to us, and we will work with our strategic
            partners <span className="text-teal-400 font-medium">GETAI Foundation</span> to impart high-quality AI education free of cost.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Training;
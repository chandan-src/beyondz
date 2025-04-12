"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
})

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const blogImages = [
    "https://prod.cdn.business.wfu.edu/uploads/2015/11/Web__What-is-Bussines-Analytics.webp",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://prod.cdn.business.wfu.edu/uploads/2015/11/Web__What-is-Bussines-Analytics.webp",
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogImages.length) % blogImages.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center mb-16 text-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-[48px] font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text min-h-[60px] flex items-center">/ Blogs/NewsFeeds</h1>
      </motion.div>

      {/* Main Content */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex space-x-8">
          <motion.div
            className="border-b-2 border-white pb-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span className="text-sm">Featured</span>
          </motion.div>
          <motion.div
            className="text-gray-500 flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <span className="text-sm">Articles</span>
            <span className="text-xs text-gray-500">(1)</span>
          </motion.div>
        </div>
        <motion.div
          className={`max-w-md text-sm text-gray-300 ${ibmPlexMono.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
         Our Blogs and Newsfeeds section features thought-leading articles and global updates on how AI is transforming various industries along with insights into how Beyond Z views these advancements and contributes to the evolving landscape.
        </motion.div>
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <button
            onClick={prevSlide}
            className="rounded-full border border-gray-700 p-1 hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full border border-gray-700 p-1 hover:bg-gray-800 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Card */}
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-lg overflow-hidden h-[300px] relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={currentIndex}
                src={blogImages[currentIndex]}
                alt="Abstract technology"
                className="w-full h-full object-cover absolute inset-0"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Middle Card - Main Content */}
        <motion.div
          className="col-span-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 h-[500px] relative">
            {/* Full background image */}
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence custom={direction} initial={false}>
                <motion.img
                  key={currentIndex}
                  src={blogImages[currentIndex]}
                  alt="Person working on tech"
                  className="w-full h-full object-cover absolute inset-0"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                />
              </AnimatePresence>
            </div>
            
            {/* Gray overlay on the left side */}
            <div className="absolute bg-[#1A1F25] rounded-xl w-1/3 ml-10 mt-10 h-[80%] z-10">
              <div className="p-6">
                <motion.h2
                  className="text-2xl font-medium mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy nibh euismod tincidunt
                </motion.h2>
              </div>
            
             
            </div>
            <motion.div
              className="absolute bottom-6 left-8 text-xs text-gray-400 z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            >
              Released on 12 / 03 / 25
            </motion.div>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="rounded-lg overflow-hidden h-[300px] relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={currentIndex}
                src={blogImages[currentIndex]}
                alt="Digital sphere"
                className="w-full h-full object-cover absolute inset-0"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom Button */}
      <motion.div
        className="flex justify-end mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
      >
        <Link href="/blog" className={`bg-blue-600 text-white text-sm rounded-full px-4 py-2 flex items-center hover:bg-blue-700 transition-colors ${ibmPlexMono.className}`}>
          All Articles
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Blogs;

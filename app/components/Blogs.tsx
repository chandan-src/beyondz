"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
})
import "../globals.css";
const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const blogImages = [
    {
      main: "/images/mainblog.png",
 
      title: "First Blog Post Title",
      date: "12 / 03 / 25"
    },
    {
      main: "/images/sidblog.png",
   
      title: "Second Blog Post Title",
      date: "15 / 03 / 25"
    },
    {
      main: "/images/sideblog.png",
  
      title: "Third Blog Post Title",
      date: "18 / 03 / 25"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
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
        <h1 className="text-heading font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text min-h-[60px] flex items-center">/ Blogs/NewsFeeds</h1>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 items-start mb-6">
        {/* Mobile layout - Our Blogs text on top */}
        <motion.div
          className={`md:hidden w-full text-sm text-gray-300 mb-4 ${ibmPlexMono.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Our Blogs and Newsfeeds section features thought-leading articles and global updates on how AI is transforming various industries along with insights into how Beyond Z views these advancements and contributes to the evolving landscape.
        </motion.div>
        <motion.div
        className="flex justify-end mt-6 block md:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
      >
        <Link href="/blog" className={` bg-[#08FFFF] font-medium text-black text-sm rounded-full px-4 py-2 flex items-center hover:bg-blue-700 transition-colors ${ibmPlexMono.className}`}>
         View all Articles
          <ArrowDown size={16} className="" />
        </Link>
      </motion.div>
        <div className="flex flex-col md:flex-row w-full">
          {/* Articles with count - visible on all screens */}
          <div className="flex">
            {/* Featured - only visible on md and up */}
            <motion.div
              className="hidden md:block mr-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="text-sm">Featured</span>
            </motion.div>
            <motion.div
              className="text-gray-500 md:mr-10 items-center "
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <span className="text-sm">Articles</span>
              <span className="text-xs text-gray-500">({currentIndex + 1})</span>
            </motion.div>
          </div>

          {/* Desktop layout - Our Blogs text in the middle */}
          <motion.div
            className={`hidden md:block  max-w-md md:w-1/2 text-sm text-gray-300  ${ibmPlexMono.className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Our Blogs and Newsfeeds section features thought-leading articles and global updates on how AI is transforming various industries along with insights into how Beyond Z views these advancements and contributes to the evolving landscape.
          </motion.div>
         
          {/* Navigation buttons - right aligned on desktop, below on mobile */}
          <motion.div
            className="flex space-x-2 mt-4 md:mt-0 md:ml-4 self-end md:self-auto w-full md:w-auto justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <button
              onClick={prevSlide}
              className="rounded-full border border-gray-700 p-2 hover:bg-gray-800 transition-colors w-10 h-10 flex items-center justify-center"
            >
             <ArrowLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full border border-gray-700 p-2 hover:bg-gray-800 transition-colors w-10 h-10 flex items-center justify-center"
            >
             <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Card - Hidden on small screens, visible from md up */}
        <motion.div
          className="hidden md:block col-span-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-lg overflow-hidden h-[350px] md:h-[300px] lg:h-[350px] relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
              >
                <Image
                  src={blogImages[(currentIndex)%3].main}
                  alt={`Blog side image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Middle Card - Main Content */}
        <motion.div
          className="col-span-12 md:col-span-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-xl  overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 h-[300px] md:h-[500px] relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
              >
                <Image
                  src={blogImages[(currentIndex+1)%3].main}
                  alt={`Main blog image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Gray overlay - on the left side for md and up, at the bottom for small screens */}
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute bg-[#1A1F25] rounded-xl md:w-1/3 md:ml-10 md:mt-10 md:h-[80%] w-full bottom-0 md:bottom-auto h-1/3 md:h-auto z-10 "
              >
                <div className="p-6 ">
                  <motion.h2
                    className="text-2xl font-medium mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {blogImages[currentIndex].title}
                  </motion.h2>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute bottom-6 left-8 text-xs text-gray-400 z-20"
              >
                Released on {blogImages[currentIndex].date}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Card - Hidden on small screens, visible from md up */}
        <motion.div
          className="hidden md:block col-span-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="rounded-lg overflow-hidden h-[350px] md:h-[300px] lg:h-[350px] relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
              >
                <Image
                  src={blogImages[(currentIndex+2)%3].main}
                  alt={`Blog side image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
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
        <Link href="/blog" className={` hidden md:flex gap-2 bg-blue-600 text-white text-sm rounded-full px-4 py-2 flex items-center hover:bg-blue-700 transition-colors ${ibmPlexMono.className}`}>
          All Articles 
        <ArrowRight size={16} className="" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Blogs;

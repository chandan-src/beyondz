"use client"

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Hero() {
    const springConfig = { stiffness: 50, damping: 15, mass: 1 };
    const bounceConfig = { stiffness: 100, damping: 20, mass: 0.8 };

    return (
        <div className="bg-black text-white absolute top-0 mb-32 overflow-hidden px-4 sm:px-6 md:px-1 h-[calc(100vh-200px)]">
            {/* Background Z */}
            <motion.div
                className="absolute top-0 left-0 right-0 flex justify-center pt-3 sm:pt-4 md:pt-5"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    ...springConfig,
                    delay: 0.6
                }}
            >
                <div className="relative w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[271px] md:h-[355px] mt-8 sm:mt-12 md:mt-16">
                    <Image
                        src="/images/zblack.png"
                        alt="Z"
                        width={220}
                        height={355}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
            </motion.div>

            {/* Content */}
            <div className="container mx-auto mt-32 pt-8 sm:pt-12 md:pt-16 relative z-10">
                <div className="flex flex-col items-center">
                    {/* AI Solutions Text */}
                    <div className="text-center mb-[30px] sm:mb-[40px] md:mb-[55px]">
                        <motion.h2
                            className="text-transparent mr-[50px] sm:mr-[100px] font-heebo md:mr-[150px] bg-clip-text bg-gradient-to-r from-[#193CC4] to-[#08FFFF] text-xl sm:text-2xl md:text-3xl mb-2 font-bold"
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                ...bounceConfig,
                                delay: 0.4
                            }}
                        >
                            Customized AI Solutions
                        </motion.h2>
                        <motion.h3
                            className="text-transparent ml-[50px] sm:ml-[100px] md:ml-[150px] bg-clip-text bg-gradient-to-r from-[#193CC4] to-[#08FFFF] text-xl sm:text-2xl md:text-3xl mb-2 font-bold"
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                ...bounceConfig,
                                delay: 0.6
                            }}
                        >
                            For Every Business
                        </motion.h3>
                    </div>

                    {/* Bottom Text */}
                    <motion.div
                        className="w-full mt-[80px] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            ...bounceConfig,
                            delay: 0.8
                        }}
                    >
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] leading-relaxed w-full sm:w-[85vw] font-valuxe bg-gradient-to-r from-[#77787B]/70 to-[#BDBDBD] text-transparent bg-clip-text py-2"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            TAILORED.TRANSFORMATIVE
                        </motion.h1>
                        <motion.div
                            className="flex items-center gap-2 sm:gap-1 mr-20"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link href="/training" className="font-thin bg-[#193CC4] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-blue-700 transition-colors rounded-sm flex items-center space-x-2">
                                <span className="text-gray-300">/</span>
                                <span>EXPLORE</span>
                            </Link>
                            <motion.div
                                className="bg-[#193CC4] w-[30px] h-[36px] rounded-sm flex items-center justify-center"
                                whileHover={{ rotate: 180 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <path d="M12 5v14M5 12l7 7 7-7" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
"use client"

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import LocomotiveScroll from "@/components/L";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Hero() {
    const springConfig = { stiffness: 50, damping: 15, mass: 1 };
    const bounceConfig = { stiffness: 100, damping: 20, mass: 0.8 };

    return (
        <div className="bg-black text-white relative h-screen overflow-hidden w-full">
            <div className="flex flex-col justify-between h-full">
                {/* Background Z - Centered */}
                <div className="flex-1 flex items-center mt-20 justify-center relative">
                    <motion.div
                        className="flex justify-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            ...springConfig,
                            delay: 0.6
                        }}
                    >
                        <div className="relative w-[180px]  h-[240px] sm:w-[220px] sm:h-[300px] md:w-[271px] md:h-[355px]">
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

                    {/* AI Solutions Text - Overlaid on Z */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <motion.h2
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#193CC4] to-[#08FFFF] text-xl sm:text-2xl md:text-3xl mb-2 font-bold -ml-20 whitespace-nowrap"
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
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#193CC4] to-[#08FFFF] text-xl sm:text-2xl md:text-3xl mb-10 font-bold ml-40 whitespace-nowrap"
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
                </div>

                {/* Bottom Content */}
                <div className="pb-8 sm:pb-12">
                    <motion.div
                        className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            ...bounceConfig,
                            delay: 0.4
                        }}
                    >
                        <motion.h1
                            className="text-3xl text-center lg:text-left sm:text-3xl xl:text-5xl tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] leading-relaxed w-full sm:w-[85vw] font-valuxe bg-gradient-to-r from-[#77787B]/70 to-[#BDBDBD] text-transparent bg-clip-text py-2"
                            whileHover={{
                                scale: 1.02,
                                textShadow: " 0 0 10px rgba(0, 0, 0, 0.5)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <span className="mt-32 md:hidden font-semibold">TAILORED<br />TRANSFORMATIVE</span>
                            <span className="hidden md:inline lg:ml-20">TAILORED.TRANSFORMATIVE</span>
                        </motion.h1>
                        <motion.div
                            className="flex items-center gap-2 sm:gap-1 mr-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link href="/consult" className="hidden md:block font-thin bg-[#193CC4] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-blue-700 transition-colors rounded-sm flex items-center space-x-2">
                                <span className="text-gray-300">/</span>
                                <span>EXPLORE</span>
                            </Link>
                            <motion.div
                                className="hidden md:flex bg-[#193CC4] w-[32px] h-[34px] rounded-sm items-center justify-center cursor-pointer"
                                whileHover={{ rotate: 180 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <ArrowDown size={16} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
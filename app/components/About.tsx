"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import CustomButton from './ui/CustomButton'

import Link from 'next/link'
import { Heebo, IBM_Plex_Mono } from 'next/font/google'
import { motion } from 'framer-motion'

const heebo = Heebo({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
})

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
})

const About = () => {


    return (
        <div  className={`min-h-screen bg-gradient-to-t from-[#C4C4C4] to-[#F5F5F5] relative px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 ${heebo.className}`}>
            <div className="container mx-auto px-10">
                <div className="flex flex-col">
                    {/* Heading */}
                    <motion.h2

                        className="font-bold text-2xl sm:text-[40px] tracking-wider mb-4 sm:mb-6 md:mb-8 text-transparent bg-gradient-to-r from-[#808285] to-[#BDBDBD] bg-clip-text"
                    >/ ABOUT</motion.h2>

                    {/* First Paragraph */}
                    <motion.div
                        className="mb-8 sm:mb-12 md:mb-16"
                      
                    >
                        <motion.p
                            className="text-xl sm:text-2xl md:text-[32px] font-semibold text-[#666666] leading-[18px] md:leading-relaxed line-height-[18px] font-mixed"
                        >
                           In the history of business & commerce, there has been no game-changer like Artificial Intelligence.
                                "Most earlier transformative technologies like electricity, industrial machines and computers, needed capital investments that could not be afforded by many.
                                But AI can be a leveler. It can tip the scales in favor of the ones who decide to embrace it.
                                We enable this revolution by making AI accessible and inclusive
                        </motion.p>
                    </motion.div>

                    {/* Image section with text overlay and button */}
                    <div className="flex flex-col lg:flex-row relative mb-8 sm:mb-12 md:mb-16">
                        {/* Image container */}
                        <div className="relative  w-full overflow-hidden flex justify-center">
                            <motion.div
                                
                                className="relative w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] mx-auto"
                            >
                                <Image
                                    src="/images/3d.png"
                                    alt="Beyond Z 3D"
                                    width={400}
                                    height={300}
                                    className=" object-cover transition-transform w-full h-full duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.h3
                                     
                                        className="flex justify-center"
                                    >
                                        <Image src="/images/beyondz.png" alt="Beyondz" width={120} height={120} />
                                    </motion.h3>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right side button */}
                        <div className="relative lg:absolute mt-4 lg:mt-0 flex justify-center lg:top-1/2 lg:right-4 xl:right-8 2xl:right-16 lg:transform lg:-translate-y-1/2 z-10">
                            <Link
                                href="/about"
                                className={`inline-flex items-center justify-center w-[250px] sm:w-[280px] md:w-[308px] h-[45px] sm:h-[52px] bg-transparent border rounded-sm border-[black] text-black uppercase lg:mb-20 lg:ml-[-20] ${ibmPlexMono.className} font-medium`}
                            >
                                More About Us
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Second Paragraph */}
                <motion.div
                    className=" mb-8 sm:mb-12 md:mb-16"
                  
                >
                    <motion.p
                        className="text-xl sm:text-2xl md:text-[32px]  font-semibold text-[#666666] leading-[18px] md:leading-relaxed line-height-[18px]"
                    >
                       We let each business decide the extent to which they want to know, engage with or use AI.
                            From consulting, to training, to targeted AI implementations to comprehensive AI first digital transformation,
                            we offer bespoke solutions that allow everyone to be a part of the AI revolution.
                               
                    </motion.p>
                </motion.div>
            </div>
        </div>
    )
}

export default About

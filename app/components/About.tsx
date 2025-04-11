import Image from 'next/image'
import React, { useRef } from 'react'
import CustomButton from './ui/CustomButton'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Heebo } from 'next/font/google'

const heebo = Heebo({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
})

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className={`min-h-screen bg-gradient-to-t from-[#C4C4C4] to-[#F5F5F5] relative px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 ${heebo.className}`}>
            <div className="container mx-auto px-10">
                <div className="flex flex-col">
                    {/* Heading */}
                    <motion.h2
                        style={{ opacity }}
                        className="font-bold sm:text-[40px] tracking-wider mb-4 sm:mb-6 md:mb-8 text-transparent bg-gradient-to-r from-[#808285] to-[#BDBDBD] bg-clip-text"
                    >/ ABOUT</motion.h2>

                    {/* First Paragraph */}
                    <motion.div
                        className="mb-8 sm:mb-12 md:mb-16"
                        style={{ opacity }}
                    >
                        <motion.p
                            className="text-[32px] font-semibold text-[#666666] leading-relaxed"
                        >
                            {["In the history of business & commerce, there has been no game-changer like Artificial Intelligence.",
                                "Most earlier transformative technologies like electricity, industrial machines and computers, needed capital investments that could not be afforded by many.",
                                "But AI can be a leveler. It can tip the scales in favor of the ones who decide to embrace it.",
                                "We enable this revolution by making AI accessible and inclusive."].map((line, index) => (
                                    <motion.span
                                        key={index}
                                        className="block"
                                        style={{ opacity }}
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

                    {/* Image section with text overlay and button */}
                    <div className="relative mb-8 sm:mb-12 md:mb-16">
                        {/* Image container */}
                        <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full overflow-hidden flex justify-center">
                            <motion.div
                                style={{ opacity }}
                                className="relative w-[1200px] h-[500px] mx-auto"
                            >
                                <Image
                                    src="/images/3d.png"
                                    alt="Beyond Z 3D"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.h3
                                        style={{ opacity }}
                                        className="flex justify-center"
                                    >
                                        <Image src="/images/beyondz.png" alt="Beyondz" width={200} height={100} />
                                    </motion.h3>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right side button */}
                        <div className="absolute top-1/2 right-4 sm:right-8 md:right-12 lg:right-16 transform -translate-y-1/2 z-10">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center w-[308px] h-[52px] bg-transparent border rounded-sm border-[black] text-black uppercase mb-20 ml-[-20]"
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
                    className="mb-8 sm:mb-12 md:mb-16"
                    style={{ opacity }}
                >
                    <motion.p
                        className="text-[32px] font-semibold text-[#666666] leading-relaxed"
                    >
                        {["We let each business decide the extent to which they want to know, engage with or use AI.",
                            "From consulting, to training, to targeted AI implementations to comprehensive AI first digital transformation,",
                            "we offer bespoke solutions that allow everyone to be a part of the AI revolution."].map((line, index) => (
                                <motion.span
                                    key={index}
                                    className="block"
                                    style={{ opacity }}
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
            </div>
        </div>
    )
}

export default About

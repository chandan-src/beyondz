import Image from 'next/image'
import React from 'react'
import CustomButton from './ui/CustomButton'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className="min-h-screen bg-[#f5f5f5] relative px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-gray-500 text-base sm:text-lg tracking-wider mb-4 sm:mb-6 md:mb-8"
                    >/ ABOUT</motion.h2>

                    {/* First Paragraph */}
                    <motion.div
                        className="mb-8 sm:mb-12 md:mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <motion.p
                            className="text-base sm:text-lg leading-relaxed text-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.4,
                                staggerChildren: 0.08
                            }}
                        >
                            {["In the history of business & commerce, there has been no game-changer like Artificial Intelligence.",
                                "Most earlier transformative technologies like electricity, industrial machines and computers, needed capital investments that could not be afforded by many.",
                                "But AI can be a leveler. It can tip the scales in favor of the ones who decide to embrace it.",
                                "We enable this revolution by making AI accessible and inclusive."].map((line, index) => (
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

                    {/* Image section with text overlay and button */}
                    <div className="relative mb-8 sm:mb-12 md:mb-16">
                        {/* Image container */}
                        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
                                className="relative w-full h-full"
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
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4 sm:px-6 py-1 sm:py-2 rounded-md backdrop-blur-sm bg-black/30"
                                    >
                                        Beyondz
                                    </motion.h3>
                                </div>
                            </motion.div>
                        </div>

                        {/* Centered text overlay */}


                        {/* Right side button */}
                        <div className="absolute top-1/2 right-4 sm:right-8 md:right-12 lg:right-16 transform -translate-y-1/2 z-10">
                            <CustomButton
                                href="/about"
                                variant="secondary"
                                size="sm"
                                icon="arrowRight"
                            >
                                More About Us
                            </CustomButton>
                        </div>
                    </div>
                </div>

                {/* Second Paragraph */}
                <motion.div
                    className="mb-4 sm:mb-6 md:mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <motion.p
                        className="text-base sm:text-lg leading-relaxed text-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.4,
                            staggerChildren: 0.08
                        }}
                    >
                        {["We let each business decide the extent to which they want to know, engage with or use AI.",
                            "From consulting, to training, to targeted AI implementations to comprehensive AI first digital transformation,",
                            "we offer bespoke solutions that allow everyone to be a part of the AI revolution."].map((line, index) => (
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

            </div>
        </div>

    )
}

export default About

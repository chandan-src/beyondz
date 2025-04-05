import Image from 'next/image'
import React from 'react'
import CustomButton from './ui/CustomButton'

const About = () => {
    return (
        <div className="min-h-screen bg-[#f5f5f5] relative px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    {/* Heading */}
                    <h2 className="text-gray-500 text-base sm:text-lg tracking-wider mb-4 sm:mb-6 md:mb-8">/ ABOUT</h2>

                    {/* First Paragraph */}
                    <div className="mb-8 sm:mb-12 md:mb-16">
                        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                            In the history of business & commerce, there has been no game-changer like Artificial Intelligence. Most earlier transformative technologies like electricity, industrial machines and computers, needed capital investments that could not be afforded by many. But AI can be a leveler. It can tip the scales in favor of the ones who decide to embrace it. We enable this revolution by making AI accessible and inclusive.
                        </p>
                    </div>

                    {/* Image section with text overlay and button */}
                    <div className="relative mb-8 sm:mb-12 md:mb-16">
                        {/* Image container */}
                        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full">
                            <Image
                                src="/images/3d.png"
                                alt="Beyond Z 3D"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="hover:scale-105 transition-transform duration-500"
                            />

                            {/* Centered text overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black/50 px-4 sm:px-6 py-1 sm:py-2 rounded-md">Beyondz</h3>
                            </div>

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
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                            We let each business decide the extent to which they want to know, engage with or use AI. From consulting, to training, to targeted AI implementations to comprehensive AI first digital transformation, we offer bespoke solutions that allow everyone to be a part of the AI revolution.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About

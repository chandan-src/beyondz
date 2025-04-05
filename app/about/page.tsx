import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twoinone from '../components/Twoinone';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            <div className="min-h-screen bg-black text-white flex flex-col">
                {/* Hero Section with Image and Title */}
                <div className="relative w-full h-screen  ">
                    {/* Main Image - Right side of the header */}
                    <div className="absolute top-0 right-0 p-10 overflow-hidden ">
                        <Image
                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                            alt="Hand touching technology"
                            width={600}
                            height={200}
                            className=" object-cover"
                        />
                    </div>

                    {/* Title - Left align */}
                    <div className="absolute bottom-10 left-8">
                        <h1 className="slashed-heading text-5xl font-bold">ABOUT US</h1>
                    </div>

                    {/* Footer Button - Bottom Right */}
                    <div className="absolute bottom-2 right-2 p-10">
                        <button className="bg-blue-500 text-white px-4 py-1 text-xs rounded">
                            FOLLOW
                        </button>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-blue-500"></div>

                <div className='py-36 px-10'>
                    {/* Vision Section */}
                    <div className="mt-8 px-8">
                        <h2 className="slashed-heading text-blue-500 text-xl font-medium mb-4">Vision</h2>

                        <div className="flex gap-6">
                            <div className="w-[120px] h-[120px] bg-[#131313] rounded-lg flex items-center justify-center">
                                <div className="w-12 h-12 relative">
                                    <div className="w-full h-full rounded-full border-2 border-blue-500"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-2 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <p className="text-sm leading-relaxed text-gray-300">
                                    "To empower businesses worldwide by harnessing the transformative power of AI, fostering inclusivity and equitable growth for companies of all sizes."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="mt-10 px-8">
                        <h2 className="slashed-heading text-blue-500 text-xl font-medium mb-4">Mission</h2>

                        <div className="flex gap-6">
                            <div className="w-[120px] h-[120px] bg-[#131313] rounded-lg flex items-center justify-center">
                                <div className="w-16 h-16 relative">
                                    <div className="w-full h-full rounded-full border-2 border-blue-500"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-1 h-6 bg-blue-500 transform -translate-x-[2px] -rotate-45"></div>
                                        <div className="w-2 h-2 bg-blue-500 rounded-full absolute -bottom-1 -right-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <p className="text-sm leading-relaxed text-gray-300">
                                    "To provide comprehensive and flexible AI solutions that empower companies of all sizes to leverage AI effectively, offering tailored engagement models from elementary AI implementation to full-scale AI transformation, ensuring readiness, efficiency, productivity and sustained growth, while responsibly navigating the evolving AI landscape through dedicated training and consulting services."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Twoinone />
            <Footer />
        </main>
    );
};

export default AboutPage; 
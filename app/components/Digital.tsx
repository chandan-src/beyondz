import React from 'react';
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

const Digital = () => {
    return (
        <div className="min-h-screen bg-[#000] py-16 px-4 md:px-8 relative overflow-hidden">
            {/* Background visual elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-digital-blue/5 blur-3xl rounded-full"></div>
            <div className="absolute top-1/4 left-20 w-32 h-32 bg-digital-cyan/5 blur-3xl rounded-full"></div>

            <div className="max-w-6xl mx-auto">
                {/* Header Section */}

                <div className="mb-8">
                    {/* Centered Title */}
                    <div className="text-center mb-8">


                        <h1 className="text-3xl font-bold bg-gradient-to-r from-digital-blue to-digital-cyan bg-clip-text text-transparent">
                            / Digital Transformation
                        </h1>
                    </div>

                    {/* Right-aligned Content */}
                    <div className="max-w-3xl ml-auto">
                        <p className="text-gray-400 max-w-2xl">
                            Our Digital Transformation Solutions are where we go beyond consulting and training,
                            and actually get down to implementing transformational projects that help clients
                            leverage a range of cutting-edge technologies spanning natural language processing,
                            predictive analytics, AgenticAI, and more to comprehensively transform the way they
                            do business.
                        </p>
                    </div>
                </div>





                {/* Stacked Cards Section */}
                <div className="relative">
                    {/* Card 1 */}
                    <div className="relative z-30">
                        <div className="card-gradient-border transition-all duration-300 relative mb-4 w-full overflow-hidden opacity-80 hover:opacity-95 rounded-t-xl">
                            <div className="card-dark-gradient p-6 md:p-8 flex flex-col min-h-[300px]">
                                <div className="flex items-center mb-2 md:mb-5">
                                    <div className="bg-digital-blue rounded-md py-1 px-3 flex items-center space-x-2">
                                        <span className="text-xs font-medium text-white">01</span>
                                        <span className="text-xs font-medium text-white">Targeted AI Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative -mt-4 z-20">
                        <div className="card-gradient-border transition-all duration-300 relative mb-4 w-full overflow-hidden opacity-80 hover:opacity-95">
                            <div className="card-dark-gradient p-6 md:p-8 flex flex-col min-h-[300px]">
                                <div className="flex items-center mb-2 md:mb-5">
                                    <div className="bg-digital-blue rounded-md py-1 px-3 flex items-center space-x-2">
                                        <span className="text-xs font-medium text-white">02</span>
                                        <span className="text-xs font-medium text-white">AI Factory Implementation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Active Card */}
                    <div className="relative -mt-4 z-10">
                        <div className="card-gradient-border transition-all duration-300 relative mb-4 w-full overflow-hidden opacity-100 rounded-b-xl">
                            <div className="card-dark-gradient p-6 md:p-8 flex flex-col min-h-[300px]">
                                <div className="flex items-center mb-2 md:mb-5">
                                    <div className="bg-digital-blue rounded-md py-1 px-3 flex items-center space-x-2">
                                        <span className="text-xs font-medium text-white">03</span>
                                        <span className="text-xs font-medium text-white">AI Enabled App Development</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16">
                                    <div className="max-w-md">
                                        <p className="text-gray-300">
                                            At Beyond Z, we offer AI-enabled app development
                                            services that combine deep AI expertise with top-tier
                                            app development...
                                        </p>
                                    </div>

                                    {/* Code Icon */}
                                    <div className="relative mt-8 md:mt-0">
                                        <div className="relative flex flex-col items-center">
                                            <div className="w-24 h-24 rounded-full bg-[#0a1520] flex items-center justify-center border border-digital-cyan blue-glow">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-digital-cyan">
                                                    <polyline points="16 18 22 12 16 6"></polyline>
                                                    <polyline points="8 6 2 12 8 18"></polyline>
                                                </svg>
                                            </div>

                                            <div className="mt-4 w-20 h-28 border border-digital-cyan bg-[#0a1520] rounded-md flex flex-col items-center justify-center p-2 blue-glow">
                                                <div className="w-full h-2 bg-digital-cyan/30 rounded mb-2"></div>
                                                <div className="w-full h-2 bg-digital-cyan/30 rounded mb-2"></div>
                                                <div className="w-full h-2 bg-digital-cyan/30 rounded mb-2"></div>
                                                <div className="w-2/3 h-2 bg-digital-cyan/30 rounded"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden">
                                        {/* This would be additional content that appears to be partially visible in the reference */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 flex justify-center">
                    <Link href="/about">
                        <button className="blue-button animate-glow">
                            <span>SEE OUR SOLUTIONS</span>
                            <ArrowRight size={16} />
                        </button>
                    </Link>
                </div>

                {/* Bottom Navigation Dots */}
                <div className="flex justify-center mt-20 space-x-2">
                    {[1, 2, 3].map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 rounded-full ${i === 0 ? 'w-8 bg-digital-blue' : 'w-2 bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Digital;

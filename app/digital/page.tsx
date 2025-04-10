import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twoinone from '../components/Twoinone';
import Image from 'next/image';

const DigitalPage = () => {
    return (
        <main className="min-h-screen bg-black text-white">
        
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
                        <h1 className="slashed-heading text-5xl font-bold">/ Digital Transformation</h1>
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


            </div>
            <div className="min-h-screen bg-black text-white flex flex-col pt-20 py-8 max-w-4xl mx-auto ">
                {/* Header */}
                <div className="mb-10">
                    <div className="text-xs text-gray-500 mb-2">DT1/001</div>
                    <h1 className="text-2xl font-semibold text-blue-500">Targeted AI Solutions</h1>
                </div>

                {/* Card 1 - Agentic AI Implementation */}
                <div className="border border-blue-900/50 rounded-lg p-6 mb-6 relative bg-black/80">
                    <div className="flex justify-between">
                        <div className="max-w-lg">
                            <h2 className="text-blue-400 font-medium mb-3">a) Agentic AI Implementation</h2>
                            <p className="text-gray-300 text-sm mb-6">
                                Agentic AI is a cutting-edge technology that seamlessly integrates
                                rule-based and AI-driven systems, offering a versatile solution for
                                businesses looking to enhance productivity without extensive
                                configuration.
                            </p>
                            <div className="text-xs text-gray-500">MORE+</div>
                        </div>
                        <div className="bg-gray-800/90 w-32 h-32 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Predictive Analytics */}
                <div className="border border-blue-900/50 rounded-lg p-6 mb-6 relative bg-black/80">
                    <div className="flex justify-between">
                        <div className="max-w-lg">
                            <h2 className="text-blue-400 font-medium mb-3">b)Predictive Analytics</h2>
                            <p className="text-gray-300 text-sm mb-6">
                                We believe predictive analytics is a transformative force in the
                                business world. By harnessing historical data to forecast
                                future trends, we empower organizations to make informed,
                                strategic decisions with confidence.
                            </p>
                            <div className="text-xs text-gray-500">MORE+</div>
                        </div>
                        <div className="bg-gray-800/90 w-32 h-32 rounded-lg flex items-center justify-center">
                            <div className="w-20 h-20">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path
                                        d="M10,70 Q25,40 40,60 Q55,80 70,50 Q85,20 95,40"
                                        fill="none"
                                        stroke="#0ea5e9"
                                        strokeWidth="2"
                                    />
                                    <circle cx="95" cy="40" r="5" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card 3 - Natural Language Processing */}
                <div className="border border-blue-900/50 rounded-lg p-6 mb-6 relative bg-black/80">
                    <div className="flex justify-between">
                        <div className="max-w-lg">
                            <h2 className="text-blue-400 font-medium mb-3">c) Natural Language Processing</h2>
                            <p className="text-gray-300 text-sm mb-6">
                                At Beyond Z, we excel in Natural Language Processing (NLP),
                                leveraging deep expertise to deliver advanced language
                                solutions that power seamless communication both internally
                                and externally.
                            </p>
                            <div className="text-xs text-gray-500">MORE+</div>
                        </div>
                        <div className="bg-gray-800/90 w-32 h-32 rounded-lg flex items-center justify-center">
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-10 border border-blue-400 rounded-full flex items-center justify-center">
                                        <div className="text-blue-400 text-xs">11011</div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-5">
                                    <div className="w-14 h-8 border border-blue-400 rounded-full flex items-center justify-center">
                                        <div className="text-blue-400 text-xs">11000</div>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0">
                                    <div className="w-12 h-8 border border-blue-400 rounded-full flex items-center justify-center">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 rounded-full border border-blue-400 flex items-center justify-center mr-1">
                                                <div className="w-1.5 h-1.5 bg-blue-400"></div>
                                            </div>
                                            <div className="w-4 h-3">
                                                <svg viewBox="0 0 16 9" className="w-full h-full">
                                                    <path d="M1,4.5 L5,1 L5,8 L1,4.5 Z" fill="#0ea5e9" />
                                                    <path d="M8,1 L8,8 M11,1 L11,8 M14,1 L14,8" stroke="#0ea5e9" strokeWidth="1.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mb-10">
                    <div className="text-xs text-gray-500 mb-2">DT1/001</div>
                    <h1 className="text-2xl font-semibold text-blue-500">AI Factory Implementation</h1>
                </div>

                {/* Card 1 - Agentic AI Implementation */}
                <div className="border border-blue-900/50 rounded-lg p-6 mb-6 relative bg-black/80">
                    <div className="flex justify-between">
                        <div className="max-w-lg">

                            <p className="text-gray-300 text-sm mb-6">
                                AI Factory Implementation is our most revolutionary and comprehensive Digital Transformation service, designed to transform your company into an AI-first powerhouse.
                            </p>
                            <div className="text-xs text-gray-500">MORE+</div>
                        </div>
                        <div className="bg-gray-800/90 w-32 h-32 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="text-xs text-gray-500 mb-2">DT1/001</div>
                    <h1 className="text-2xl font-semibold text-blue-500">AI Enabled App Development</h1>
                </div>

                {/* Card 1 - Agentic AI Implementation */}
                <div className="border border-blue-900/50 rounded-lg p-6 mb-6 relative bg-black/80">
                    <div className="flex justify-between">
                        <div className="max-w-lg">

                            <p className="text-gray-300 text-sm mb-6">
                                AI Factory Implementation is our most revolutionary and comprehensive Digital Transformation service, designed to transform your company into an AI-first powerhouse.
                            </p>
                            <div className="text-xs text-gray-500">MORE+</div>
                        </div>
                        <div className="bg-gray-800/90 w-32 h-32 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
                                <div className="w-10 h-10 border border-blue-400 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400/20"></div>
                                </div>
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

export default DigitalPage; 
'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './page.scss';

// Dummy data
const projects: Array<{
    title: string;
    description: string;
    src: string;
    link: string;
    color: string;
    range: [number, number];
}> = [
        {
            title: "a) Agentic AI Implementation",
            description: "Agentic AI is a cutting-edge technology that seamlessly integrates rule-based and AI-driven systems, offering a versatile solution for businesses looking to enhance productivity without extensive data requirements.",
            src: "rock.jpg",
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            color: "#BBACAF",
            range: [0, 0.25]
        },
        {
            title: "Clément Chapillon",
            description: "A story on the border between reality and imagination, provoking contradictory feelings in wild rocky terrains.",
            src: "tree.jpg",
            link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
            color: "#977F6D",
            range: [0.25, 0.5]
        },
        {
            title: "Zissou",
            description: "Photography as a storytelling medium with ambiguity that lets the viewer find their own story.",
            src: "water.jpg",
            link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
            color: "#C2491D",
            range: [0.5, 0.75]
        },
    ];

const Digital = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <main ref={container} className="main">
            <div className="justify-between mt-20">
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
            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                const scale = useTransform(scrollYProgress, project.range || [i * 0.25, 1], [1, targetScale]);

                return (
                    <motion.div
                        key={`p_${i}`}
                        className="cardContainer "
                        style={{ scale }}
                    >
                        <div className="relative -mt-4 z-10 w-[80vw]" style={{ top: `calc(-5vh + ${i * 25}px)` }}>
                            <div className="card-gradient-border transition-all duration-300 relative mb-4 w-full overflow-hidden opacity-100 rounded-b-xl">
                                <div className="card-dark-gradient p-6 md:p-8 flex flex-col min-h-[300px]">
                                    <div className="flex items-center mb-2 md:mb-5">
                                        <div className="bg-digital-blue rounded-md py-1 px-3 flex items-center space-x-2">
                                            <span className="text-xs font-medium text-white">{`0${i + 1}`}</span>
                                            <span className="text-xs font-medium text-white">{project.title}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16">
                                        <div className="max-w-md">
                                            <p className="text-gray-300">{project.description}</p>
                                        </div>

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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </main>
    );
}

export default Digital;

'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './page.scss';
import { Heebo } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link';
import "../globals.css";
const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
})

const heebo = Heebo({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
})
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
            title: "Targeted AI Solutions",
            description: "Agentic AI is a cutting-edge technology that seamlessly integrates rule-based and AI-driven systems, offering a versatile...",
            src: "rock.jpg",
            link: "/images/digit1.png",
            color: "#BBACAF",
            range: [0, 0.25]
        },
        {
            title: "AI Factory Implementation",
            description: "AI Factory Implementation is our most revolutionary and comprehensive Digital Transformation service, designed to transform...",
            src: "tree.jpg",
            link: "/images/digit2.png",
            color: "#977F6D",
            range: [0.25, 0.5]
        },
        {
            title: "AI Enabled App Development",
            description: "At Beyond Z, we offer AI-enabled app development services that combine deep AI expertise with top-tier app development... ",
            src: "water.jpg",
            link: "/images/digit3.png",
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
        <main ref={container} className={`main relative min-h-screen bg-black ${heebo.className}`}>
            <div className="pt-20">
                <motion.div
                    className="flex items-center justify-center mb-16 text-4xl w-full text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-heading font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text min-h-[60px] flex flex-col md:flex-row items-center justify-center">
                    <span className="hidden md:block">/ Digital Transformation</span>
                        <span className="md:hidden block">/ Digital</span>
                        <span className="md:hidden block ml-36">Transformation</span>
                    </h1>
                   
                </motion.div>

                {/* Content directly below heading */}
                <div className="flex justify-end">
                    <p className={`text-gray-400 mb-20 md:mb-0 p-10 md:p-2 max-w-full lg:max-w-3xl ml-auto md:mr-60 ${ibmPlexMono.className}`}>
                        Our Digital Transformation Solutions are where we go beyond consulting and training,
                        and actually get down to implementing transformational projects that help clients
                        leverage a range of cutting-edge technologies spanning natural language processing,
                        predictive analytics, AgenticAI, and more to comprehensively transform the way they
                        do business.
                    </p>
                </div>
            </div>
            <div className="relative">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    const scale = useTransform(scrollYProgress, project.range || [i * 0.25, 1], [1, targetScale]);

                    return (
                        <motion.div
                            key={`p_${i}`}
                            className="cardContainer fixed top-0 left-0 w-full h-screen flex items-center justify-center"
                            style={{ scale }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.1, 0.25, 1.0],
                                type: "spring",
                                stiffness: 120,
                                mass: 0.8,
                            }}
                            whileHover={{
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                }
                            }}
                            animate={{
                                transition: {
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <div className="relative z-10 w-full">
                                <div className="transition-all duration-300 relative mb-4 w-full overflow-hidden opacity-100 border-2 border-transparent [border-image:linear-gradient(to_right,#193CC4,#08FFFF)_1]">
                                    <div className="bg-black rounded-xl p-6 md:p-4 flex flex-col min-h-[160px]">
                                        <div className="flex items-center text-center md:text-start  mb-1 md:mb-2 px-3">
                                            <div className={`text-[20px]  md:text-[30px] font-bold p-3 ${heebo.className} text-black bg-gradient-to-r mt-10 mx-4 md:ml-20 w-[calc(100%-2rem)] md:w-auto from-[#193CC4] to-[#08FFFF] rounded-md`}>
                                                <span>{project.title}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center justify-center lg:text-start lg:flex-row justify-between items-start md:items-center md:mt-0 mt-10">
                                            <div className="w-full md:max-w-md pr-6 mx-4 md:ml-32 px-4 md:px-0">
                                                <p className="text-gray-300 mb-4">{project.description}</p>
                                                <div className="flex justify-end w-full">
                                                    <Link
                                                        href="/about"
                                                        className={`inline-flex items-center justify-center w-[308px] h-[42px] bg-[#1A1F25] text-[#ADADAD] border rounded-sm border-[black] uppercase mt-6 md:mt-10 ${ibmPlexMono.className} font-light`}
                                                    >
                                                        See Our Solutions
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="flex justify-center items-center w-full md:ml-auto mt-8 md:mt-10">
                                                <div className="flex items-center justify-center flex-col mx-auto md:ml-30 mb-6 md:mb-36 md:mr-60 bg-[#1A1F25] rounded-md w-[280px] h-[280px] md:w-[330px] md:h-[330px]">
                                                    <Image
                                                        src={project.link}
                                                        alt={project.title}
                                                        width={160}
                                                        height={180}
                                                        className="object-cover mx-auto my-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </main>
    );
}

export default Digital;

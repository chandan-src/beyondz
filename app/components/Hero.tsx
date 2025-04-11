import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
const montserrat = Montserrat({ subsets: ['latin'] })

const Hero = () => {
    return (
        <div className="bg-black text-white relative overflow-hidden px-4 sm:px-6 md:px-1 h-[calc(100vh-130px)]">
            {/* Background Z */}
            <div className="absolute top-0 left-0 right-0 flex justify-center pt-3 sm:pt-4 md:pt-5">
                <div className="relative w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[271px] md:h-[355px] mt-8 sm:mt-12 md:mt-16">
                    <Image
                        src="/images/zblack.png"
                        alt="Z"
                        width={220}
                        height={355}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto mt-32 pt-8 sm:pt-12 md:pt-16 relative z-10">
                <div className="flex flex-col items-center">
                    {/* AI Solutions Text */}
                    <div className="text-center mb-[30px] sm:mb-[40px] md:mb-[55px]">
                        <motion.h2
                            className="text-transparent mr-[50px] sm:mr-[100px] font-heebo md:mr-[150px] bg-clip-text bg-gradient-to-r from-[#193CC4] to-[#08FFFF] text-xl sm:text-2xl md:text-3xl mb-2 font-bold"
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                x: {
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1]
                                },
                                opacity: { duration: 0.8 }
                            }}
                        >
                            Customized AI Solutions
                        </motion.h2>
                        <motion.h3
                            className="text-transparent ml-[50px] sm:ml-[100px] md:ml-[150px] bg-clip-text bg-gradient-to-r from-[#193CC4] to-[#08FFFF] text-xl sm:text-2xl md:text-3xl mb-2 font-bold"
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                x: {
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1]
                                },
                                opacity: { duration: 0.8 }
                            }}
                        >
                            For Every Business
                        </motion.h3>
                    </div>

                    {/* Bottom Text */}
                    <div className="w-full mt-[80px] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] leading-relaxed w-full sm:w-[85vw] font-valuxe bg-gradient-to-r from-[#77787B]/70 to-[#BDBDBD] text-transparent bg-clip-text py-2">
                            TAILORED.TRANSFORMATIVE
                        </h1>
                        <div className="flex items-center gap-2 sm:gap-1 mr-20">
                            <Link href="/training" className="font-thin bg-[#193CC4] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-blue-700 transition-colors rounded-sm flex items-center space-x-2">
                                <span className="text-gray-300">/</span>
                                <span>EXPLORE</span>
                            </Link>
                            <div className="bg-[#193CC4] w-[30px] h-[36px] rounded-sm flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <path d="M12 5v14M5 12l7 7 7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
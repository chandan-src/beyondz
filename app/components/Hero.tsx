import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ['latin'] })

const Hero = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden px-4 sm:px-6 md:px-8">
            {/* Background Z */}
            <div className="absolute top-0 left-0 right-0 flex justify-center pt-3 sm:pt-4 md:pt-5">
                <div className="relative w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[271px] md:h-[355px] mt-8 sm:mt-12 md:mt-16">
                    <Image
                        src="/images/zblack.png"
                        alt="Z"
                        width={220}
                        height={300}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto pt-16 sm:pt-24 md:pt-32 relative z-10">
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] sm:min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-128px)]">
                    {/* AI Solutions Text */}
                    <div className="text-center mb-[100px] sm:mb-[150px] md:mb-[400px]">
                        <h2 className="text-transparent mr-[50px] sm:mr-[100px] md:mr-[150px] bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 text-xl sm:text-2xl md:text-3xl mb-2 font-bold">
                            Customized AI Solutions
                        </h2>
                        <h3 className="text-transparent ml-[50px] sm:ml-[100px] md:ml-[150px] bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 text-xl sm:text-2xl md:text-3xl mb-2 font-bold">
                            For Every Business
                        </h3>
                    </div>

                    {/* Bottom Text */}
                    <div className="absolute mb-12 sm:bottom-16 md:mb-[150px] w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                        <h1 className={`text-3xl sm:text-3xl md:text-3xl lg:text-5xl tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-light ${montserrat.className}`}>
                            TAILORED.TRANSFORMATIVE
                        </h1>
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <Link href="/training" className="bg-blue-600 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-blue-700 transition-colors rounded-sm">
                                EXPLORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
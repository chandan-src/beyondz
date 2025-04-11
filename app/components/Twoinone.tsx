import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Heebo, IBM_Plex_Mono } from 'next/font/google'
const heebo = Heebo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
})
const Twoinone = () => {
  return (
    <section className="w-full bg-white relative min-h-screen flex flex-col ">
      {/* Content Section - Top Half */}
      <div className="w-full bg-gradient-to-r from-[#161A1E]  to-[#1A1F2C] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-3/4 ">
            <h1 className={`text-2xl sm:text-3xl ml-40 md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-400 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F5F5F5] to-[#666666] font-semibold  ${heebo.className}`}>
              THE WORLD IS <br className="hidden sm:block" />
              RACING AHEAD WITH<br className="hidden sm:block" />
              ARTIFICIAL INTELLIGENCE.<br className="hidden sm:block" />
              DON'T GET LEFT BEHIND.
            </h1>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/4 flex flex-col space-y-4 sm:space-y-6 mb-20 mr-40">
            <p className={`text-gray-500 text-xs sm:text-sm ${ibmPlexMono.className}`}>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit sed diam nonummy
            </p>
            <a
              href="/contactus"
              className="bg-[#313942] text-[13px] w-[308px] h-[52px] text-white px-3 sm:px-4 md:px-6 py-1 text-xs hover:bg-[#404040] transition-colors rounded-sm flex items-center justify-center"
            >
              LET'S TALK
              <ArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section - Bottom Half */}
      <div className="w-full flex absolute mt-[200px] sm:mt-[200px] md:[150px] lg:[200px] justify-center items-center bg-white p-4 sm:p-6 md:p-8 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/3d.png"
              alt="Neurology"
              width={1000}
              height={1000}
              className="w-auto h-auto max-w-full max-h-full object-contain"
              priority
              style={{ objectPosition: 'center center' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Twoinone

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Twoinone = () => {
  return (
    <section className="w-full bg-white relative min-h-screen flex flex-col">
      {/* Content Section - Top Half */}
      <div className="w-full bg-gradient-to-r from-[#161A1E] to-[#1A1F2C] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-3/4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-400 leading-tight">
              THE WORLD IS <br className="hidden sm:block" />
              RACING AHEAD WITH<br className="hidden sm:block" />
              ARTIFICIAL INTELLIGENCE.<br className="hidden sm:block" />
              DON'T GET LEFT BEHIND.
            </h1>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/4 flex flex-col space-y-4 sm:space-y-6">
            <p className="text-gray-500 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit sed diam nonummy
            </p>
            <a
              href="/contactus"
              className="border border-cyan-500 text-cyan-500 py-2 sm:py-3 px-4 sm:px-6 flex items-center justify-center hover:bg-cyan-900 hover:bg-opacity-30 transition-all text-xs sm:text-sm"
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
              width={800}
              height={800}
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

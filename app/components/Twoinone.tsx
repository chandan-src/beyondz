import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      <div className="bg-gradient-to-r from-[#161A1E] to-[#1A1F2C] py-12 sm:py-16 md:py-20 lg:py-24 px-10 z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-3/4">
            <h1 className={`font-bold md:font-medium text-3xl sm:text-3xl p-2 md:ml-40 md:text-4xl lg:text-5xl xl:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F5F5F5] to-[#666666] ${heebo.className}`}>
              THE WORLD IS <br />
              RACING AHEAD WITH<br />
              ARTIFICIAL INTELLIGENCE.<br />
              DON'T GET LEFT BEHIND.
            </h1>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/4 flex flex-col space-y-4 sm:space-y-6 mb-20 md:mr-40">
            <p className={`text-gray-500 text-xs mb-10 md:mb-0 sm:text-sm ${ibmPlexMono.className}`}>
            Reach out to us to know more about how AI can empower your business
            </p>
            <a
              href="/contactus"
              className="uppercase ml-auto border-2 text-white w-full max-w-[308px] h-[52px] px-3 sm:px-4 md:px-6 py-1 text-xs flex items-center justify-center group bg-[#313942] border-transparent [border-image:linear-gradient(to_right,#08FFFF,#193CC4)_1] rounded-sm hover:bg-[#404040] transition-colors"
            >
              LET'S TALK
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section - Bottom Half */}
      <div className="w-full flex absolute mt-[200px] sm:mt-[200px] md:[150px] lg:[200px] justify-center items-center bg-white p-4 sm:p-6 md:p-8 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <div className="mt-10 sm:mt-0 w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <div className="mt-20 relative w-full h-full flex items-center justify-center">
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

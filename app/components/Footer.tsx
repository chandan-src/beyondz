import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Heebo, IBM_Plex_Mono } from 'next/font/google'
const heebo = Heebo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})


const Footer = () => {
  return (
    <>
      <div className="hidden lg:flex bg-black text-white ">
        <footer className="container mx-auto px-4 sm:px-6 sm:py-20 md:px-8 py-6 sm:py-8 relative overflow-hidden">
          {/* Background "Z" */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/zblack.png"
                alt="Z"
                width={300}
                height={400}

              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col mt-10">
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row justify-between">
              {/* Logo */}
              <div className="rounded-lg p-3 sm:p-5 mt-6 sm:mt-10">
                <div className="flex flex-col">
                  <Image src="/images/beyondzfoot.png" alt="Logo" width={200} height={100} />
                </div>
              </div>

              {/* Right Navigation */}
              <div className={`flex flex-col space-y-6 mt-6 sm:mt-32 sm:mr-4 md:mr-60  ${heebo.className}`}>
                {/* Services */}
                <div>
                  <h3 className="font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text min-h-[60px] flex items-center text-[20px] font-medium">Services</h3>
                  <ul className="space-y-2 text-xs sm:text-sm font-light">
                    <li className="text-cyan-400 font-bold">About Us</li>
                    <li>Our Services</li>
                    <li>Case Studies</li>
                    <li>Blog/Feed/News</li>
                    <li>Contact Us</li>
                  </ul>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-blue-400 text-base sm:text-lg mb-3 sm:mb-4 font-medium font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text  flex items-center">Social Media</h3>
                  <ul className="space-y-2 text-xs sm:text-sm font-light">
                    <li className="flex items-center">
                      LinkedIn
                      <ArrowUpRight size={12} className="ml-2" />
                    </li>
                    <li className="flex items-center">
                      Instagram
                      <ArrowUpRight size={12} className="ml-2" />
                    </li>
                    <li className="flex items-center">
                      Twitter
                      <ArrowUpRight size={12} className="ml-2" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 sm:mt-24 md:mt-32">
              {/* Divider */}
              <div className="border-t border-gray-800 my-4 sm:my-6"></div>

              {/* Footer Bottom */}
              <div className="text-center sm:text-right">
                <p className="text-xs text-gray-500">EMAIL US ON:</p>
                <p className="text-white text-sm sm:text-base">info@beyondz.ai</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="grid grid-cols-2 lg:hidden bg-black text-white">
        <div className="h-90 flex items-center justify-center">
          <Image src="/images/zgroup.png" alt="Logo" width={100} height={100} className="mt-10 object-contain" />
        </div>
        <div className="h-100 flex items-center justify-center">
          <span>Red</span>
        </div>
        <div className="h-90 my-20 flex items-center justify-center">
          <div>
            <h3 className="text-blue-400 text-base sm:text-lg mb-3 sm:mb-4 font-medium font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text  flex items-center">Social Media</h3>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li className="flex items-center">
                LinkedIn
                <ArrowUpRight size={12} className="ml-2" />
              </li>
              <li className="flex items-center">
                Instagram
                <ArrowUpRight size={12} className="ml-2" />
              </li>
              <li className="flex items-center">
                Twitter
                <ArrowUpRight size={12} className="ml-2" />
              </li>
            </ul>
          </div>
        </div>
        <div className="h-40 flex items-center justify-center">
          <span>Yellow</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

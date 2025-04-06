import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twoinone from '../components/Twoinone';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="w-full max-w-5xl bg-[#141620] rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 pt-8">
          <h2 className="text-[#3b82f6] text-sm font-medium flex items-center gap-2">
            <span>/</span> Case Studies
          </h2>
        </div>

        {/* Content Container */}
        <div className="px-6 pb-8">
          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Image and Title */}
            <div className="md:w-3/5 relative">
              <div className="rounded-lg overflow-hidden relative">
                <img 
                  src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                  alt="Portfolio Management" 
                  className="w-full h-[250px] object-cover brightness-[0.6]"
                />
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
                  }} 
                />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-[#3b82f6] font-bold text-xl mb-1">Portfolio Management in</h3>
                  <h3 className="text-[#3b82f6] font-bold text-xl">Investment Banking:</h3>
                </div>
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-1">
                  <ArrowRight size={16} className="text-black" />
                </div>
              </div>
            </div>

            {/* Right Side - Description and Tags */}
            <div className="md:w-2/5">
              <h4 className="text-[#3b82f6] font-medium mb-3">Explore More Case Studies</h4>
              <p className="text-gray-400 text-sm mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna nibh, fringilla eget varius sit amet, rhoncus vitae nisl.
              </p>

              {/* Tags Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="bg-[#1d203a] px-3 py-1.5 rounded text-xs text-gray-300">
                  FINANCIAL MANAGEMENT
                </div>
                <div className="bg-[#1d203a] px-3 py-1.5 rounded text-xs text-gray-300">
                  TREASURY
                </div>
                <div className="bg-[#1d203a] px-3 py-1.5 rounded text-xs text-gray-300">
                  WEALTH MANAGEMENT
                </div>
                <div className="bg-[#1d203a] px-3 py-1.5 rounded text-xs text-gray-300">
                  CORPORATE
                </div>
                <div className="bg-[#1d203a] px-3 py-1.5 rounded text-xs text-gray-300">
                  INVESTMENT BANKING
                </div>
                <div className="bg-[#1d203a] px-3 py-1.5 rounded text-xs text-gray-300">
                  OPERATIONS
                </div>
                <div className="bg-[#1d203a] px-3 py-1.5 rounded text-xs text-gray-300">
                  DIGITAL TRANSFORMATION
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 border-t border-gray-800 pt-5">
            <p className="text-gray-500 text-xs flex items-center gap-2">
              YOU MAY NEED <span className="inline-block bg-[#1d203a] text-gray-400 rounded px-2 py-1 text-[10px]">SIGN IN</span>
            </p>
          </div>
        </div>
      </div>
    </div>

                <Twoinone />
                <Footer />
        </main>
    );
};

export default AboutPage; 
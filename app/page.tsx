'use client'

import Header from './components/Header'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { ArrowRight } from 'lucide-react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="relative">
      <Header />

      {/* Hero Section */}
      <div className="min-h-screen bg-black text-white relative overflow-hidden px-8">
        {/* Background Z */}
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="relative w-[60vh] h-[60vh] mt-16">
            <Image
              src="/images/zblack.png"
              alt="Z"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto pt-32 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)]">
            {/* AI Solutions Text */}
            <div className="text-center mb-48">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 text-2xl mb-2 font-bold">
                Customized AI Solutions
              </h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 text-xl">
                For Every Business
              </h3>
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-12 w-full flex justify-between items-center">
              <h1 className={`text-4xl tracking-[0.2em] font-light ${montserrat.className}`}>
                TAILORED.TRANSFORMATIVE
              </h1>
              <span className="text-sm text-cyan-500">01/05</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen bg-[#f5f5f5] relative px-8 py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-gray-500 text-lg tracking-wider">/ ABOUT</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  In the history of business & commerce, there has been no game-changer like Artificial Intelligence. Most earlier transformative technologies like electricity, industrial machines and computers, needed capital investments that could not be afforded by many. But AI can be a leveler. It can tip the scales in favor of the ones who decide to embrace it. We enable this revolution by making AI accessible and inclusive.
                </p>
                <p className="text-lg leading-relaxed">
                  We let each business decide the extent to which they want to know, engage with or use AI. From consulting, to training, to targeted AI implementations to comprehensive AI first digital transformation, we offer bespoke solutions that allow everyone to be a part of the AI revolution.
                </p>
                <button className="border border-gray-300 px-6 py-3 text-sm inline-flex items-center hover:bg-gray-100 transition-colors">
                  MORE ABOUT US <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[600px] w-full">
              <Image
                src="/images/3d.png"
                alt="Beyond Z 3D"
                fill
                style={{ objectFit: 'contain' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


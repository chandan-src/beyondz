import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twoinone from '../components/Twoinone';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';


type CardData = {
    id: string;
    image: string;
    title: string;
    description: string;
  };
  
  const cards: CardData[] = [
    {
      id: "C102",
      image: "https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=",
      title: "Data Warehousing",
      description: "Following the insights from ReadinessReview AI, our Data Warehousing & AI Factory Consulting service provides expert guidance on centralizing and structuring your data in a centralized repository.",
    },
    {
      id: "C103",
      image: "https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=",
      title: "Cloud Migration",
      description: "Our Cloud Migration services help organizations seamlessly transition their data and applications to cloud platforms with minimal disruption to business operations.",
    },
    {
      id: "C104",
      image: "https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=",
      title: "AI Implementation",
      description: "Leverage our expertise to implement AI solutions tailored to your business needs, enabling data-driven decision making and operational efficiency.",
    },
  ];

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="min-h-screen bg-black text-white flex flex-col">
       
                <div className="relative w-full h-screen  ">
                    {/* Main Image - Right side of the header */}
                    <div className="absolute top-0 right-0 p-10 overflow-hidden ">
                        <Image
                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                            alt="Hand touching technology"
                            width={600}
                            height={200}
                            className=" object-cover"
                        />
                    </div>

                    {/* Title - Left align */}
                    <div className="absolute bottom-10 left-8">
                        <h1 className="slashed-heading text-5xl font-bold">Consult US</h1>
                    </div>

                    {/* Footer Button - Bottom Right */}
                    <div className="absolute bottom-2 right-2 p-10">
                        <button className="bg-blue-500 text-white px-4 py-1 text-xs rounded">
                            FOLLOW
                        </button>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-blue-500"></div>
            </div>
            <div className="min-h-screen bg-black text-white flex flex-col p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">© 1/31</span>
        <h1 className="text-blue-500 text-xl font-medium">ReadinessReview.AI</h1>
      </div>

      {/* Logo section */}
     

      {/* Main content */}
      <div className="mt-6">
        <h2 className="text-blue-500 text-sm font-medium mb-2">Your Essential First Step Towards AI Adoption</h2>
        
        <p className="text-xs text-gray-300 leading-tight mb-8">
          Many companies struggle with understanding where they stand and how to begin their AI journey. 
          ReadinessReview.AI is a critical consulting service that offers immediate clarity and actionable insights 
          for businesses looking to harness the power of AI. Instead of wasting months or years implementing misaligned 
          investment and adoption roadmaps, we're helping you to make informed decisions about your AI strategy.
        </p>

        {/* What You'll Get Section */}
        <div className="mb-6">
          <h3 className="text-xs text-gray-400 mb-3">What You'll Get:</h3>
          
          {/* Business Understanding Card */}
          <div className="mb-3 border border-gray-700 rounded-md overflow-hidden">
            <div className="flex items-center bg-gray-900 p-3">
              <span className="text-xs text-gray-400 mr-2"># 01</span>
              <h4 className="text-sm font-medium flex-1">Business Understanding:</h4>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
            <div className="bg-gray-800 p-3">
              <p className="text-xs text-gray-300">
                We dive deep into your business to explore AI opportunities specific to your industry.
              </p>
            </div>
          </div>
          
          {/* Current State Analysis Card */}
          <div className="mb-3 border border-gray-700 rounded-md overflow-hidden">
            <div className="flex items-center bg-gray-900 p-3">
              <span className="text-xs text-gray-400 mr-2"># 02</span>
              <h4 className="text-sm font-medium flex-1">Current State Analysis:</h4>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          
          {/* Tailored Roadmap Card */}
          <div className="mb-6 border border-gray-700 rounded-md overflow-hidden">
            <div className="flex items-center bg-gray-900 p-3">
              <span className="text-xs text-gray-400 mr-2"># 03</span>
              <h4 className="text-sm font-medium flex-1">Tailored Roadmap:</h4>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-6">
          <h3 className="text-xs text-gray-300 mb-4">Why Choose ReadinessReview.AI:</h3>
          
          <div className="grid grid-cols-3 gap-3">
            {/* Card 1 */}
            <div className="bg-gray-900 border border-gray-700 rounded-md p-4">
              <span className="text-xs text-gray-400 block mb-2"># 01</span>
              <p className="text-xs text-gray-300">
                Gain immediate clarity on your AI readiness and opportunities.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-900 border border-gray-700 rounded-md p-4">
              <span className="text-xs text-gray-400 block mb-2"># 02</span>
              <p className="text-xs text-gray-300">
                Make informed, strategic decisions with a comprehensive assessment.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-900 border border-gray-700 rounded-md p-4">
              <span className="text-xs text-gray-400 block mb-2"># 03</span>
              <p className="text-xs text-gray-300">
                Priced affordably at <span className="text-white font-medium">$2,999</span> for a quick yet thorough review.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8">
          <p className="text-xs text-gray-300">
            This essential service is your first step in leveraging AI to transform your business.
          </p>
        </div>
      </div>
    </div>


    <div className="flex flex-col gap-8 py-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative w-full max-w-4xl mx-auto bg-black"
        >
          <div className="flex flex-col">
            {/* ID in top left */}
            <span className="absolute top-2 left-2 text-gray-400 text-xs font-light">
              {card.id}
            </span>

            {/* Title in blue */}
            <h3 className="text-[#1E90FF] text-xl font-bold mb-2 pl-2">
              {card.title}
            </h3>
            
            {/* Image - Full width */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Description - Dark background with centered text */}
            <div className="bg-black px-4 py-4">
              <p className="text-gray-300 text-sm leading-relaxed text-center max-w-3xl mx-auto">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>


                <Twoinone />
                <Footer />
        </main>
    );
};

export default AboutPage; 
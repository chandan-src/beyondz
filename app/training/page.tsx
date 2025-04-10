import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twoinone from '../components/Twoinone';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';


type CardData = {
    id: string;
    image: string;
    title: string;
    description: string;
  };
  
  const cards: CardData[] = [
    {
      id: "T101",
      image: "https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=",
      title: "/ Employee AI Orientation",
      description: "Beyond Z offers an Employee AI Orientation training program designed to demystify AI for employees and foster a positive mindset towards its adoption.",
    },
    {
      id: "T102",
      image: "https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=",
      title: "/ AI Implementation Strategies",
      description: "Learn effective strategies for implementing AI solutions across different departments to maximize efficiency and innovation.",
    },
    {
      id: "T103",
      image: "https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=",
      title: "/ AI Ethics and Governance",
      description: "Explore the critical aspects of AI ethics and governance frameworks that ensure responsible use of AI technologies in business.",
    },
    {
      id: "T104",
      image: "https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=",
      title: "/ Future of AI in Business",
      description: "Discover emerging AI trends and how they will shape the future of business operations, customer experiences, and market competition.",
    },
  ];


const AboutPage = () => {
    return (
        <main className="min-h-screen bg-black text-white">
      
            <div className="min-h-screen bg-black text-white flex flex-col">
                {/* Hero Section with Image and Title */}
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
                        <h1 className="slashed-heading text-5xl font-bold">/ Training</h1>
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


            <div className="flex flex-col gap-8 py-20 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative w-full max-w-4xl mx-auto rounded-3xl bg-[#1A1F2C] p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row justify-between">
            <span className="absolute top-6 left-8 text-gray-400 text-sm font-light">
              {card.id}
            </span>

            <div className="flex mt-8 md:mt-4 w-full md:w-auto">
              {/* Left part - Image */}
              <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden">
                <img
                  src={card.image}
                  alt="AI Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right part - Content */}
            <div className="mt-4 md:mt-0 md:max-w-[calc(100%-300px)] flex-1 md:pl-8">
              <h3 className="text-[#1EAEDB] text-xl font-medium">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                {card.description}
              </p>

              <div className="absolute bottom-6 right-8">
                <button className="text-gray-400 hover:text-white flex items-center gap-1 text-xs">
                  NEXT <ChevronRight size={14} />
                </button>
              </div>
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
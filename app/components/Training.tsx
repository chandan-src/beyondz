import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heebo } from 'next/font/google'
import Image from "next/image"
import "../globals.css";
import gsap from 'gsap';

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const Training = () => {
  const paragraphRef = useRef<HTMLDivElement | null>(null);

  const paragraph = `The impact of AI stretches far beyond the people who will be working on it and using it actively.
For an inclusive world it is imperative that every person in every workplace is given some level of AI training.
But for each audience, the content might need to be tailored based on their context.
We offer a range of training services that help everyone, from business leaders, to lower-level employees be a part of the global AI revolution.`;

  const words = paragraph.split(' ');

  useEffect(() => {
    if (paragraphRef.current) {
      const words = paragraphRef.current.querySelectorAll('.word');
      gsap.fromTo(words, {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/images/neurology.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 min-h-screen flex flex-col">
        {/* Main content section */}
        <div className="flex flex-col items-center justify-between flex-1">
          {/* Centered heading */}
          <motion.div
            className="flex items-center justify-end md:justify-center mb-16 text-4xl w-full text-right md:text-center pr-8 md:pr-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-heading font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text min-h-[60px] flex items-center">/ Training</h1>
          </motion.div>
          {/* Content section */}
          <motion.div
            className="w-full flex justify-end items-end flex-col mt-12 sm:mt-16 md:mt-24 lg:mt-32 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >


            <div ref={paragraphRef} className="text-para mt-20 w-[80%] mx-auto md:mx-0 md:w-[80%] bg-clip-text text-transparent bg-gradient-to-r from-[#808285] to-[#F5F5F5] font-bold mb-20">
              {words.map((word: string, index: number) => (
                <span key={index} className="word inline-block">{word}&nbsp;</span>
              ))}
            </div>

            <motion.div
              className="mt-6 sm:mt-8 flex justify-end w-full pr-8 md:pr-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Link href="/consult"
                className="uppercase text-center lg:text-start lg:mt-0 mt-8 border-2 mb-20 text-[#08FFFF] px-10 py-6 w-[392px] h-[52px] flex items-center gap-2 text-sm bg-[#1A1F25] rounded-xl border-transparent [border-image:linear-gradient(to_right,#193CC4,#08FFFF)_1]"
              >
                EXPLORE our consulting services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer section */}
        <motion.div
          className="bg-[#161719] w-[90%] md:w-[70%] rounded-xl mx-auto mt-16 sm:mt-20 md:mt-24 flex flex-col lg:flex-row  gap-10  p-8 sm:p-10 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >

          <Image
            src="/images/getai.png"
            alt="GETAI Foundation"
            width={130}
            height={100}
            className="object-contain"
            priority
          />


          <motion.div
            className={`md:ml-10 text-base sm:text-lg md:text-xl md:text-left  ${heebo.className} text-transparent bg-gradient-to-r from-[#808285] to-[#F5F5F5] bg-clip-text`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Our passion for educating communities around the world in order to make AI
            and its benefits inclusive, goes well beyond our commercial interests. If you
            are a non-profit, passionate about demystifying AI and making AI accessible
            to your community, reach out to us, and we will work with our strategic
            partners <span className="text-teal-400 font-medium">GETAI Foundation</span> to impart high-quality AI education free of cost.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Training;
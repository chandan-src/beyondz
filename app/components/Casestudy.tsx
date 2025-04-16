import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link';
import Image from "next/image";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
})


const CaseStudyCard = ({ title, subtitle, imageSrc, caseNumber, index }: { title: string, subtitle: string, imageSrc: string, caseNumber: string, index: number }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="case-study-card relative rounded overflow-hidden h-[250px] group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00a2ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <div className="absolute top-3 left-3 bg-black/70 rounded z-10 text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text flex flex-row justify-between w-full">
        <motion.div
          className="flex flex-col items-start justify-start rounded-lg bg-black/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-[18px]  font-bold text-transparent bg-gradient-to-r from-[#08FFFF] to-[#193CC4] bg-clip-text px-1">{title}</h1>
          <h1 className="text-[14px] font-bold text-transparent bg-gradient-to-r from-[#08FFFF] to-[#193CC4] bg-clip-text px-1 mt-1">{subtitle}</h1>
        </motion.div>
        <Image src="/images/zgroup.png" className="absolute ml-80" alt="Beyond Z" width={40} height={5} />
      </div>

      <div className="h-full w-full">
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-sm font-bold highlight-text mb-1">{title}</h3>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
      <motion.div
        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="text-xs text-[#00a2ff] px-2 py-1 rounded border border-[#00a2ff] hover:bg-[#00a2ff]/10 transition-colors">
          View
        </button>
      </motion.div>
    </motion.div>
  );
};

const Index = () => {
  // Case study data
  const caseStudies = [
    {
      id: 1,
      title: "Knowledge Base Management",
      subtitle: "in Retail Banking",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caseNumber: "CASE STUDY 01"
    },
    {
      id: 2,
      title: "Portfolio Management",
      subtitle: "in Investment Banking",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caseNumber: "CASE STUDY 02"
    },
    {
      id: 3,
      title: "Knowledge Base Management",
      subtitle: "in Retail Banking",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caseNumber: "CASE STUDY 03"
    },
    {
      id: 4,
      title: "Customer Profiling",
      subtitle: "in Asset Management",
      imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      caseNumber: "CASE STUDY 04"
    },
    {
      id: 5,
      title: "AI Chatbots",
      subtitle: "in Insurance",
      imageSrc: "https://images.unsplash.com/photo-1547190027-9156686aa2f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caseNumber: "CASE STUDY 05"
    },
    {
      id: 6,
      title: "Credit Risk Prediction",
      subtitle: "in Risk Management",
      imageSrc: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caseNumber: "CASE STUDY 06"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1F25] text-white">
      {/* Case Studies Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Centered Title */}
          <motion.div
            className="flex items-center  justify-end md:justify-center mb-16 text-4xl w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-heading mr-6 font-bold text-transparent bg-gradient-to-r from-[#193CC4] to-[#08FFFF] bg-clip-text min-h-[60px] flex items-center justify-center">/ Case Studies</h1>
          </motion.div>

          {/* Right-aligned Content */}
          <motion.div
            className="max-w-3xl ml-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className={`text-gray-400 mb-6 text-sm leading-relaxed ${ibmPlexMono.className}`}>
              Our curated case studies showcase how AI can be transformational across industries and
              contexts. Browse through them, and if any use case resonates with your business, feel free to
              reach out—we'd be happy to offer more insights.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Even if none of the case studies seem directly relevant, don't hesitate to contact us. We may
              be able to craft a customized solution to help you disrupt your industry.
            </p>
          </motion.div>
        </motion.div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              subtitle={study.subtitle}
              imageSrc={study.imageSrc}
              caseNumber={study.caseNumber}
              index={index}
            />
          ))}
        </div>

        {/* Explore Button */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(8, 255, 255, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mt-8 mb-20"
          >
            <Link 
              href="/casestudy" 
              className="uppercase border-2 text-[#08FFFF] px-10 py-6 w-[350px] h-[52px] flex items-center gap-2 text-sm bg-[#1A1F25] rounded-xl border-transparent [border-image:linear-gradient(to_right,#193CC4,#08FFFF)_1] relative overflow-hidden group"
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 relative z-10"
              >
                EXPLORE OUR CASE STUDIES
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <ArrowRight size={16} className="ml-1" />
                </motion.div>
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#193CC4]/20 to-[#08FFFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;

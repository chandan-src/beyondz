import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CaseStudyCard = ({ title, subtitle, imageSrc, caseNumber }: { title: string, subtitle: string, imageSrc: string, caseNumber: string }) => {
  return (
    <div className="case-study-card relative rounded overflow-hidden h-[250px] group">
      <div className="absolute top-3 left-3 text-xs text-gray-400">{caseNumber}</div>
      <div className="z-logo absolute top-3 right-3 text-[#00a2ff] font-bold">Z</div>
      <div className="h-full w-full">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-sm font-bold highlight-text mb-1">{title}</h3>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="text-xs text-[#00a2ff] px-2 py-1 rounded border border-[#00a2ff]">
          View
        </button>
      </div>
    </div>
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
      imageSrc: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b8c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
    <div className="min-h-screen bg-[#0d121e] text-white">
      {/* Case Studies Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          {/* Centered Title */}
          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#003366] to-[#00a2ff] bg-clip-text text-transparent">
              Case Studies
            </h2>
          </div>

          {/* Right-aligned Content */}
          <div className="max-w-3xl ml-auto">
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Our curated case studies showcase how AI can be transformational across industries and
              contexts. Browse through them, and if any use case resonates with your business, feel free to
              reach out—we'd be happy to offer more insights.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Even if none of the case studies seem directly relevant, don't hesitate to contact us. We may
              be able to craft a customized solution to help you disrupt your industry.
            </p>
          </div>
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              subtitle={study.subtitle}
              imageSrc={study.imageSrc}
              caseNumber={study.caseNumber}
            />
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-end">
          <Link href="/casestudy" className="explore-btn text-[#00a2ff] px-5 py-2 rounded flex items-center space-x-2 text-sm">
            <span>EXPLORE OUR CASE STUDIES</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

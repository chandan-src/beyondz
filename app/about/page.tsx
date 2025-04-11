"use client";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { ArrowDown, ArrowRight, Eye, Target } from "lucide-react"; // You can swap with custom SVGs or images
import { scroll } from "motion";
import ScrambledText from "@/components/Scrambled";
import { cn } from "@/lib/utils";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const itemVariants = {
  hidden: { filter: "blur(10px)", y: 40, opacity: 0 },
  visible: {
    filter: "blur(0px)",
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const AboutPage = () => {
  const cards = [
    {
      id: "01",
      label: "CVS",
      title: "AI/ML Expertise:",
      description:
        "Led by Mia and her highly skilled team, our cutting-edge AI/ML capabilities form the core of our innovative solutions.",
    },
    {
      id: "02",
      label: "CVS",
      title: "Incubation:",
      description:
        "From concept to execution, we excel in nurturing innovative ideas and transforming them into successful ventures.",
    },
    {
      id: "03",
      label: "CVS",
      title: "Business Analytics Expertise:",
      description:
        "Leveraging our partnership with Limner Consulting, we deliver robust business analytics and BI solutions.",
    },
    {
      id: "04",
      label: "CVS",
      title: "Project Management:",
      description:
        "With a focus on clarity and execution, we excel in managing projects from idea to completion, ensuring maximum business value.",
    },
    {
      id: "05",
      label: "CVS",
      title: "Scalability:",
      description:
        "We design solutions with long-term sustainability and scalability in mind, ready to grow with your business.",
    },
    {
      id: "06",
      label: "CVS",
      title: "Global Exposure:",
      description:
        "Our team's diverse international experience equips us to operate seamlessly in multicultural environments and across time zones.",
    },
    {
      id: "07",
      label: "CVS",
      title: "Creative Design & Branding",
      description:
        "Our products are not only super-competent under the hood but also visually appealing, ensuring they align with brand management best practices and deliver an exceptional user experience.",
    },
    {
      id: "08",
      label: "CVS",
      title: "Training & Development:",
      description:
        "We place a strong emphasis on human development through comprehensive training programs led by our HR experts.",
    },
  ];

  // const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(100px)"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.5]);

  return (
    <div className=" bg-black space-y-48">
      <div className="flex w-full justify-center items-end">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <motion.div
          initial={{
            filter: "blur(10px)",
            y: 40,
            opacity: 0,
          }}
          animate={{
            filter: `blur(0px)`,
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className=" w-1/2 pl-6 pb-12"
          style={{
            filter: blur,
            opacity,
            scale,
          }}
        >
          <ScrambledText className="text-8xl whitespace-nowrap  text-white font-semibold">
            / ABOUT US
          </ScrambledText>
        </motion.div>
        <div className="w-1/2 z-[88]">
          <motion.div
            initial={{
              filter: "blur(10px)",
              y: 40,
              opacity: 0,
            }}
            animate={{
              filter: `blur(0px)`,
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            style={{
              filter: blur,
              opacity,
              // scale,
            }}
          >
            <Image
              src={"/about.png"}
              className="w-full"
              alt=""
              width={600}
              height={600}
            ></Image>
          </motion.div>
        </div>
        <div className="absolute z-[99] right-16">
          <div className="flex items-center ">
            <button
              onClick={() => {
                document.querySelector(".visionmission")?.scrollIntoView();
              }}
              className="bg-[#193CC4] py-3 px-6 text-white  rounded-lg  font-thin"
            >
              <span className="mr-12">/</span> EXPLORE
            </button>
            <button
              onClick={() => {
                document.querySelector(".visionmission")?.scrollIntoView();
              }}
              className="bg-[#193CC4] rounded-lg ml-2 p-3 text-white"
            >
              <ArrowDown strokeWidth={1.2}></ArrowDown>
            </button>
          </div>
        </div>
      </div>
      <VisionMission />
      <CoreValues />
      <Team />
      <Partners />
      <div className="grid grid-cols-4 px-32 gap-8">
        {cards.map((c, i) => {
          return <AnimatedCard i={i} key={c.id} data={c} />;
        })}
      </div>
      <AIBanner />
      <div className="min-h-screen"></div>
    </div>
  );
};

export default AboutPage;

const VisionMission = () => {
  return (
    <div className="bg-black text-white px-6 md:px-36  space-y-36 py-32 visionmission relative">
      <section className="flex min-h-[40vh] gap-16 justify-between sticky top-32 bg-black">
        <motion.h2
          initial={{
            filter: "blur(10px)",
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            filter: `blur(0px)`,
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="text-cyan-400  font-semibold mb-6 text-5xl w-96 whitespace-nowrap"
        >
          / <ScrambledText>Vision</ScrambledText>
        </motion.h2>
        <div className="flex items-start gap-6 flex-col w-full">
          <motion.div
            initial={{
              filter: "blur(10px)",
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              filter: `blur(0px)`,
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="bg-white/50  h-[2px] w-full"
          />
          <div className="flex gap-6 w-full items-start">
            <motion.div
              initial={{
                filter: "blur(10px)",
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                filter: `blur(0px)`,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="bg-[#1A1B1F] p-6 rounded-xl flex justify-center items-center aspect-square min-w-40"
            >
              <img className="scale-150" src="/eye.svg" alt="" />
              {/* <Eye size={80} className="w-20 text-blue-500" strokeWidth={1.5} /> */}
            </motion.div>
            <motion.p
              initial={{
                filter: "blur(10px)",
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                filter: `blur(0px)`,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="text-gray-300 leading-relaxed "
            >
              <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-white/60 text-xl">
                " To empower businesses worldwide by harnessing the
                transformative power of AI, fostering inclusivity and equitable
                growth for companies of all sizes. "
              </span>
            </motion.p>
          </div>
        </div>
      </section>
      <div className="relativeValueItemWithDividers">
        <section className="flex min-h-[40vh] gap-16 justify-between sticky top-64 bg-black ">
          <motion.h2
            initial={{
              filter: "blur(10px)",
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              filter: `blur(0px)`,
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="text-cyan-400  font-semibold mb-6 text-5xl w-96 whitespace-nowrap"
          >
            / <ScrambledText>Mission</ScrambledText>
          </motion.h2>
          <div className="flex items-start gap-6 flex-col w-full">
            <motion.div
              initial={{
                filter: "blur(10px)",
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                filter: `blur(0px)`,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="bg-white/50  h-[2px] w-full"
            />
            <div className="flex gap-6 w-full items-start">
              <motion.div
                initial={{
                  filter: "blur(10px)",
                  y: 40,
                  opacity: 0,
                }}
                whileInView={{
                  filter: `blur(0px)`,
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
                className="bg-[#1A1B1F] p-6 rounded-xl flex justify-center items-center aspect-square min-w-40"
              >
                <img className="scale-110" src="/target.svg" alt="" />
                {/* <Eye size={80} className="w-20 text-blue-500" strokeWidth={1.5} /> */}
              </motion.div>
              <motion.p
                initial={{
                  filter: "blur(10px)",
                  y: 40,
                  opacity: 0,
                }}
                whileInView={{
                  filter: `blur(0px)`,
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="text-gray-300 leading-relaxed "
              >
                <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-white/60 text-xl">
                  " To provide comprehensive and flexible AI solutions that
                  empower companies of all sizes to leverage AI effectively,
                  offering tailored engagement models from elementary AI
                  implementation to full-scale AI transformation, ensuring
                  readiness, efficiency, productivity and sustained growth,
                  while empowering individuals and organizations through
                  dedicated training and consulting services. " 
                </span>
              </motion.p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

function CoreValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }, // Stagger children
  };

  return (
    <div className="relative">
      <motion.h2
        className="text-cyan-400  font-semibold mb-6 text-5xl  whitespace-nowrap text-center w-full"
        variants={itemVariants}
        transition={{ delay: 0.4 }} // Add delay
      >
        <ScrambledText> / Our Core Values</ScrambledText>
      </motion.h2>
      <motion.div
        className="bg-black text-white  flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto md:px-24 grid grid-cols-1 md:grid-cols-2 gap-2">
          <Image
            src={"/values.png"}
            alt="values"
            width={600}
            className="sticky top-32"
            height={600}
          ></Image>
          {/* Right Side: Core Values */}
          <motion.div variants={itemVariants}>
            <div className="">
              <ValueItem
                number="01"
                title="Flexibility"
                description="Offering adaptable AI solutions tailored to different needs and engagement levels."
                delay={0.5} // Add delay
              />
              <ValueItem
                number="02"
                title="Equity"
                description="Ensuring fair access to AI advancements for all, regardless of size or scale."
                delay={0.6} // Add delay
              />
              <ValueItem
                number="03"
                title="Inclusivity"
                description="Bringing everyone along in the AI Journey, ensuring no one is left behind."
                delay={0.7} // Add delay
              />
              <ValueItem
                number="04"
                title="Innovation"
                description="Pushing the boundaries of technology to deliver cutting-edge solutions."
                delay={0.8} // Add delay
              />
              <ValueItem
                number="05"
                title="Empowerment"
                description="Focusing on upskilling and human development alongside corporate growth."
                delay={0.9} // Add delay
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function ValueItem({
  number,
  title,
  description,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) {
  const itemVariants = {
    hidden: { filter: "blur(10px)", y: 40, opacity: 0 },
    visible: {
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  };

  return (
    <motion.div
      style={{
        top: (parseInt(number) - 0.8) * 20 + "%",
      }}
      initial={{
        filter: "blur(20px)",
        y: 40,
        opacity: 0,
      }}
      whileInView={{
        filter: `blur(0px)`,
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
      className="border-t border-white/600 border-dashed py-6 sticky min-h-screen bg-black"
      variants={itemVariants}
    >
      <div className="flex items-start gap-6 h-full">
        <motion.span
          className="text-sm text-gray-400 mr-4 font-mono"
          variants={itemVariants}
          transition={{ delay: delay + 0.1 }} // Add delay
        >
          /{number}
        </motion.span>
        <div>
          <motion.h3
            className="text-lg font-semibold"
            variants={itemVariants}
            transition={{ delay: delay + 0.2 }} // Add delay
          >
            <ScrambledText>{title}</ScrambledText>
          </motion.h3>
          <motion.p
            className="text-gray-300 font-mono"
            variants={itemVariants}
            transition={{ delay: delay + 0.3 }} // Add delay
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

function Team() {
  const teamMembersArray = [
    {
      name: "Mia Sarojini Kynadi",
      description:
        "Mia brings in our AI and Data Science expertise, equipped with education from Stanford, MIT and Harvard over the years, and prior telecommunications & software development experience from the likes of Qualcomm and Cognizant.",
    },
    {
      name: "Vinay James Kynadi",
      description:
        "Vinay has been founding, incubating and investing in different ventures, across diverse geographies and industries, for more than 20 years. He is our strategist and the one who focuses on integrating innovation into everything we do.",
    },
    {
      name: "Gopakumar",
      description:
        "Gopakumar leads Limner Consulting, our trusted partner for data analysis and BI services. With over 30 years of experience as a Chartered Accountant and deep expertise in Finance, SAP and Power BI, he sits at the intersection of finance and data, translating numbers into insights that matter. Under his leadership, Limner works with clients around the world, helping them make smarter, faster decisions.",
    },
    {
      name: "Tina Joseph",
      description:
        "Tina leads and manages all our operations across the different ventures we build. With extensive experience in supporting the incubation and scaling of different startups at Venture Way, her understanding of the startup ecosystem and the building of startups bolsters every venture we work on.",
    },
    {
      name: "Archita",
      description:
        "Archita is the unseen hand that keeps every venture going, ensuring that every task is completed in time by everyone involved. Her project management and multi-tasking capabilities ensure seamless coordination between different ventures with an unwavering focus on the founders' best interests.",
    },
    {
      name: "Jason Heath",
      description:
        "Mia brings in our AI and Data Science expertise, equipped with education from Stanford, MIT and Harvard over the years, and prior telecommunications & software development experience from the likes of Qualcomm and Cognizant.",
    },
    {
      name: "Nirvaan Subil",
      description:
        "Mia brings in our AI and Data Science expertise, equipped with education from Stanford, MIT and Harvard over the years, and prior telecommunications & software development experience from the likes of Qualcomm and Cognizant.",
    },
    {
      name: "Ruth Rosemary George",
      description:
        "Mia brings in our AI and Data Science expertise, equipped with education from Stanford, MIT and Harvard over the years, and prior telecommunications & software development experience from the likes of Qualcomm and Cognizant.",
    },
  ];
  return (
    <div className="text-white md:px-24 space-y-32">
      <div>
        <motion.h2
          className="text-cyan-400  font-semibold mb-6 text-5xl  whitespace-nowrap text-center w-full"
          variants={itemVariants}
          transition={{ delay: 0.4 }} // Add delay
        >
          /<ScrambledText> Team</ScrambledText>
        </motion.h2>
        <div className="flex justify-center items-start">
          <motion.div className="md:w-1/2 text-3xl">
            At Beyond Z, our team is a unique blend of exceptional tech talent
            and diverse subject matter experts.{" "}
          </motion.div>
          <motion.div className="md:w-1/2 font-mono text-xl text-white/80 font-thin">
            While our technology prowess, led by Mia and her highly skilled
            team, forms the core of our offerings, we go beyond by integrating
            expertise in finance, marketing, HR, project management, creative
            design, and branding. This multidisciplinary approach ensures our
            solutions are comprehensive, holistic, and tailored to meet diverse
            business needs, setting us apart in the tech landscape.
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-32">
        {teamMembersArray.map((x, i) => {
          return <TeamMemberCard key={i} x={x} i={i} />;
        })}
      </div>
    </div>
  );
}

function TeamMemberCard({
  x,
  i,
}: {
  x: {
    name: string;
    description: string;
  };
  i: number;
}) {
  return (
    <motion.div
      initial={{
        filter: "blur(10px)",
        y: 40,
        opacity: 0,
      }}
      whileInView={{
        filter: `blur(0px)`,
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.1,
      }}
      className="bg-black rounded-3xl overflow-hidden shadow-lg w-full"
    >
      <div className="relative">
        <motion.img
          src={`/team${i + 1}.png`}
          alt="Mia Sarojini Kynadi"
          className="w-full h-auto object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
      </div>
      <div className="p-6 text-white">
        <motion.h2
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ScrambledText>{x.name}</ScrambledText>
        </motion.h2>
        <motion.p
          className="text-gray-300 text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {x.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

function Partners() {
  const partnerData = [
    {
      number: "VW\\01",
      category: "STARTUP ECOSYSTEM",
      title: "Venture Way",
      subtitle: "Found | Fund | Foster",
      bigLogo: "/w.png",
      smallLogo: "/wlogo.png",
      description:
        "Beyond Z was founded and nurtured within Venture Way, an ecosystem dedicated to founding, funding, and fostering innovative startups.",
      cta: {
        text: "VISIT WEBSITE",
        action: "→", // assuming this is a visual icon or unicode character
      },
      moreText: "MORE+",
      button: {
        base: "border-[#FF9900] text-[#FF9900]",
        hover: "hover:bg-[#FF9900] hover:text-white",
      },
      background: "#E2DEDC",
    },
    {
      number: "VW\\02",
      category: "AI SOLUTIONS",
      title: "Venture Way",
      subtitle: "Found | Fund | Foster",
      bigLogo: "/v.png",
      smallLogo: "/vlogo.png",
      description:
        "Beyond Z was incubated at VentureFactory.AI, a venture studio that co-founds and builds AI ventures in collaboration with domain experts from various industries.",
      cta: {
        text: "VISIT WEBSITE",
        action: "→", // assuming this is a visual icon or unicode character
      },
      moreText: "MORE+",
      button: {
        base: "border-[#728491] text-[#728491]",
        hover: "hover:bg-[#728491] hover:text-white",
      },
      background: "#E4EBF1",
    },
    {
      number: "VW\\02",
      category: "NON PROFIT ORGANIZATION",
      title: "Venture Way",
      subtitle: "Found | Fund | Foster",
      bigLogo: "/G.png",
      smallLogo: "/GLOGO.png",
      description:
        "Beyond Z is the knowledge delivery partner of GETAI Foundation, a non-profit initiative set up to promote ‘Global Empowerment Through Artificial Intelligence’.",
      cta: {
        text: "VISIT WEBSITE",
        action: "→", // assuming this is a visual icon or unicode character
      },
      moreText: "MORE+",
      button: {
        base: "border-[#3B9D88] text-[#3B9D88]",
        hover: "hover:bg-[#3B9D88] hover:text-white",
      },
      background: "#161719",
    },
  ];

  return (
    <div>
      <motion.h2
        className="text-cyan-400  font-semibold mb-6 text-5xl  whitespace-nowrap text-center w-full"
        variants={itemVariants}
        transition={{ delay: 0.4 }} // Add delay
      >
        /<ScrambledText>Our Partners</ScrambledText>
      </motion.h2>
      <div className="space-y-12">
        {partnerData.map((p, i) => {
          return <Partner key={i} data={p} />;
        })}
      </div>
    </div>
  );
}

function Partner({ data }: { data: any }) {
  return (
    <div
      style={{
        background: data.background,
      }}
      className=" min-h-screen flex flex-col justify-center items-center p-8"
    >
      {/* Top Section */}
      <div className="flex justify-between w-full max-w-6xl mb-12">
        <div className="text-sm text-gray-500">{data.number}</div>
        <div className="text-xl text-gray-500 text-center">
          <span className="mr-6">/</span> {data.category}
        </div>
        <div className="w-10"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Side: "W" Image */}
        <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={data.bigLogo} // Replace with your image path
            alt="W with arrow"
            className="w-full"
          />
          <div className="absolute inset-0  opacity-40"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left space-y-6">
          <img src={data.smallLogo} alt="" />
          <p className="text-lg font-semibold text-[#6A6E73] mb-8">
            {data.description}
          </p>
          <div className="flex justify-center md:justify-end">
            <button className="text-[#6A6E73] px-6 py-3 rounded-full text-sm font-semibold">
              MORE
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full flex justify-end">
        <button
          className={`border  px-32 py-4 rounded-md text-sm font-semibold flex justify-center items-center gap-6 transition-all duration-300 ease-in-out  hover:shadow-lg hover:scale-105 ${data.button.base} ${data.button.hover}`}
        >
          VISIT WEBSITE <ArrowRight />
        </button>
      </div>
    </div>
  );
}

const AnimatedCard = ({ data, i }: { data: any; i: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "30%",
        filter: "blur(20px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 0.1 * Math.floor(Math.random() * 5 + 1),
        duration: 0.8,
      }}
    >
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-white p-[1px] rounded-lg  shadow-md relative font-mono gradient group hover:-translate-y-4 duration-200 h-full">
        <div className="group-hover:opacity-0 duration-150 bg-gradient-to-t from-[#1A1F25] to-[#323A43] rounded-lg absolute w-[99%] h-[99%]"></div>
        <div className=" p-6 space-y-28 z-[99999] relative">
          <div>
            {/* <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full"></div> */}
            <div className="text-sm text-gray-400 group-hover:text-[#193cc4]">
              /{data.id} {data.label}
            </div>
          </div>
          <div>
            <h2 className="text-cyan-400 group-hover:text-[#193cc4] text-xl font-bold leading-tight ">
              {data.title}
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-[#193cc4]">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AIBanner = () => {
  return (
    <section className="bg-[#11151b] text-white px-6 py-16 flex flex-col lg:flex-row lg:justify-center items-start lg:items-center gap-10 font-sans">
      {/* Left: Big heading */}
      <div className="text-4xl lg:text-6xl  leading-tight  space-y-2 max-w-4xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-white/50">
        <p>
          <span className="">THE WORLD IS</span>
        </p>
        <p>
          <span className="">RACING AHEAD WITH</span>
        </p>
        <p>
          <span className="">ARTIFICIAL INTELLIGENCE.</span>
        </p>
        <p>DON'T GET LEFT BEHIND.</p>
      </div>

      {/* Right: Description + CTA */}
      <div className="flex flex-col items-start text-sm text-gray-400 space-y-4">
        <p>
          Reach out to us to know more about how AI can empower your business
        </p>
        <button className="border border-gray-500 px-6 py-2 rounded text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          LET’S TALK →
        </button>
      </div>
    </section>
  );
};

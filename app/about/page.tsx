import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twoinone from '../components/Twoinone';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
                        <h1 className="slashed-heading text-5xl font-bold">ABOUT US</h1>
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

                <div className='py-36 px-10'>
                    {/* Vision Section */}
                    <div className="mt-8 px-8">
                        <h2 className="slashed-heading text-blue-500 text-xl font-medium mb-4">Vision</h2>

                        <div className="flex gap-6">
                            <div className="w-[120px] h-[120px] bg-[#131313] rounded-lg flex items-center justify-center">
                                <div className="w-12 h-12 relative">
                                    <div className="w-full h-full rounded-full border-2 border-blue-500"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-2 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <p className="text-sm leading-relaxed text-gray-300">
                                    "To empower businesses worldwide by harnessing the transformative power of AI, fostering inclusivity and equitable growth for companies of all sizes."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="mt-10 px-8">
                        <h2 className="slashed-heading text-blue-500 text-xl font-medium mb-4">Mission</h2>

                        <div className="flex gap-6">
                            <div className="w-[120px] h-[120px] bg-[#131313] rounded-lg flex items-center justify-center">
                                <div className="w-16 h-16 relative">
                                    <div className="w-full h-full rounded-full border-2 border-blue-500"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-1 h-6 bg-blue-500 transform -translate-x-[2px] -rotate-45"></div>
                                        <div className="w-2 h-2 bg-blue-500 rounded-full absolute -bottom-1 -right-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <p className="text-sm leading-relaxed text-gray-300">
                                    "To provide comprehensive and flexible AI solutions that empower companies of all sizes to leverage AI effectively, offering tailored engagement models from elementary AI implementation to full-scale AI transformation, ensuring readiness, efficiency, productivity and sustained growth, while responsibly navigating the evolving AI landscape through dedicated training and consulting services."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-black flex flex-col items-start justify-center p-14">
      <div className="text-[#00a0ff] font-sans mb-8  text-center ml-auto mr-auto pb-10">
        <h2 className="text-2xl font-light text-center">/ Our Core Values</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left side - Logo */}
        <div className="w-full md:w-1/4">
          <div className="bg-gray-100 rounded-lg p-8 w-48 h-48 flex items-center justify-center">
            <img 
              src="/images/3d.png" 
              alt="Peacock Feather" 
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        {/* Right side - Core Values */}
        <div className="w-full md:w-3/4 flex flex-col space-y-4">
          {/* Value 1 */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center mb-1">
              <span className="text-[#00a0ff] text-xs mr-2">/ 01</span>
              <h3 className="text-white text-lg font-medium">Flexibility</h3>
            </div>
            <p className="text-gray-400 text-sm ml-6">
              Offering adaptable AI solutions tailored to
              <br />different needs and engagement levels.
            </p>
          </div>

          {/* Value 2 */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center mb-1">
              <span className="text-[#00a0ff] text-xs mr-2">/ 02</span>
              <h3 className="text-white text-lg font-medium">Equity</h3>
            </div>
            <p className="text-gray-400 text-sm ml-6">
              Ensuring fair access to AI advancements for all,
              <br />regardless of size or scale.
            </p>
          </div>

          {/* Value 3 */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center mb-1">
              <span className="text-[#00a0ff] text-xs mr-2">/ 03</span>
              <h3 className="text-white text-lg font-medium">Inclusivity</h3>
            </div>
            <p className="text-gray-400 text-sm ml-6">
              Bringing everyone along in the AI journey,
              <br />ensuring no one is left behind.
            </p>
          </div>

          {/* Value 4 */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center mb-1">
              <span className="text-[#00a0ff] text-xs mr-2">/ 04</span>
              <h3 className="text-white text-lg font-medium">Innovation</h3>
            </div>
            <p className="text-gray-400 text-sm ml-6">
              Pushing the boundaries of technology to deliver
              <br />cutting-edge solutions.
            </p>
          </div>

          {/* Value 5 */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center mb-1">
              <span className="text-[#00a0ff] text-xs mr-2">/ 05</span>
              <h3 className="text-white text-lg font-medium">Empowerment</h3>
            </div>
            <p className="text-gray-400 text-sm ml-6">
              Focusing on upskilling and human development
              <br />alongside corporate growth.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-black text-white">
      {/* Main content wrapper */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="mb-10">
          <div className="text-xs text-zinc-600 mb-2">02</div>
          <h1 className="text-blue-500 text-2xl font-medium">/ Team</h1>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-5">
            <p className="text-white font-light text-lg">
              At Beyond Z, our team is a unique blend of exceptional tech talent and diverse subject matter experts.
            </p>
          </div>
          <div className="col-span-7">
            <p className="text-zinc-400 text-sm leading-relaxed">
              While our technology excuses, set by Mia and technically bridged from AI-back-end by Vinay, it has been the diverse project experience that enables us to expertize in finance, enterprise dev, project development, research, blockchain and HIPAA compliance. The team is specifically tailored to meet diverse business needs, setting us apart in the tech landscape.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Team Member 1 */}
          <div className="mb-8">
            <div className="rounded-md overflow-hidden mb-3 bg-zinc-900">
              <img 
                src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                alt="Mia Sarojini Kynadi" 
                className="w-full h-48 object-cover brightness-90 grayscale" 
              />
            </div>
            <h3 className="text-cyan-400 text-sm font-medium mb-2">Mia Sarojini Kynadi</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Mia brings in her AI and Data Science expertise, equipped with doctorate from Harvard, MIT and beyond that has years, and a phenomenal research and development experience from the likes of Qualcomm and Qualgraph.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="mb-8">
            <div className="rounded-md overflow-hidden mb-3 bg-zinc-900">
              <img 
                src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                alt="Vinay James Kynadi" 
                className="w-full h-48 object-cover brightness-90 grayscale" 
              />
            </div>
            <h3 className="text-cyan-400 text-sm font-medium mb-2">Vinay James Kynadi</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Vinay has been tirelessly modulating and tweaking to different verticals across multiple disciplines and industries. An eternal student of new technologies, he simplifies complex technical integrating innovations into everything we do.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="mb-8">
            <div className="rounded-md overflow-hidden mb-3 bg-zinc-900">
              <img 
                src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                alt="Tina Joseph" 
                className="w-full h-48 object-cover brightness-90 grayscale" 
              />
            </div>
            <h3 className="text-cyan-400 text-sm font-medium mb-2">Tina Joseph</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Tina takes into account all our operations activities, coordinating and executing high level product development. Specializing in healthcare facilities and large scale projects, Tina has the exceptional storyline behind every venture we work on.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="mb-8">
            <div className="rounded-md overflow-hidden mb-3 bg-zinc-900">
              <img 
                src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                alt="Archita" 
                className="w-full h-48 object-cover brightness-90 grayscale" 
              />
            </div>
            <h3 className="text-cyan-400 text-sm font-medium mb-2">Archita</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Archita focuses on the team aspect of the emerging technology that many sad to consider a single dot project, however her project management expertise allows us to position ourselves better for future success and deliver us an unwavering focus on the founders' next interests.
            </p>
          </div>

          {/* Team Member 5 */}
          <div className="mb-8">
            <div className="rounded-md overflow-hidden mb-3 bg-zinc-900">
              <img 
                src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                alt="David Chen" 
                className="w-full h-48 object-cover brightness-90 grayscale" 
              />
            </div>
            <h3 className="text-cyan-400 text-sm font-medium mb-2">David Chen</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              David brings 15 years of blockchain expertise, having pioneered distributed ledger solutions for major financial institutions and contributed to several prominent open-source projects in the cryptocurrency space.
            </p>
          </div>

          {/* Team Member 6 */}
          <div className="mb-8">
            <div className="rounded-md overflow-hidden mb-3 bg-zinc-900">
              <img 
                src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                alt="Sarah Rodriguez" 
                className="w-full h-48 object-cover brightness-90 grayscale" 
              />
            </div>
            <h3 className="text-cyan-400 text-sm font-medium mb-2">Sarah Rodriguez</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Sarah specializes in cybersecurity and compliance, ensuring our technologies exceed industry standards. Her background in both government and private sectors provides crucial insights for secure implementation.
            </p>
          </div>

          {/* Team Member 7 */}
          <div className="mb-8">
            <div className="rounded-md overflow-hidden mb-3 bg-zinc-900">
              <img 
                src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                alt="Michael Okonjo" 
                className="w-full h-48 object-cover brightness-90 grayscale" 
              />
            </div>
            <h3 className="text-cyan-400 text-sm font-medium mb-2">Michael Okonjo</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Michael leads our UX research and design, transforming complex technologies into intuitive user experiences. His human-centered approach ensures our solutions remain accessible despite their technical sophistication.
            </p>
          </div>

          {/* Team Member 8 */}
          <div className="mb-8">
            <div className="rounded-md overflow-hidden mb-3 bg-zinc-900">
              <img 
                src="https://media.gettyimages.com/id/155419717/photo/peacock-feather.jpg?s=1024x1024&w=gi&k=20&c=2g-ry_XRqZwdTtFljutguf_ozjWy-xOqQFG7lnxc76M=" 
                alt="Elena Park" 
                className="w-full h-48 object-cover brightness-90 grayscale" 
              />
            </div>
            <h3 className="text-cyan-400 text-sm font-medium mb-2">Elena Park</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Elena's background in cognitive neuroscience informs our approach to AI and human-computer interaction. She bridges the gap between theoretical research and practical applications across our technology stack.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-black flex flex-col items-start p-8">
      {/* Header */}
      <div className="w-full mb-8">
        <div className="text-xs text-gray-500 mb-1">/01.02</div>
        <div className="flex items-center">
          <span className="text-[#00c8ff] font-light text-2xl mr-2">/</span>
          <h1 className="text-[#00c8ff] font-light text-2xl">Our Partners</h1>
        </div>
      </div>

      {/* First Partner Card */}
      <div className="w-full bg-[#e9e7e2] rounded-sm mb-6 p-8">
        <div className="flex flex-col">
          {/* Card Header */}
          <div className="mb-8">
            <div className="text-xs text-gray-500 mb-1">/01.01</div>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">/</span>
              <p className="text-gray-500 uppercase text-sm tracking-wider">Startup Ecosystem</p>
            </div>
          </div>

          {/* Card Content */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Logo */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path 
                      d="M40,160 L100,40 L160,160 z" 
                      fill="none"
                      stroke="#ff6b00"
                      strokeWidth="40"
                    />
                    <path 
                      d="M40,160 L100,40 L160,160 z" 
                      fill="none"
                      stroke="#333"
                      strokeWidth="36"
                      strokeDasharray="1 1"
                      className="opacity-50"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3">
              <h2 className="text-[#ff6b00] text-xl font-medium mb-3">Venture Way</h2>
              <p className="text-gray-700 mb-12">
                Beyond Z was founded and nurtured within Venture Way, an ecosystem dedicated to founding, funding, and fostering innovative startups.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-400">01/03</div>
                <Button variant="outline" className="border-[#ff6b00] text-[#ff6b00] hover:bg-[#ff6b00] hover:text-white rounded-none text-xs px-6 py-1 h-auto">
                  VISIT WEBSITE →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Partner Card */}
      <div className="w-full bg-[#e9eef1] rounded-sm mb-6 p-8">
        <div className="flex flex-col">
          {/* Card Header */}
          <div className="mb-8">
            <div className="text-xs text-gray-500 mb-1">/01.02</div>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">/</span>
              <p className="text-gray-500 uppercase text-sm tracking-wider">AI Solutions</p>
            </div>
          </div>

          {/* Card Content */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Logo/Image */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="bg-gray-300 rounded w-64 h-36 flex items-center justify-center relative">
                <div className="absolute left-4 bottom-4 w-16 h-16 bg-[#ffdf00] rounded-full"></div>
                <div className="absolute left-8 top-8 w-12 h-8 bg-gray-400 rounded"></div>
                <div className="absolute right-8 top-4 w-8 h-8 border-2 border-gray-500 rounded"></div>
                <div className="absolute right-16 bottom-4 w-16 h-8 bg-gray-400 rounded"></div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-700 text-xl font-medium">VentureFactory.AI</h2>
              </div>
              <p className="text-gray-700 mb-12">
                Beyond Z was incubated at VentureFactory.AI, a venture studio that co-creates innovative companies in collaboration with domain experts from various industries.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-400">02/03</div>
                <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-none text-xs px-6 py-1 h-auto">
                  VISIT WEBSITE →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    <div className="flex flex-col min-h-screen bg-black">
      {/* Top Section */}
      <div className="relative w-full min-h-[50vh] px-6 md:px-12 py-12 border-b border-blue-500">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-xs text-gray-500">v1.02</div>
          <div className="text-xs text-gray-500">NON-PROFIT ORGANIZATION</div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center mt-12 px-10">
          {/* Image Card */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden relative">
              <img 
                src="/images/3d.png" 
                alt="Woman in white" 
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full -mr-6 -mb-6"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-[#05f2f2] text-3xl font-medium mb-4">GETAI</h2>
            <p className="text-gray-400 text-sm mb-12">
              Beyond Z is the knowledge delivery partner of GETAI Foundation, a non-profit initiative set up to promote inclusive development through Artificial Intelligence.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-600">01/01</div>
              <Button variant="outline" className="bg-transparent border border-[#05f2f2] text-[#05f2f2] hover:bg-[#05f2f2]/10 rounded-none text-xs px-10">
                VISIT WEBSITE →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative w-full min-h-[50vh] px-6 md:px-12 py-20">
        <div className="flex items-center justify-between mb-12">
          <div className="text-xs text-gray-500">2/08</div>
          <h2 className="text-center text-[#05f2f2] text-2xl font-medium">Core Value Strength</h2>
          <div className="invisible text-xs">2/08</div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-[#121212] rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a3a3] to-[#05f2f2]"></div>
            <div className="text-xs text-gray-500 mb-6">01 / 08</div>
            <h3 className="text-[#05f2f2] mb-4">AI/ML Expertise</h3>
            <p className="text-gray-400 text-sm">
              Use the Beyond Z AI to help maintain the model and data pipelines built by our highly skilled and specialized experts.
            </p>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="bg-[#05f2f2] rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#008080] to-[#05f2f2]"></div>
            <div className="text-xs text-gray-700 mb-6">02 / 08</div>
            <h3 className="text-[#121212] mb-4">Incubation</h3>
            <p className="text-gray-700 text-sm">
              AI ideation to solution in the fastest possible timeframe with maximum impact and minimum risk.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#121212] rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a3a3] to-[#05f2f2]"></div>
            <div className="text-xs text-gray-500 mb-6">03 / 08</div>
            <h3 className="text-[#05f2f2] mb-4">Business Analytics Expertise</h3>
            <p className="text-gray-400 text-sm">
              Capability in data processing with comprehensive focus on business value liberation from data.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#121212] rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a3a3] to-[#05f2f2]"></div>
            <div className="text-xs text-gray-500 mb-6">04 / 08</div>
            <h3 className="text-[#05f2f2] mb-4">Project Management</h3>
            <p className="text-gray-400 text-sm">
              Agile delivery using LLMs and development testing frameworks and production deployment.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#121212] rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a3a3] to-[#05f2f2]"></div>
            <div className="text-xs text-gray-500 mb-6">05 / 08</div>
            <h3 className="text-[#05f2f2] mb-4">Scalability</h3>
            <p className="text-gray-400 text-sm">
              From promise to production with monthly growth acceleration for enterprise grade clients.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#121212] rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a3a3] to-[#05f2f2]"></div>
            <div className="text-xs text-gray-500 mb-6">06 / 08</div>
            <h3 className="text-[#05f2f2] mb-4">Global Expertise</h3>
            <p className="text-gray-400 text-sm">
              Access to worldwide engineers and technicians to address your specific needs.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-[#121212] rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a3a3] to-[#05f2f2]"></div>
            <div className="text-xs text-gray-500 mb-6">07 / 08</div>
            <h3 className="text-[#05f2f2] mb-4">Creative Design & Branding</h3>
            <p className="text-gray-400 text-sm">
              Innovative visuals that best represent your business value in the most impactful way.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-[#121212] rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a3a3] to-[#05f2f2]"></div>
            <div className="text-xs text-gray-500 mb-6">08 / 08</div>
            <h3 className="text-[#05f2f2] mb-4">Training & Development</h3>
            <p className="text-gray-400 text-sm">
              Custom development of tools, techniques and frameworks for upskilling your workforce.
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
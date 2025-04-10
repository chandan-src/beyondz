import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twoinone from '../components/Twoinone';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      image: "/images/3d.png",
      date: "01/02/22",
      readTime: "5 min read time",
      category: "BLOG",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      image: "https://picsum.photos/id/1/200/200",
      date: "01/02/22",
      readTime: "3 min read time",
      category: "BLOG",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      image: "https://picsum.photos/id/180/200/200",
      date: "01/02/22",
      readTime: "4 min read time",
      category: "ARTICLE",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      image: "https://picsum.photos/id/20/200/200",
      date: "01/02/22",
      readTime: "2 min read time",
      category: "BLOG",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      image: "https://picsum.photos/id/60/200/200",
      date: "01/02/22",
      readTime: "6 min read time",
      category: "ARTICLE",
    },
  ];


const AboutPage = () => {
    return (
        <main className="min-h-screen bg-black text-white">
          
            <div className="min-h-screen bg-black text-white p-8">
      {/* Header section with breadcrumb */}
      <div className="mb-12">
        <div className="flex items-center text-sm text-blue-500 mb-10">
          <span className="mr-1">/</span>
          <span>Blog/Feed/News</span>
        </div>
        
        <p className="text-xs text-gray-500 max-w-xs">
          Proptech adapters and developers accelerate 
          Predictively for the Beyond+ data tech Labs team.
        </p>
      </div>

      {/* Main blog grid */}
      <div className="grid grid-cols-1 gap-6">
        {/* Featured blog - larger size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#1A1E23] rounded-lg overflow-hidden mb-6">
          <div className="aspect-square md:aspect-auto">
            <Image 
              src={blogs[0].image} 
              alt={blogs[0].title}
              className=" object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h2 className="text-xl font-normal mb-auto">
              {blogs[0].title}
            </h2>
            <div className="mt-6">
              <div className="flex items-center text-xs text-gray-500 space-x-2">
                <span className="inline-block px-2 py-0.5 bg-blue-900 text-blue-400 rounded-sm uppercase">{blogs[0].category}</span>
                <span>{blogs[0].date}</span>
                <span>•</span>
                <span>{blogs[0].readTime}</span>
              </div>
              <div className="mt-4">
                <Link 
                  href="/" 
                  className="inline-block bg-blue-700 text-white text-sm py-2 px-4 rounded hover:bg-blue-800 transition-colors"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of smaller blogs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="bg-[#1A1E23] rounded-lg overflow-hidden">
              <div className="h-40">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-normal mb-4">
                  {blog.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 space-x-2">
                  <span className="inline-block px-2 py-0.5 bg-blue-900 text-blue-400 rounded-sm uppercase">{blog.category}</span>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
                <Twoinone />
                <Footer />
        </main>
    );
};

export default AboutPage; 
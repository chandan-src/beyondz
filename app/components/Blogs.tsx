import React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-black text-white p-12">
      {/* Header */}
      <div className="flex items-center mb-16 text-4xl">
        <div className="text-blue-500 mr-3">/</div>
        <h1 className="text-blue-500 text-4xl font-medium">Blogs</h1>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex space-x-8">
          <div className="border-b-2 border-white pb-1">
            <span className="text-sm">Featured</span>
          </div>
          <div className="text-gray-500 flex items-center space-x-2">
            <span className="text-sm">Articles</span>
            <span className="text-xs text-gray-500">(1)</span>
          </div>
        </div>
        <div className="max-w-md text-sm text-gray-300">
          A hub for all things Labs, including new projects, technology experiments, team news, and more.
        </div>
        <div className="flex space-x-2">
          <button className="rounded-full border border-gray-700 p-1">
            <ChevronLeft size={16} />
          </button>
          <button className="rounded-full border border-gray-700 p-1">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Card */}
        <div className="col-span-2">
          <div className="rounded-lg overflow-hidden h-[300px]">
            <img
              src="https://prod.cdn.business.wfu.edu/uploads/2015/11/Web__What-is-Bussines-Analytics.webp"
              alt="Abstract technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Middle Card - Main Content */}
        <div className="col-span-8">
          <div className="rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 h-[500px] relative">
            <div className="p-8 absolute top-0 left-0 w-full">
              <h2 className="text-2xl font-medium mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy nibh euismod tincidunt
              </h2>
              <div className="text-gray-400 text-sm mb-4">By Alis Berglun Kirmack</div>
            </div>
            <div className="absolute bottom-6 left-8 text-xs text-gray-400">
              Released on 12 / 03 / 25
            </div>
            <div className="absolute right-0 bottom-0 w-2/3 h-3/4">
              <img
                src="https://prod.cdn.business.wfu.edu/uploads/2015/11/Web__What-is-Bussines-Analytics.webp"
                alt="Person working on tech"
                className="w-full h-full object-cover rounded-tl-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="col-span-2">
          <div className="rounded-lg overflow-hidden h-[300px]">
            <img
              src="https://prod.cdn.business.wfu.edu/uploads/2015/11/Web__What-is-Bussines-Analytics.webp"
              alt="Digital sphere"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-blue-600 text-white text-sm rounded-full px-4 py-2 flex items-center">
          All Articles
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Blogs;

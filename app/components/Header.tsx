"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import PopupMenu from "./Modal";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="top-0 w-full py-3 px-4 sm:px-6 md:px-8 flex justify-between items-start  fixed z-[99999]">
      <div className="flex flex-col sm:flex-row items-center justify-between pt-2 sm:pt-3 md:pt-4">
        {/* Left Box - Dark with Logo and Menu */}
        <div
          style={{
            animation: "cubic-bezier(0.39, 0.575, 0.565, 1)",
          }}
          className={`bg-[#1A1F25] rounded-md h-24 w-full sm:w-[350px] md:w-[450px]  px-4 sm:px-6 md:px-8 mb-4 sm:mb-0 duration-300  ${
            isMenuOpen && "h-screen"
          } `}
        >
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center">
              <img
                src="/images/zgroup.png"
                alt="BEYONDZ"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </Link>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="h-6 sm:h-8 md:h-10 w-[1px] bg-gray-600"></div>
              <button
                onClick={() => {
                  setIsMenuOpen((x) => !x);
                }}
                className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                    strokeWidth={1}
                  />
                ) : (
                  <Menu
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                    strokeWidth={1}
                  />
                )}
              </button>
            </div>
          </div>
          <div></div>
        </div>

        {/* Right - Let's Talk Button */}
      </div>
      <div className="h-[40px] sm:h-[45px] md:h-[50px] w-full sm:w-[120px] md:w-[150px] flex items-center justify-center group">
        <Link
          href="/contactus"
          className="bg-[#808285] text-black h-full w-full px-3 sm:px-4 md:px-6 py-1 text-xs hover:bg-[#404040] transition-colors rounded-sm flex items-center justify-center font-semibold"
        >
          LET'S TALK{" "}
          <ArrowRight
            size={20}
            className="group-hover:translate-x-3 duration-100"
            strokeWidth={1.4}
          ></ArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default Header;

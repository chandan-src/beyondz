"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import PopupMenu from "./Modal"
import { useState } from "react"
import Image from "next/image"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="relative bg-black top-0 w-full z-20  max-w-[100vw] ">
            <div className="container mx-auto px-4 sm:px-6 md:px-10">
                <div className="flex flex-col sm:flex-row items-center justify-between pt-2 sm:pt-3 md:pt-4">
                    {/* Left Box - Dark with Logo and Menu */}
                    <div className="bg-[#1A1F25] mt-2 rounded-lg h-[80px] sm:h-[90px] md:h-[100px] w-full sm:w-[300px] md:w-[589px]  md:h-[139px] flex items-center justify-between px-4 sm:px-6 md:px-8 mb-4 sm:mb-0">
                        <div className="flex items-center justify-between w-full">
                            <Link href="/" className="flex items-center">
                                <Image src="/images/zgroup.png" alt="BEYONDZ" width={80} height={100} />
                            </Link>
                            <div className="ml-80 h-[139px] w-[1px] bg-gray-600 mx-4"></div>
                            <PopupMenu
                                open={isMenuOpen}
                                onOpenChange={setIsMenuOpen}
                                trigger={
                                    <button
                                        className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-800"
                                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                    >
                                        {isMenuOpen ? (
                                            <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7  text-[#ADADAD]" strokeWidth={2} />
                                        ) : (
                                            <Menu className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#ADADAD]" strokeWidth={2} />
                                        )}
                                    </button>
                                }
                            />
                        </div>
                    </div>

                    {/* Right - Let's Talk Button */}
                    <div className="h-[40px] sm:h-[45px] md:h-[50px] w-full m-10 sm:w-[120px] md:w-[150px] flex items-center justify-center">
                        <Link
                            href="/contactus"
                            className="bg-[#808285] text-[13px] text-black h-full w-full  px-3 sm:px-4 md:px-6 py-1 text-xs hover:bg-[#404040] transition-colors rounded-sm flex items-center justify-center"
                        >
                            LET'S TALK →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header 
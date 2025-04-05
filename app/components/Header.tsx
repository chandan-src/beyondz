"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="top-0 w-full z-50 px-4 sm:px-6 md:px-8 bg-black">
            <div className="flex flex-col sm:flex-row items-center justify-between pt-3 sm:pt-4 md:pt-5">
                {/* Left Box - Dark with Logo and Menu */}
                <div className="bg-[#1a1a1a] h-[100px] sm:h-[120px] md:h-[139px] w-full sm:w-[400px] md:w-[589px] flex items-center justify-between px-4 sm:px-6 md:px-8 mb-4 sm:mb-0">
                    <Link href="/" className="flex items-center">
                        <img src="/images/zgroup.png" alt="BEYONDZ" className="h-12 sm:h-14 md:h-16 w-auto" />
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="h-8 sm:h-10 md:h-12 w-[1px] bg-gray-600"></div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                            ) : (
                                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Right - Let's Talk Button */}
                <div className="h-[50px] sm:h-[60px] md:h-[64px] w-full sm:w-[150px] md:w-[195px] flex items-center justify-center">
                    <Link
                        href="/contact-us"
                        className="bg-[#333333] text-white h-full w-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 text-xs sm:text-sm hover:bg-[#404040] transition-colors rounded-sm flex items-center justify-center"
                    >
                        LET'S TALK →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header 
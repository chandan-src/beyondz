"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import PopupMenu from "./Modal"
import { useState } from "react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="top-0 w-full z-50 px-4 sm:px-6 md:px-8 bg-black">
            <div className="flex flex-col sm:flex-row items-center justify-between pt-2 sm:pt-3 md:pt-4">
                {/* Left Box - Dark with Logo and Menu */}
                <div className="bg-[#1a1a1a] h-[80px] sm:h-[90px] md:h-[100px] w-full sm:w-[350px] md:w-[450px] flex items-center justify-between px-4 sm:px-6 md:px-8 mb-4 sm:mb-0">
                    <Link href="/" className="flex items-center">
                        <img src="/images/zgroup.png" alt="BEYONDZ" className="h-10 sm:h-12 md:h-14 w-auto" />
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="h-6 sm:h-8 md:h-10 w-[1px] bg-gray-600"></div>
                        <PopupMenu
                            open={isMenuOpen}
                            onOpenChange={setIsMenuOpen}
                            trigger={
                                <button
                                    className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-800"
                                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                >
                                    {isMenuOpen ? (
                                        <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={2} />
                                    ) : (
                                        <Menu className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={2} />
                                    )}
                                </button>
                            }
                        />
                    </div>
                </div>

                {/* Right - Let's Talk Button */}
                <div className="h-[40px] sm:h-[45px] md:h-[50px] w-full sm:w-[120px] md:w-[150px] flex items-center justify-center">
                    <Link
                        href="/contactus"
                        className="bg-[#333333] text-white h-full w-full px-3 sm:px-4 md:px-6 py-1 text-xs hover:bg-[#404040] transition-colors rounded-sm flex items-center justify-center"
                    >
                        LET'S TALK →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header 
"use client"

import { ArrowRight, ArrowUpRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface CustomButtonProps {
    href: string
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    icon?: 'arrowRight' | 'arrowUpRight'
    className?: string
}

const CustomButton = ({
    href,
    variant = 'primary',
    size = 'md',
    children,
    icon,
    className = ''
}: CustomButtonProps) => {
    const baseStyles = "inline-flex items-center transition-all duration-300 rounded-sm"

    const variants = {
        primary: "bg-transparent hover:bg-blue-900/40 text-blue-400 border border-blue-400",
        secondary: "bg-white/80 backdrop-blur-sm border border-black hover:bg-blue-700 hover:text-white text-black",
        outline: "border border-cyan-500 text-cyan-500 hover:bg-cyan-900 hover:bg-opacity-30"
    }

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 sm:px-5 py-2 text-sm",
        lg: "px-6 sm:px-8 py-3 text-base"
    }

    const icons = {
        arrowRight: <ArrowRight size={12} className="ml-1 sm:ml-2" />,
        arrowUpRight: <ArrowUpRight size={14} className="ml-2" />
    }

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
            {icon && icons[icon]}
        </Link>
    )
}

export default CustomButton 
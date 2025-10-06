"use client"
import { useState } from "react"
import Link from "next/link"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(true)   
  const closeMenu = () => setIsOpen(false)    

  return (
    <nav className="bg-[#FFFCF6] sticky top-0 z-50">
      <div className="max-w-[1512px] mx-auto px-[30px] md:px-[50px] lg:px-[80px] xl:px-[131px]">

        {/* Desktop */}
        <div className="hidden md:flex justify-center py-4">
          <div className="flex space-x-8">
            <Link href="/" className="font-[bogart] font-bold text-[18px] text-[#3B58CB] hover:text-[#D43925]">
              About
            </Link>
            <Link href="/chicken-date-shop" className="font-[bogart] font-bold text-[18px] text-[#3B58CB] hover:text-[#D43925]">
              Chicken Date Shop
            </Link>
            <Link href="/dimz-inc" className="font-[bogart] font-bold text-[18px] text-[#3B58CB] hover:text-[#D43925]">
              Dimz Inc
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-end items-center py-4">
        
        {/* the hamburger icon */}
          <button
            onClick={handleClick}
            className="text-[#3B58CB] hover:text-[#D43925]"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* when open menu in mobile */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#FFFCF6] z-40">
          <div className="flex flex-col h-full">

            {/* the X icon */}
            <div className="flex justify-end p-[30px]">
              <button
                onClick={closeMenu}
                className="text-[#3B58CB] hover:text-[#D43925]"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center space-y-8 mt-20">
              <Link href="/" onClick={closeMenu} className="font-[bogart] font-bold text-[24px] text-[#3B58CB] hover:text-[#D43925]">
                About
              </Link>
              <Link href="/chicken-date-shop" onClick={closeMenu} className="font-[bogart] font-bold text-[24px] text-[#3B58CB] hover:text-[#D43925]">
                Chicken Date Shop
              </Link>
              <Link href="/dimz-inc" onClick={closeMenu} className="font-[bogart] font-bold text-[24px] text-[#3B58CB] hover:text-[#D43925]">
                Dimz Inc
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
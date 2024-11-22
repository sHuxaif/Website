"use client";
import React, { useState } from "react";
import Link from "next/link";

function NavBarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if menu is open or closed

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle the state

  return (
    <header className="absolute top-10 left-0 right-0 z-30 max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center py-5">
        {/* Logo - Centered */}
        <div className="flex justify-center w-full">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-black p-2 bg-gradient-to-r from-[#a259ff] to-[#ff6250] rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-3xl sm:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#a259ff] to-[#ff6250]">
                AlphaCoders
              </span>
            </div>
          </Link>
        </div>

        {/* Hamburger Icon - Always visible */}
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none "
        >
          <span className="text-2xl">&#9776;</span> {/* Hamburger Icon */}
        </button>

        {/* Navigation Links - Hidden by default */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:w-auto absolute top-16 left-1/2 transform -translate-x-1/2 bg-[#1c1c1c] w-full text-center py-4 space-y-4 lg:bg-transparent lg:space-y-0 lg:hidden`}
        >
          <Link
            href="/"
            className="text-black text-lg font-semibold transition-all hover:text-[#ff6250] hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/why-we"
            className="text-black text-lg font-semibold transition-all hover:text-[#ff6250] hover:scale-105"
          >
            Why We
          </Link>
          <Link
            href="/what-we-do"
            className="text-black text-lg font-semibold transition-all hover:text-[#ff6250] hover:scale-105"
          >
            What We Do
          </Link>
          <Link
            href="/how-we"
            className="text-black text-lg font-semibold transition-all hover:text-[#ff6250] hover:scale-105"
          >
            How We
          </Link>
          <Link
            href="/our-craftsmen"
            className="text-black text-lg font-semibold transition-all hover:text-[#ff6250] hover:scale-105"
          >
            Our Craftsmen
          </Link>
          <Link
            href="/contact-us"
            className="text-black text-lg font-semibold transition-all hover:text-[#ff6250] hover:scale-105"
          >
            Contact Us
          </Link>
          <Link
            href="/career"
            className="text-black text-lg font-semibold transition-all hover:text-[#ff6250] hover:scale-105"
          >
            Career
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBarSection;
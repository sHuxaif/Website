import { useState } from 'react'; // Import useState
import Link from 'next/link';

function NavBarSection() {
  // State for toggling the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for toggling the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle function for the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Toggle function for the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="relative">
        {/* Hamburger Icon - Always visible on small screens */}
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none lg:hidden"
        >
          <span className="text-2xl">&#9776;</span> {/* Hamburger Icon */}
        </button>

        {/* Dropdown Menu Button - For larger screens */}
        <div className="relative hidden lg:block">
          <button
            onClick={toggleDropdown}
            className="text-black font-semibold transition-all hover:text-[#ff6250] focus:outline-none"
          >
            Menu dropodown
          </button>

          {/* Dropdown Menu (appears on button click) */}
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg">
              {/* Dropdown Links */}
              <Link href="/home" className="block px-4 py-2">Home</Link>
              <Link href="/about" className="block px-4 py-2">About</Link>
              <Link href="/contact" className="block px-4 py-2">Contact</Link>
              {/* Other links */}
            </div>
          )}
        </div>

        {/* Navigation Links - Hidden by default on mobile, visible on large screens */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:w-auto absolute top-16 left-1/2 transform -translate-x-1/2 bg-[#1c1c1c] w-full text-center py-4 space-y-4 lg:bg-transparent lg:space-y-0`}
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
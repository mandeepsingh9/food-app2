"use client";
import Image from 'next/image';
import Link  from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    toggleMenu(); 
  };

  return (
    <div className="container pt-6 sticky top-0  bg-white z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <span className="font-bold text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{ lineHeight: '1' }}>Tomato</span>
        </div>

        {/* Desktop navigation */}
        <nav className="md:flex hidden gap-8 items-center font-semibold text-[14px]">
          <ScrollNavLink to="home" text="Home" />
          <ScrollNavLink to="about" text="About" />
          <ScrollNavLink to="food" text="Food" />
          <ScrollNavLink to="dish" text="Dish" />
          <ScrollNavLink to="contact" text="Contact Us" />
        </nav>

        {/* Navigation toggle and login button */}
        <div className="flex items-center gap-4">
          <AuthLink href="/login" text="Login" />
          <div className="md:hidden">
            <button className="text-black focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-2">
          <MobileScrollNavLink to="home" text="Home" />
          <MobileScrollNavLink to="about" text="About" />
          <MobileScrollNavLink to="food" text="Food" />
          <MobileScrollNavLink to="dish" text="Dish" />
          <MobileScrollNavLink to="contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

// Custom NavLink component to handle smooth scrolling with react-scroll
const ScrollNavLink = ({ to, text }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={500} className="hover:text-accent">
      {text}
    </ScrollLink>
  );
};

// Custom MobileNavLink component for mobile navigation with smooth scrolling
const MobileScrollNavLink = ({ to, text }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={500} className="block py-2 px-4 text-sm text-black hover:bg-gray-200">
      {text}
    </ScrollLink>
  );
};

// Custom AuthLink component for login/signup buttons
const AuthLink = ({ href, text }) => {
  return (
    <a href={href}>
      <a className="bg-accent text-white px-6 py-2 rounded-3xl hover:bg-accent-dark">
        {text}
      </a>
    </a>
  );
};

export default Navbar;

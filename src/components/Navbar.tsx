"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container pt-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <span className="font-bold text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{ lineHeight: '1' }}>Tomato</span>
        </div>

        {/* Desktop navigation */}
        <nav className="md:flex hidden gap-8 items-center font-semibold text-[14px]">
          <NavLink href="/" text="Home" currentPath={pathname} />
          <NavLink href="/about" text="About" currentPath={pathname} />
          <NavLink href="/food" text="Food" currentPath={pathname} />
          <NavLink href="/dish" text="Dish" currentPath={pathname} />
          <NavLink href="/contact" text="Contact Us" currentPath={pathname} />
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
          <MobileNavLink href="/" text="Home" currentPath={pathname} />
          <MobileNavLink href="/about" text="About" currentPath={pathname} />
          <MobileNavLink href="/food" text="Food" currentPath={pathname} />
          <MobileNavLink href="/dish" text="Dish" currentPath={pathname} />
          <MobileNavLink href="/contact" text="Contact Us" currentPath={pathname} />
        </div>
      </div>
    </div>
  );
};

// Custom NavLink component to handle Next.js Link with Tailwind CSS styles
const NavLink = ({ href, text, currentPath }) => {
  const isActive = currentPath === href;
  return (
    <Link href={href} className={`hover:text-accent ${isActive ? 'underline underline-offset-4 decoration-4  decoration-orange-500' : ''}`}>
      {text}
    </Link>
  );
};

// Custom MobileNavLink component for mobile navigation
const MobileNavLink = ({ href, text, currentPath }) => {
  const isActive = currentPath === href;
  return (
    <Link href={href} className={`block py-2 px-4 text-sm text-black hover:bg-gray-200 ${isActive ? 'underline underline-offset-4 decoration-4 decoration-orange-500' : ''}`}>
      {text}
    </Link>
  );
};

// Custom AuthLink component for login/signup buttons
const AuthLink = ({ href, text }) => {
  return (
    <Link href={href} className="bg-accent text-white px-6 py-2 rounded-3xl hover:bg-accent-dark">
      {text}
    </Link>
  );
};

export default Navbar;

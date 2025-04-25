"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-[#335770] w-full shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-white">
          <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
          <span>
            Sanpio<span className="text-white">62</span>
          </span>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-1xl font-bold text-[#d2e7f5]">
          <Link 
            href="#about" 
            className="hover:text-[white] transition"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            Kisah
          </Link>
          <Link 
            href="#gallery" 
            className="hover:text-white transition"
            onClick={(e) => scrollToSection(e, 'gallery')}
          >
            Galeri
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-white transition"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#d2e7f5] hover:text-green-500 p-2 rounded"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-white font-semibold">
          <Link 
            href="#about" 
            className="block hover:text-green-500"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            Kisah
          </Link>
          <Link 
            href="#gallery" 
            className="block hover:text-green-500"
            onClick={(e) => scrollToSection(e, 'gallery')}
          >
            Galeri
          </Link>
          <Link 
            href="#contact" 
            className="block hover:text-green-500"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <header className="w-full bg-white z-50 fixed  rounded-lg">
        <div className="mx-auto px-6 md:px-20 py-4  flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-serif">
              <span className="text-accent font-normal">BASERA</span>
              <span className="text-black font-light ml-0.5"> PROPERTIES</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-sm font-medium text-black flex-1 justify-center mx-8">
            <Link
              href="/about-us"
              className="uppercase tracking-wide hover:text-black/70 transition-colors"
            >
              About
            </Link>
            {[, "Properties", "Services", "FAQs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="uppercase tracking-wide hover:text-black/70 transition-colors"
              >
                {item}
              </a>
            ))}
            <Link
              href="/contact-us"
              className="uppercase tracking-wide hover:text-black/70 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Menu Button (non-functional) */}
          <a href="#contact">
            <button className="hidden md:flex w-12 h-12 rounded-full border border-black/30 items-center justify-center hover:bg-black/10 transition-colors">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-4 h-0.5 bg-black"></div>
                <div className="w-4 h-0.5 bg-black"></div>
              </div>
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed  top-0 right-0 h-full  w-full max-w-sm bg-[#08314B] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Slide-in Header */}
        <div className="flex justify-between items-center p-6">
          <h1 className="text-xl font-serif">
            <span className="text-accent font-normal">BASERA</span>
            <span className="text-white font-light ml-0.5"> PROPERTIES</span>
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        {/* Slide-in Nav Links */}
        <nav className="flex flex-col gap-6 mt-4 text-white px-6 text-base">
          <Link
            href="/about-us"
           className="border-b border-white/20 pb-2 hover:text-white/90 transition-colors"
          >
            About
          </Link>

          {["Properties", "Services", "FAQs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="border-b border-white/20 pb-2 hover:text-white/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <Link
            href="/contact-us"
          className="border-b border-white/20 pb-2 hover:text-white/90 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

// components/Footer.jsx
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0c3c55] text-white">
      <div className="mx-auto px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo + Description */}
          <a href="/">
            <h1
              className="text-xl md:text-2xl font-serif mb-4"
              style={{ fontFamily: "serif" }}
            >
              <span className="text-[#f15a24] font-normal">BASERA</span>
              <span className="text-white font-light ml-0.5"> PROPERTIES</span>
            </h1>
            <p className="text-slate-300 text-sm mb-6">
              We are a team of experienced real estate professionals dedicated
              to helping you find your dream home.
            </p>
          </a>

          {/* Information */}
          <div className="space-y-3">
            <h5 className="font-semibold mb-4 text-lg">Information</h5>
            <div className="flex items-center gap-3 text-sm">
              <svg
                className="w-5 h-5 text-[#f15a24] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 
                1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
              </svg>
              <span className="text-slate-300">Rajiv Sachdeva</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <svg
                className="w-5 h-5 text-[#f15a24] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 
                4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 
                11.037 0 006.105 6.105l.774-1.548a1 1 0 
                011.059-.54l4.435.74a1 1 0 01.836.986V17a1 
                1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                ></path>
              </svg>
              <span className="text-slate-300">+91-9810214410</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <svg
                className="w-5 h-5 text-[#f15a24] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 
                0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 
                002 2h12a2 2 0 002-2V8.118z"
                ></path>
              </svg>
              <span className="text-slate-300">baseraproperty@gmail.com</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <svg
                className="w-5 h-5 text-[#f15a24] flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 
                  119.9 9.9L10 18.9l-4.95-4.95a7 7 0 
                  010-9.9zM10 11a2 2 0 100-4 2 2 0 
                  000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-slate-300">
                C-29, BPTP Parklands
                <br />
                Sector-85, Faridabad, Haryana
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 text-lg">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscription */}
          <div>
            <h5 className="font-semibold mb-4 text-lg">
              Get Exclusive Updates
            </h5>
            <p className="text-slate-300 text-sm mb-6">
              Be the first to know about new properties, market insights, and
              exclusive deals.
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 text-slate-900 bg-white border-0 outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 text-center bg-[#f15a24] hover:bg-orange-600 text-white font-semibold"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © 2025 Basera Properties. All rights reserved.
          </div>
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61567005412129"
              className="w-10 h-10 bg-[#063957] text-white rounded-full flex items-center justify-center  hover:bg-accent hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/baseraproperty"
              className="w-10 h-10 bg-[#063957] text-white rounded-full flex items-center justify-center text-slate-600 hover:bg-accent hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bas.eraproperty/"
              className="w-10 h-10 bg-[#063957]bg-[#063957] text-white rounded-full flex items-center justify-center text-slate-600 hover:bg-accent hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rajeev-sachdeva-5a47396b/"
              className="w-10 h-10 bg-[#063957] text-white rounded-full flex items-center justify-center text-slate-600 hover:bg-accent hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

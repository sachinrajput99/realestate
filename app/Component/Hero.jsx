// components/HeroSection.jsx
import React from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative pt-[5rem] sm:pt-[8rem] bg-[url('/basera-properties-hero-image.webp')] bg-cover bg-left min-h-[90vh] flex flex-col">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto px-6 md:px-20 w-full">
          <div className="max-w-2xl">
            <h1 className="text-white mt-5 sm:mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
              Exceptional <br className="sm:hidden" /> Homes for
              <br />
              Exceptional Lives.
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
              Discover your dream property with our easy-to-use real estate
              platform. Browse listings, compare prices, and connect with
              trusted agents in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 font-medium transition-colors"
              >
                Browse Now
              </a>
              <a
                href="#services"
                className="border border-white/30 text-white px-8 py-4 hover:bg-white/10 transition-colors"
              >
                See Details
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 py-8">
        <div className="mx-auto px-6 md:px-20">
          <div className="grid grid-cols-3 text-center divide-x divide-white/20">
            <div className="px-4 py-4">
              <div className="text-3xl md:text-[2.5rem] font-medium text-white mb-2">
                120K+
              </div>
              <div className="text-white/70 text-sm md:text-[1.1rem] font-light">
                Deals Closed
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="text-3xl md:text-[2.5rem] font-medium text-white mb-2">
                1500+
              </div>
              <div className="text-white/70 text-sm md:text-[1.1rem] font-light">
                Houses Sold
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="text-3xl md:text-[2.5rem] font-medium text-white mb-2">
                10K+
              </div>
              <div className="text-white/70 text-sm md:text-[1.1rem] font-light">
                Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

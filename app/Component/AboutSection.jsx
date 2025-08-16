

import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto px-6 md:px-20 py-16 md:py-20 md:pt-10 space-y-20"
    >
      {/* Block 1 - Ultimate Luxury */}
      <div className="grid lg:grid-cols-[40%_1fr] gap-12 items-center">
        {/* Image */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/ultimate_luxury.webp"
              alt="Luxury property exterior showcasing modern architecture"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-4">
            Ultimate Luxury
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-900">
            Exceptional Homes for Exceptional Lives
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            From cozy apartments to luxury villas, we bring you the best
            properties across the city. Explore listings that match your
            lifestyle and budget with our expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition"
            >
              Get Free Consultation
            </a>
            <a
              href="#properties"
              className="border border-slate-300 px-6 py-3 font-semibold text-slate-700 rounded hover:bg-slate-50 transition"
            >
              View All Properties
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-orange-500">✔</span>
              100% Client Satisfaction
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-orange-500">✔</span>
              24/7 Support Available
            </div>
          </div>
        </div>
      </div>

      {/* Block 2 - Extreme Comfort */}
      <div className="hidden sm:grid lg:grid-cols-[1fr_40%]  gap-12 items-center">
        {/* Text */}
        <div>
          <div className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-4">
            Extreme Comfort
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-900">
            Find the Perfect Place to Call Home
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We curate listings tailored to your specific needs and preferences.
            Explore top neighborhoods and enjoy a completely hassle-free
            property buying experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#visit"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition"
            >
              Schedule Visit
            </a>
            <a
              href="#amenities"
              className="border border-slate-300 px-6 py-3 font-semibold text-slate-700 rounded hover:bg-slate-50 transition"
            >
              View Amenities
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-orange-500">✔</span>
              Verified Properties
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-orange-500">✔</span>
              Legal Assistance
            </div>
          </div>
        </div>

        {/* Image */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/extreme_comfort.webp"
              alt="Modern luxury property"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>



        {/* Block 2 - Extreme Comfort */}
      <div className="grid sm:hidden lg:grid-cols-[1fr_40%]  gap-12 items-center">
       {/* Image */}
      <div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/extreme_comfort.webp"
              alt="Modern luxury property"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      
        {/* Text */}
        <div>
          <div className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-4">
            Extreme Comfort
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-900">
            Find the Perfect Place to Call Home
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We curate listings tailored to your specific needs and preferences.
            Explore top neighborhoods and enjoy a completely hassle-free
            property buying experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#visit"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition"
            >
              Schedule Visit
            </a>
            <a
              href="#amenities"
              className="border border-slate-300 px-6 py-3 font-semibold text-slate-700 rounded hover:bg-slate-50 transition"
            >
              View Amenities
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-orange-500">✔</span>
              Verified Properties
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-orange-500">✔</span>
              Legal Assistance
            </div>
          </div>
        </div>

        {/* Image */}
        
      </div>

  
    </section>
  );
}

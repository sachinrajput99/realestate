import React from "react";
import Navbar from "../Component/Navbar";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";
import ReadyToWorkSection from "../Component/ReadyToWorkSection ";

const page = () => {
  return (
    <>
      <Navbar />

         <section className="relative bg-[#063957]  py-24 md:py-28">
        {/* Background image if needed */}
        {/* <Image 
        src={bgImage} 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className="z-0 opacity-10"
      /> */}

        <div className="relative z-10 mx-auto px-6 md:px-20 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to find your dream property? Get in touch with our expert team
            for personalized assistance.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto px-6 md:px-20 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We&apos;re here to help you with all your real estate needs. Reach
              out to us through any of the following channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Phone</h3>
              <p className="text-slate-600 mb-4">
                Call us for immediate assistance
              </p>
              <a
                href="tel:+919810214410"
                className="text-accent font-medium hover:text-accent/80 transition-colors"
              >
                +91-9810214410
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Email</h3>
              <p className="text-slate-600 mb-4">Send us your queries</p>
              <a
                href="mailto:baseraproperty@gmail.com"
                className="text-accent font-medium hover:text-accent/80 transition-colors"
              >
                baseraproperty@gmail.com
              </a>
            </div>

            {/* Office */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Office
              </h3>
              <p className="text-slate-600 mb-4">Visit our office</p>
              <p className="text-accent font-medium">
                C-29, BPTP Parklands
                <br />
                Sector-85, Faridabad
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6 text-center">
              Business Hours
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="font-medium text-slate-700">
                  Monday - Saturday
                </span>
                <span className="text-slate-600">9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  );
};

export default page;



export default function ServicesSection() {
  const services = [
    {
      title: "Booking",
      description:
        "Secure your dream property with easy booking and flexible payment options.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Sale",
      description:
        "Expert assistance to sell your property at the best market value.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 21h18M5 21V7l8-4v18M9 9h4m-4 4h4m-4 4h4"
          />
        </svg>
      ),
    },
    {
      title: "Purchase",
      description:
        "Find and purchase your ideal property with our comprehensive support.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Construction",
      description:
        "Complete construction services from planning to final handover.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"
          />
        </svg>
      ),
    },
  ];

  return (
          <section id="services" className="bg-white py-16 md:py-20">
{/* //     <section id="services" className="mx-auto px-6 md:px-20"> */}
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-heading font-semibold mb-2 text-primary">
          Everything You Need
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Comprehensive real estate services tailored to meet all your property
          needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 text-center"
          >
            {/* Icon */}
            <div className="text-accent mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h4 className="text-xl font-semibold mb-3 text-primary">
              {service.title}
            </h4>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

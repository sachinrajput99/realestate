

import Image from "next/image";

const properties = [
  {
    name: "Discovery Park",
    location: "Sector 80, Faridabad",
    image: "/images/image1.webp",
  },
  {
    name: "Eden Estate",
    location: "Sector 81, Faridabad",
    image: "/images/image2.webp",
  },
  {
    name: "Park Floors 2",
    location: "Sector 76, Faridabad",
    image: "/images/image3.webp",
  },
  {
    name: "Park Elite Premium",
    location: "Sector 84, Faridabad",
    image: "/images/image4.webp",
  },
  {
    name: "Puri Aanand Vilas",
    location: "Sector 81, Faridabad",
    image: "/images/image5.webp",
  },
  {
    name: "Park Grandeura",
    location: "Sector 82, Faridabad",
    image: "/images/image6.webp",
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className=" bg-slate-50 py-16 md:py-20">
      <div className="mx-auto px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
         
           <h3 className="text-3xl md:text-4xl font-heading font-semibold mb-2 text-primary">
           Featured Properties
        </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, each
            offering exceptional value and luxury living.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h4 className="text-lg font-semibold text-slate-800">
                  {property.name}
                </h4>
                <p className="text-slate-600 flex items-center mt-2 text-sm">
                  <svg
                    className="w-4 h-4 mr-2 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {property.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

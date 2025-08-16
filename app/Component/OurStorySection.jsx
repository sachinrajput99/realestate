export default function OurStorySection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto px-6 md:px-20 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
              Our Story
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded with a vision to transform the real estate landscape,
              Basera Properties has grown from a small local firm to one of the
              most trusted names in the industry. Our journey began with a
              simple belief: every family deserves a perfect home.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Over the years, we&apos;ve facilitated over 120,000 successful property
              deals, helped 1,500+ families find their dream homes, and built
              lasting relationships with more than 10,000 satisfied customers.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we continue to innovate and set new standards in real
              estate, combining traditional values with modern technology to
              deliver unparalleled service.
            </p>
          </div>

          {/* Stats Box */}
          <div className="relative">
            <div className="bg-accent/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    120K+
                  </div>
                  <div className="text-slate-600">Deals Closed</div>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    1500+
                  </div>
                  <div className="text-slate-600">Houses Sold</div>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    10K+
                  </div>
                  <div className="text-slate-600">Happy Customers</div>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MissionVisionSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto px-6 md:px-20 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
            Our Mission &amp; Vision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To provide comprehensive, transparent, and personalized real estate services that exceed our clients&apos; expectations. We strive to make property buying, selling, and investment accessible and stress-free for everyone.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted and innovative real estate company, setting industry standards for customer service, transparency, and community development while helping create sustainable and thriving neighborhoods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

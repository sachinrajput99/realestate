export default function ReadyToWorkSection() {
  return (
    <section className="bg-[#063957] py-16 md:py-20">
      <div className="mx-auto px-6 md:px-20 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have trusted us with their
          real estate needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact-us"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 font-medium transition-colors inline-flex items-center justify-center"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="border border-white/30 text-white px-8 py-4 hover:bg-white/10 transition-colors inline-flex items-center justify-center"
          >
            View Properties
          </a>
        </div>
      </div>
    </section>
  );
}

export default function CallToAction() {
  return (
    <section className="bg-dark py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to Bid at the Highest Level?
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Join 4,800+ verified bidders and leading auction houses on the most
          trusted real-time auction platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="btn btn-primary sm:w-auto w-full px-8 py-4 text-lg">
            Create Free Account
          </button>
          <button className="btn btn-secondary sm:w-auto w-full px-8 py-4 text-lg border-white/10 hover:border-white/30 text-slate-300">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}

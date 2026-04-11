export default function CallToAction() {
  return (
    <section className="bg-dark border-t border-white/5 px-4 py-28 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Ready to Bid at the Highest Level?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-400">
          Join 4,800+ verified bidders and leading auction houses on the most
          trusted real-time auction platform.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="btn btn-primary w-full px-8 py-4 text-lg sm:w-auto">
            Create Free Account
          </button>
          <button className="btn btn-secondary w-full border-white/10 px-8 py-4 text-lg text-slate-300 hover:border-white/30 sm:w-auto">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}

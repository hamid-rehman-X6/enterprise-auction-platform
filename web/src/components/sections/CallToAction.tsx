export default function CallToAction() {
  return (
    <section className="bg-dark border-t border-white/5 px-4 py-28 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-3xl">
          Ready to Bid at the Highest Level?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-400">
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

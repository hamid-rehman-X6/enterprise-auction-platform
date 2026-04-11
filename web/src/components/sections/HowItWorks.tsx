import { UserPlus, Search, Gavel, Trophy, CheckCircle } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Register & Verify",
    description:
      "Create your account, complete KYC verification, and get approved to bid within 24 hours.",
    icon: <UserPlus className="w-6 h-6 text-primary" />,
  },
  {
    id: "02",
    title: "Browse & Watchlist",
    description:
      "Explore curated auctions across fine art, jewelry, automobiles, and more. Save lots to your watchlist.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    id: "03",
    title: "Bid in Real-Time",
    description:
      "Join live auction rooms with real-time bid updates, countdown timers, and instant notifications.",
    icon: <Gavel className="w-6 h-6 text-primary" />,
  },
  {
    id: "04",
    title: "Win & Settle",
    description:
      "Receive instant confirmation, complete secure payment, and arrange delivery or collection.",
    icon: <Trophy className="w-6 h-6 text-primary" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How AuctionPro Works
          </h2>
          <p className="text-lg text-slate-500">
            From registration to winning — a seamless, transparent process
            designed for serious collectors and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative mb-24">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-slate-200 z-0"></div>

          {STEPS.map((step) => (
            <div key={step.id} className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-slate-300 font-bold text-xl">
                  {step.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Sub-section */}
      <div className="bg-secondary border-t border-white/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Live Auction Room
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Real-Time Bidding,
              <br />
              Zero Compromise
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Our server-authoritative auction engine ensures every bid is
              validated, timestamped, and immutable. Anti-snipe protection, live
              presence indicators, and instant activity feeds keep every
              participant informed.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Sub-100ms bid propagation to all participants",
                "Anti-snipe extension with configurable thresholds",
                "Real-time presence indicators and participant count",
                "In-auction chat with moderation controls",
                "Automatic lot transitions with auctioneer override",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-primary group">
              Enter Live Auction
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>

          {/* Simulated UI Screen on Right */}
          <div className="bg-[#1e293b] rounded-2xl p-1 shadow-2xl border border-white/10">
            <div className="bg-secondary rounded-xl overflow-hidden border border-white/5">
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#1e293b]/50">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-sm font-semibold text-white">
                    LIVE — Fine Art Spring 2026
                  </span>
                </div>
                <div className="px-3 py-1 bg-red-500/20 text-red-400 font-mono text-sm rounded border border-red-500/30">
                  04:32
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-4 mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1540833132641-fc8a0dbaff45?q=80&w=200&h=200&fit=crop"
                    alt="Artwork"
                    className="w-24 h-24 rounded object-cover border border-white/10"
                  />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Lot 1 of 48</p>
                    <h3 className="text-white font-bold text-lg leading-tight mb-2">
                      Monet — Water Lilies Study, 1906
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Est. $20,000 – $30,000
                    </p>
                  </div>
                </div>

                <div className="bg-dark rounded-xl p-6 text-center border border-white/5 mb-6">
                  <p className="text-slate-400 text-sm mb-2 font-medium uppercase tracking-wide">
                    Current Highest Bid
                  </p>
                  <div className="text-4xl font-extrabold text-primary mb-1">
                    $24,500
                  </div>
                  <p className="text-slate-500 text-xs text-center">
                    Next minimum: $25,000
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <button className="bg-[#1e293b] text-primary font-bold py-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
                    $25,000
                  </button>
                  <button className="bg-[#1e293b] text-primary font-bold py-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
                    $26,000
                  </button>
                  <button className="bg-[#1e293b] text-primary font-bold py-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
                    $28,000
                  </button>
                </div>
                <button className="w-full btn-primary py-4 rounded-lg font-bold text-lg shadow-lg mb-6">
                  Place Bid
                </button>

                <div className="space-y-3">
                  {[
                    { u: "Buyer #4821", amt: "$24,500", t: "2m ago" },
                    { u: "Buyer #2934", amt: "$23,000", t: "4m ago" },
                    { u: "Buyer #7156", amt: "$21,500", t: "6m ago" },
                  ].map((bid, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-sm py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-slate-400">{bid.u}</span>
                      <span className="text-primary font-mono font-bold">
                        {bid.amt}
                      </span>
                      <span className="text-slate-500">{bid.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

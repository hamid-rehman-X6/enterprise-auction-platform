import { LIVE_AUCTION_ROOM } from "@src/constants/auctionImages";
import { BRAND } from "@src/constants/brand";
import { UserPlus, Search, Gavel, Trophy, CheckCircle } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Register & Verify",
    description:
      "Create your account, complete KYC verification, and get approved to bid within 24 hours.",
    icon: <UserPlus className="text-primary h-6 w-6" />,
  },
  {
    id: "02",
    title: "Browse & Watchlist",
    description:
      "Explore curated auctions across fine art, jewelry, automobiles, and more. Save lots to your watchlist.",
    icon: <Search className="text-primary h-6 w-6" />,
  },
  {
    id: "03",
    title: "Bid in Real-Time",
    description:
      "Join live auction rooms with real-time bid updates, countdown timers, and instant notifications.",
    icon: <Gavel className="text-primary h-6 w-6" />,
  },
  {
    id: "04",
    title: "Win & Settle",
    description:
      "Receive instant confirmation, complete secure payment, and arrange delivery or collection.",
    icon: <Trophy className="text-primary h-6 w-6" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="mx-auto mb-14 text-center">
          <p className="mb-2 text-xs font-semibold tracking-widest text-teal-600 uppercase">
            Process
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-3xl">
            How {BRAND.name} Works
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500">
            From registration to winning — a seamless, transparent process
            designed for serious collectors and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.id} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg border border-teal-100">
                  {step.icon}
                </div>
                <span className="font-mono text-xs font-bold text-slate-300">
                  {step.id}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Sub-section */}
      <div className="bg-secondary mx-auto max-w-7xl border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h4 className="text-primary mb-3 text-xs font-semibold tracking-widest uppercase">
              Live Auction Room
            </h4>
            <h2 className="mb-5 text-3xl leading-tight font-bold tracking-tight text-white md:text-4xl">
              Real-Time Bidding,
              <br />
              Zero Compromise
            </h2>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-400">
              Our server-authoritative auction engine ensures every bid is
              validated, timestamped, and immutable. Anti-snipe protection, live
              presence indicators, and instant activity feeds keep every
              participant informed.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                "Sub-100ms bid propagation to all participants",
                "Anti-snipe extension with configurable thresholds",
                "Real-time presence indicators and participant count",
                "In-auction chat with moderation controls",
                "Automatic lot transitions with auctioneer override",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="font-medium text-slate-300">{feature}</span>
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
          <div className="overflow-hidden rounded-xl border border-slate-700 bg-[#1e293b]">
            <div className="flex items-center justify-between border-b border-slate-700 bg-[#0F172A] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
                <span className="text-sm font-semibold text-white">
                  LIVE — Fine Art Spring 2026
                </span>
              </div>
              <div className="animate-pulse rounded-md border border-red-500/40 bg-red-500/20 px-3 py-1 font-mono text-sm font-bold text-red-400">
                04:32
              </div>
            </div>

            <div className="p-6">
              <div className="mb-8 flex gap-4">
                <img
                  src={LIVE_AUCTION_ROOM.waterLilies}
                  alt="Artwork"
                  className="h-24 w-24 rounded border border-white/10 object-cover"
                />
                <div>
                  <p className="mb-1 text-sm text-slate-400">Lot 1 of 48</p>
                  <h3 className="mb-2 text-lg leading-tight font-bold text-white">
                    Monet — Water Lilies Study, 1906
                  </h3>
                  <p className="text-sm text-slate-400">
                    Est. $20,000 – $30,000
                  </p>
                </div>
              </div>

              <div className="bg-dark mb-6 rounded-xl border border-white/5 p-6 text-center">
                <p className="mb-2 text-sm font-medium tracking-wide text-slate-400 uppercase">
                  Current Highest Bid
                </p>
                <div className="text-primary mb-1 text-4xl font-extrabold">
                  $24,500
                </div>
                <p className="text-center text-xs text-slate-500">
                  Next minimum: $25,000
                </p>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-3">
                <button className="text-primary border-primary/20 hover:bg-primary/10 rounded-lg border bg-[#1e293b] py-3 font-bold transition-colors">
                  $25,000
                </button>
                <button className="text-primary border-primary/20 hover:bg-primary/10 rounded-lg border bg-[#1e293b] py-3 font-bold transition-colors">
                  $26,000
                </button>
                <button className="text-primary border-primary/20 hover:bg-primary/10 rounded-lg border bg-[#1e293b] py-3 font-bold transition-colors">
                  $28,000
                </button>
              </div>
              <button className="btn-primary mb-6 w-full rounded-lg py-4 text-lg font-bold shadow-lg">
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
                    className="flex justify-between border-b border-white/5 py-2 text-sm last:border-0"
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
    </section>
  );
}

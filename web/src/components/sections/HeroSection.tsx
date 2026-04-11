import auctionHall from "@src/assets/images/home/auction-hall-1.png";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${auctionHall})`,
        }}
      >
        <div className="bg-dark/60 absolute inset-0 backdrop-blur-[0px]"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-8 text-center sm:px-6 lg:px-8">
        <div className="mt-4 mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="bg-primary h-2 w-2 animate-pulse rounded-full"></span>
          <span className="text-primary text-xs font-medium tracking-wide">
            18 Live Auctions Running Now
          </span>
        </div>

        <h1 className="mb-6 text-5xl leading-tight font-extrabold tracking-tight text-white md:text-6xl">
          The Enterprise Standard <br className="hidden md:block" />
          <span className="text-primary">for Real-Time Auctions</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          Server-authoritative live bidding, full compliance tracking, and
          multi-role workflows — built for auction houses, collectors, and
          enterprises that demand precision.
        </p>

        <div className="mb-20 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <button className="btn btn-primary w-full px-8 py-3.5 text-sm sm:w-auto">
            Start Bidding Free
          </button>
          <button className="btn btn-secondary w-full px-8 py-3.5 text-sm sm:w-auto">
            Browse Live Auctions
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid w-full grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4 md:gap-12">
          <div className="text-center">
            <h3 className="mb-2 font-mono text-3xl font-bold text-white md:text-4xl">
              4,800+
            </h3>
            <p className="text-xs font-medium tracking-wider text-slate-400 uppercase">
              Registered Bidders
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-mono text-3xl font-bold text-white md:text-4xl">
              $1.2B+
            </h3>
            <p className="text-xs font-medium tracking-wider text-slate-400 uppercase">
              Total Auction Volume
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-mono text-3xl font-bold text-white md:text-4xl">
              18
            </h3>
            <p className="text-xs font-medium tracking-wider text-slate-400 uppercase">
              Live Auctions Now
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-mono text-3xl font-bold text-white md:text-4xl">
              99.98%
            </h3>
            <p className="text-xs font-medium tracking-wider text-slate-400 uppercase">
              Platform Uptime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

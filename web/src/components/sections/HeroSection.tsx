export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1577720643272-265f09367456?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium text-primary tracking-wide">
            18 Live Auctions Running Now
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          The Enterprise Standard <br className="hidden md:block" />
          <span className="text-primary">for Real-Time Auctions</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed">
          Server-authoritative live bidding, full compliance tracking, and
          multi-role workflows — built for auction houses, collectors, and
          enterprises that demand precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24 w-full sm:w-auto">
          <button className="btn btn-primary sm:w-auto w-full text-lg px-8">
            Start Bidding Free
          </button>
          <button className="btn btn-secondary sm:w-auto w-full text-lg px-8">
            Browse Live Auctions
          </button>
        </div>

        {/* Stats Section */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/10">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              4,800+
            </h3>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Registered Bidders
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              $1.2B+
            </h3>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Total Auction Volume
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              18
            </h3>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Live Auctions Now
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              99.98%
            </h3>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Platform Uptime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

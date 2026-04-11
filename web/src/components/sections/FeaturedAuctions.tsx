import { MapPin, Gavel, ArrowRight } from "lucide-react";

// Using unsplash images for placeholders
const AUCTIONS = [
  {
    id: 1,
    title: "Fine Art & Collectibles — Spring 2026",
    category: "Fine Art",
    location: "New York, USA",
    lots: 48,
    estValue: "$18,000 – 32,000",
    currentBid: "$24,500",
    image:
      "https://images.unsplash.com/photo-1540833132641-fc8a0dbaff45?q=80&w=800&auto=format&fit=crop",
    status: "Live Now",
    statusColor: "bg-red-500",
  },
  {
    id: 2,
    title: "Luxury Timepieces & Jewelry Collection",
    category: "Jewelry",
    location: "London, UK",
    lots: 24,
    estValue: "$50,000 – 120,000",
    currentBid: "--",
    image:
      "https://images.unsplash.com/photo-1587836374828-cb43ea5a297e?q=80&w=800&auto=format&fit=crop",
    status: "Upcoming",
    statusColor: "bg-primary",
  },
  {
    id: 3,
    title: "Rare Vintage Automobiles — Estate Sale",
    category: "Automobiles",
    location: "Monaco",
    lots: 12,
    estValue: "$200,000 – 800,000",
    currentBid: "--",
    image:
      "https://images.unsplash.com/photo-1563720224167-2856f642da67?q=80&w=800&auto=format&fit=crop",
    status: "Upcoming",
    statusColor: "bg-primary",
  },
  {
    id: 4,
    title: "Contemporary Photography & Digital Art",
    category: "Photography",
    location: "Paris, France",
    lots: 36,
    estValue: "$5,000 – 15,000",
    currentBid: "$8,750",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    status: "Closed",
    statusColor: "bg-slate-500",
  },
  {
    id: 5,
    title: "Rare Books & Manuscripts — Private Collection",
    category: "Books",
    location: "Edinburgh, UK",
    lots: 60,
    estValue: "$2,000 – 45,000",
    currentBid: "--",
    image:
      "https://images.unsplash.com/photo-1469073087036-70eeb2d21ec2?q=80&w=800&auto=format&fit=crop",
    status: "Upcoming",
    statusColor: "bg-primary",
  },
  {
    id: 6,
    title: "Estate Wines & Spirits — Grand Cru Selection",
    category: "Wine & Spirits",
    location: "Chicago, USA",
    lots: 80,
    estValue: "$1,500 – 8,000",
    currentBid: "$3,200",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
    status: "Live Now",
    statusColor: "bg-red-500",
  },
];

export default function FeaturedAuctions() {
  return (
    <section className="section-container bg-[#fafafa]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
            Featured Auctions
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live & Upcoming Events
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors mt-4 md:mt-0"
        >
          View All Auctions <ArrowRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AUCTIONS.map((auction) => (
          <div key={auction.id} className="card group">
            <div className="relative h-60 overflow-hidden">
              <img
                src={auction.image}
                alt={auction.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold shadow-sm">
                <span
                  className={`w-2 h-2 rounded-full ${auction.statusColor}`}
                ></span>
                {auction.status}
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-white text-xs font-medium">
                {auction.category}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 leading-tight">
                {auction.title}
              </h3>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{auction.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gavel size={16} />
                  <span>{auction.lots} lots</span>
                </div>
              </div>

              <div className="flex justify-between items-end mt-auto pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase mb-1">
                    Est. Value
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    {auction.estValue}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-medium uppercase mb-1">
                    Current Bid
                  </p>
                  <p
                    className={`text-lg font-bold ${auction.currentBid !== "--" ? "text-primary" : "text-slate-400"}`}
                  >
                    {auction.currentBid}
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 py-2.5 rounded border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-colors text-sm">
                View Auction &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

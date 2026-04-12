import { MapPin, Gavel, ArrowRight } from "lucide-react";
import { AUCTION_IMAGES } from "@src/constants/auctionImages";

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
    image: AUCTION_IMAGES.antigueCamera,
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
    image: AUCTION_IMAGES.antigueLamp,
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
    image: AUCTION_IMAGES.boxBird,
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
    image: AUCTION_IMAGES.fordCar,
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
    image: AUCTION_IMAGES.pocketWatch,
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
    image: AUCTION_IMAGES.preciousLamp,
    status: "Live Now",
    statusColor: "bg-red-500",
  },
];

export default function FeaturedAuctions() {
  return (
    <section className="section-container bg-[#fafafa]">
      <div className="mb-10 flex flex-col items-end justify-between md:flex-row">
        <div>
          <h4 className="text-primary mb-2 text-sm font-semibold tracking-widest uppercase">
            Featured Auctions
          </h4>
          <h2 className="font-sans text-3xl font-semibold text-slate-900 md:text-4xl">
            Live & Upcoming Events
          </h2>
        </div>
        <a
          href="#"
          className="text-primary hover:text-primary-hover mt-4 flex items-center gap-2 text-sm font-medium transition-colors md:mt-0"
        >
          View All Auctions <ArrowRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {AUCTIONS.map((auction) => (
          <div key={auction.id} className="card group">
            <div className="relative h-60 overflow-hidden">
              <img
                src={auction.image}
                alt={auction.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur">
                <span
                  className={`h-2 w-2 rounded-full ${auction.statusColor}`}
                ></span>
                {auction.status}
              </div>
              <div className="absolute top-4 right-4 rounded-md bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                {auction.category}
              </div>
            </div>

            <div className="p-4">
              <h3 className="mb-3 line-clamp-2 text-sm leading-snug font-semibold text-slate-900">
                {auction.title}
              </h3>

              <div className="mb-3 flex items-center gap-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{auction.location}</span>
                </div>
                <span className="ms-1 text-slate-300">·</span>
                <div className="flex items-center gap-1">
                  <Gavel size={12} />
                  <span>{auction.lots} lots</span>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="mb-0.5 text-xs text-slate-400">Est. Value</p>
                  <p className="text-xs font-medium text-slate-600">
                    {auction.estValue}
                  </p>
                </div>
                <div className="text-right">
                  <p className="mb-0.5 text-xs text-slate-400">Current Bid</p>
                  <p
                    className={`text-base font-bold ${auction.currentBid !== "--" ? "text-primary font-mono" : "text-slate-400"}`}
                  >
                    {auction.currentBid}
                  </p>
                </div>
              </div>

              <button className="border-primary/20 text-primary hover:bg-primary/5 mt-3 h-9 w-full rounded-md border py-2.5 text-sm font-medium transition-colors">
                View Auction &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

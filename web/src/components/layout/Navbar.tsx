import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded shadow-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">A</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">
            AuctionPro
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Auctions
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Sign In
          </a>
          <button className="btn btn-primary px-5 py-2 text-sm rounded-md">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

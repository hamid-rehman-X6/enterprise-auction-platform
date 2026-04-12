import { useState, useEffect } from "react";
import { BRAND } from "@src/constants/brand";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafafa]/95 shadow-md backdrop-blur-md"
          : "bg-transparent py-2"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex cursor-pointer items-center gap-2">
          <img
            src={BRAND.logoWithoutText}
            alt="Auctora Logo"
            className="h-16 w-16 shrink-0 object-cover"
          />
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a
            href="#"
            className={`hover:text-primary transition-colors ${scrolled ? "text-secondary" : "text-white/90"}`}
          >
            Auctions
          </a>
          <a
            href="#"
            className={`hover:text-primary transition-colors ${scrolled ? "text-secondary" : "text-white/90"}`}
          >
            How It Works
          </a>
          <a
            href="#"
            className={`hover:text-primary transition-colors ${scrolled ? "text-secondary" : "text-white/90"}`}
          >
            About
          </a>
          <a
            href="#"
            className={`hover:text-primary transition-colors ${scrolled ? "text-secondary" : "text-white/90"}`}
          >
            FAQ
          </a>
          <a
            href="#"
            className={`hover:text-primary transition-colors ${scrolled ? "text-secondary" : "text-white/90"}`}
          >
            Contact
          </a>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className={`hover:text-primary text-sm font-medium transition-colors ${scrolled ? "text-secondary" : "text-white/90"}`}
          >
            Sign In
          </a>
          <button className="btn btn-primary rounded-md px-5 py-2 text-sm">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button className="p-2 text-white">
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

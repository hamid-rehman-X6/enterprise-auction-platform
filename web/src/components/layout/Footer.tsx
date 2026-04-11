// import { Twitter, , Github } from 'lucide-react';
import { BRAND } from "@src/constants/brand";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src={BRAND.logo}
                alt="Auctora Logo"
                className="h-40 w-40 shrink-0 object-cover"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-medium tracking-wider text-white uppercase">
              Platform
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Browse Auctions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-medium tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-medium tracking-wider text-white uppercase">
              Legal
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name} Enterprise. All
            rights reserved.
          </p>
          {/* <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <Github size={18} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

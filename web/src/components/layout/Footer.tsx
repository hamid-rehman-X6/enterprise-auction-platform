// import { Twitter, , Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs leading-none">
                  A
                </span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                AuctionPro
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Enterprise-grade real-time auction management for the world's
              leading auction houses and collectors.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium text-xs tracking-wider uppercase mb-6">
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
            <h4 className="text-white font-medium text-xs tracking-wider uppercase mb-6">
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
            <h4 className="text-white font-medium text-xs tracking-wider uppercase mb-6">
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} AuctionPro Enterprise. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              {/* <Twitter size={18} /> */}
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              {/* <Linkedin size={18} /> */}
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              {/* <Github size={18} /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

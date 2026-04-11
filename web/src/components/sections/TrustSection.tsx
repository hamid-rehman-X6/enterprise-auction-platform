import { BRAND } from "@src/constants/brand";
import { ShieldCheck, Eye, Headset, Globe } from "lucide-react";

const FEATURES = [
  {
    icon: <ShieldCheck className="text-primary h-6 w-6" />,
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption, 2FA, and SOC 2 Type II compliance protect every transaction.",
  },
  {
    icon: <Eye className="text-primary h-6 w-6" />,
    title: "Full Transparency",
    description:
      "Complete audit trails, bid histories, and compliance logs for every auction and participant.",
  },
  {
    icon: <Headset className="text-primary h-6 w-6" />,
    title: "24/7 Expert Support",
    description:
      "Dedicated auction specialists and compliance officers available around the clock.",
  },
  {
    icon: <Globe className="text-primary h-6 w-6" />,
    title: "Global Reach",
    description:
      "Participate in auctions from 40+ countries with multi-currency support and local compliance.",
  },
];

const TESTIMONIALS = [
  {
    quote: `"${BRAND.name} has transformed how I acquire fine art. The real-time bidding experience is unmatched — transparent, fast, and completely trustworthy."`,
    author: "Sir Edward Blackwood",
    role: "Private Collector, London",
    init: "EB",
  },
  {
    quote:
      '"As a seller, the control panel gives us everything we need. Live auction management, instant analytics, and compliance tools all in one place."',
    author: "Marguerite Fontaine",
    role: "Director, Maison Fontaine Auctions",
    init: "MF",
  },
  {
    quote:
      '"The RBAC system and audit logs give our compliance team complete confidence. We\'ve processed over $50M through the platform without a single issue."',
    author: "Hiroshi Tanaka",
    role: "Head of Acquisitions, Tanaka Holdings",
    init: "HT",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white">
      {/* Features Top Half */}
      <div className="section-container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h4 className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
            Trust & Compliance
          </h4>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Built for Enterprise Standards
          </h2>
          <p className="text-lg text-slate-500">
            Every feature is designed with compliance, security, and
            auditability at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              className="card group hover:border-primary/30 p-8 transition-colors"
            >
              <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                {feat.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {feat.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Bottom Half */}
      <div className="border-t border-slate-200 bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h4 className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
              Testimonials
            </h4>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card justify-between p-8">
                <div>
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-8 text-lg leading-relaxed text-slate-600 italic">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-dark flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full text-sm font-bold tracking-widest text-white">
                    {t.init}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.author}</h5>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

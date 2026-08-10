import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { brand, services } from "@/lib/siteData";

const columns = [
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/reviews", label: "Google Reviews" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 6).map((s) => ({ href: `/services/${s.slug}`, label: s.shortTitle })),
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F1A] text-white mt-24 overflow-hidden noise">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[80%] rounded-full bg-[#2563EB]/25 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white font-display font-bold text-sm">
                BS
              </span>
              <span className="font-display font-semibold text-lg">{brand.shortName}</span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              {brand.descriptor} Based in {brand.city}, working with local businesses who want a website that actually earns its keep.
            </p>
            <div className="flex items-center gap-3">
              <a href={brand.social.instagram} aria-label="Instagram" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram size={16} />
              </a>
              <a href={brand.social.linkedin} aria-label="LinkedIn" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href={brand.social.facebook} aria-label="Facebook" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow !text-white/40 mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/65 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-white/60">
            <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={15} /> {brand.email}
            </a>
            <a href={`tel:+${brand.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={15} /> {brand.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={15} /> {brand.city}, {brand.region}
            </span>
          </div>
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

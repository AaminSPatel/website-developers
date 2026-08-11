"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { brand } from "@/lib/siteData";
import {  FaWhatsapp } from "react-icons/fa6";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "bg-white shadow-[0_8px_30px_rgba(17,17,17,0.08)]" : "bg-white"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full ">
               <img src="/icon.png" alt="Business Sathi Logo icon" className="" />
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-brand opacity-0 group-hover:opacity-40 blur-md transition-opacity" />
            </span>
            <span className="font-display font-semibold text-[17px] tracking-tight">
              {brand.shortName}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname === l.href
                    ? "text-[#2563EB]"
                    : "text-[#111111]/75 hover:text-[#111111]"
                }`}
              >
                {l.label}
                {pathname === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-[#2563EB]/8"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${brand.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              <FaWhatsapp size={16} strokeWidth={2.4} />
              Free Consultation
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[#111111]/5"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mx-4 mt-2 rounded-3xl bg-white shadow-[0_20px_50px_rgba(17,17,17,0.15)] overflow-hidden"
          >
            <div className="flex flex-col p-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-medium ${
                      pathname === l.href
                        ? "text-[#2563EB] bg-[#2563EB]/8"
                        : "text-[#111111]"
                    }`}
                  >
                    {l.label}
                    <ArrowUpRight size={16} className="opacity-40" />
                  </Link>
                </motion.div>
              ))}
              <a
                href={`https://wa.me/${brand.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 w-full justify-center"
              >
                <FaWhatsapp size={16} />
                Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Globe } from "lucide-react";

const solutions = [
  { key: "cybersecurity", href: "cybersecurity" },
  { key: "cloud", href: "cloud-computing" },
  { key: "xdr", href: "xdr-mdr" },
  { key: "iot", href: "iot-ai" },
  { key: "networking", href: "networking" },
  { key: "itops", href: "it-operations" },
  { key: "professional", href: "professional-services" },
];

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ar", label: "عربي", flag: "🇸🇦" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const ts = useTranslations("solutions_menu");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image src="/logos/logo-white.png" alt="UDC" width={120} height={48} className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {["", "about"].map((page) => (
              <Link key={page} href={`/${locale}${page ? `/${page}` : ""}`}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                {page === "" ? t("home") : t(page as any)}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <button className="flex items-center gap-1 text-white/70 hover:text-white transition-colors text-sm font-medium">
                {t("solutions")} <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {solutions.map((s) => (
                      <Link key={s.href} href={`/${locale}/solutions/${s.href}`}
                        className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-cyan-500/10 transition-all text-sm border-b border-white/5 last:border-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {ts(s.key as any)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["services", "vendors", "insights", "careers"].map((page) => (
              <Link key={page} href={`/${locale}/${page}`}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                {t(page as any)}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
              <button className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors">
                <Globe className="w-4 h-4" />
                {languages.find(l => l.code === locale)?.label}
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full right-0 mt-2 bg-black/90 border border-cyan-500/20 rounded-xl overflow-hidden shadow-xl w-32"
                  >
                    {languages.map((lang) => (
                      <Link key={lang.code} href={`/${lang.code}`}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-all hover:bg-cyan-500/10 ${locale === lang.code ? "text-cyan-400" : "text-white/60 hover:text-white"}`}>
                        <span>{lang.flag}</span><span>{lang.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href={`/${locale}/contact`}
              className="bg-primary hover:bg-accent transition-all duration-300 text-white px-5 py-2.5 rounded-lg text-sm font-semibold neon-blue">
              {t("contact")}
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-cyan-500/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {["", "about", "services", "vendors", "insights", "careers", "contact"].map((page) => (
                <Link key={page} href={`/${locale}${page ? `/${page}` : ""}`}
                  className="block text-white/70 hover:text-white py-2 border-b border-white/5 text-sm"
                  onClick={() => setMobileOpen(false)}>
                  {page === "" ? t("home") : t(page as any)}
                </Link>
              ))}
              <div className="pt-3 flex gap-2">
                {languages.map((lang) => (
                  <Link key={lang.code} href={`/${lang.code}`}
                    className={`px-3 py-1.5 rounded-lg text-xs border ${locale === lang.code ? "border-cyan-400 text-cyan-400" : "border-white/20 text-white/50"}`}>
                    {lang.flag} {lang.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

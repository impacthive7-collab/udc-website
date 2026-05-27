"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Cloud, Network, Eye, Cpu, Settings, Briefcase, ChevronRight } from "lucide-react";

const solutions = [
  { icon: Shield, key: "cybersecurity", href: "cybersecurity", color: "from-blue-600 to-blue-800", desc: "Comprehensive cybersecurity solutions to protect your organization from evolving threats." },
  { icon: Cloud, key: "cloud", href: "cloud-computing", color: "from-cyan-600 to-blue-700", desc: "Scalable cloud infrastructure and migration services tailored for Saudi enterprises." },
  { icon: Eye, key: "xdr", href: "xdr-mdr", color: "from-purple-600 to-blue-800", desc: "Extended Detection & Response plus Managed Detection & Response for 24/7 threat coverage." },
  { icon: Cpu, key: "iot", href: "iot-ai", color: "from-indigo-600 to-purple-700", desc: "IoT and AI solutions to drive digital transformation and operational efficiency." },
  { icon: Network, key: "networking", href: "networking", color: "from-blue-700 to-cyan-700", desc: "Enterprise networking solutions for secure, reliable, and high-performance connectivity." },
  { icon: Settings, key: "itops", href: "it-operations", color: "from-slate-600 to-blue-700", desc: "IT Operations management to optimize infrastructure performance and reduce downtime." },
  { icon: Briefcase, key: "professional", href: "professional-services", color: "from-primary to-accent", desc: "Professional consulting, training, and support services from certified experts." },
];

export default function SolutionsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("solutions_menu");

  return (
    <div className="overflow-hidden">
      <section className="relative pt-48 pb-28 min-h-[60vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-75">
          <source src="/videos/banner-solutions.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050a14]/65 to-[#050a14]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/20 border border-primary/40 text-accent text-sm px-4 py-2 rounded-full mb-6 font-medium">
              Technology Solutions
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6">Our Solutions</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Specialized IT solutions across key domains to empower Saudi Arabia's digital future.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(({ icon: Icon, key, href, color, desc }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={`/${locale}/solutions/${href}`}
                  className="block gradient-border rounded-2xl p-8 hover:bg-primary/10 transition-all group h-full"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{t(key as any)}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

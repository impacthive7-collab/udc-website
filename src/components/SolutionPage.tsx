"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Cloud, Eye, Cpu, Network, Settings, Briefcase, CheckCircle, ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = {
  Shield, Cloud, Eye, Cpu, Network, Settings, Briefcase
};

const vendorLogos: Record<string, string> = {
  "Sangfor": "/logos/sangfor.png",
  "LenSec": "/logos/lensec.png",
  "Cyphercor": "/logos/asset-5.png",
  "Zinad": "/logos/zinad.png",
  "Tech Arm": "/logos/techarm.png",
  "SecureMagnus": "/logos/securemag.png",
  "SecureGate": "/logos/securegate.png",
  "Vinchin": "/logos/vinchin.png",
  "Sundray": "/logos/sundray.png",
  "C4": "/logos/c4.png",
};

interface SolutionPageProps {
  locale: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  relatedVendors: string[];
  gradient: string;
}

export default function SolutionPage({
  locale, iconName, title, subtitle, description, features, relatedVendors, gradient
}: SolutionPageProps) {
  const Icon = iconMap[iconName] || Shield;
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-48 pb-28 min-h-[60vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-75">
          <source src="https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/banner-solutions.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050a14]/65 to-[#050a14]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-8`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-4">{title}</h1>
            <p className="text-accent text-xl font-medium mb-6">{subtitle}</p>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">{description}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
      </section>

      {/* Features */}
      <section className="py-24 relative overflow-hidden">
        {/* Circuit board background */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-bg-circuit.png')" }} />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-white mb-2">Key Capabilities</h2>
            <div className="w-16 h-1 bg-cyan-400 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="flex items-center gap-4 rounded-xl p-5 border border-cyan-500/15 hover:border-cyan-500/40 cursor-default transition-all"
                style={{ background: "linear-gradient(135deg, rgba(26,69,145,0.25) 0%, rgba(0,0,0,0.6) 100%)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-white/85 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Vendors */}
      {relatedVendors.length > 0 && (
        <section className="py-16 border-y border-cyan-500/10" style={{ background: "linear-gradient(180deg, rgba(10,22,50,0.8) 0%, rgba(0,0,0,0.9) 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-white mb-10 text-center">Related Vendors</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedVendors.map((vendor) => {
                const logo = vendorLogos[vendor];
                return (
                  <div
                    key={vendor}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
                    style={{ background: "linear-gradient(135deg, rgba(26,69,145,0.3) 0%, rgba(0,0,0,0.6) 100%)" }}
                  >
                    {logo && (
                      <div className="relative w-16 h-7 flex-shrink-0">
                        <Image src={logo} alt={vendor} fill className="object-contain filter brightness-[3] contrast-75" />
                      </div>
                    )}
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{vendor}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-network-bg2.jpg')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl mx-auto px-4"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8 text-lg">Contact our team to learn how we can help your organization.</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent transition-all text-white font-bold px-10 py-4 rounded-xl neon-blue"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

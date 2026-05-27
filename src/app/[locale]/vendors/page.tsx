"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const vendors = [
  {
    name: "Sangfor Technologies",
    tag: "Cloud Computing & Network Security",
    desc: "A leading global vendor of IT infrastructure solutions, specializing in Cloud Computing & Network Security.",
    logo: "/logos/sangfor.png",
    video: "/videos/vendor-1.mp4",
    website: "https://www.sangfor.com",
  },
  {
    name: "LenSec",
    tag: "Customer-Centric Innovation",
    desc: "Creating tailored solutions that meet the unique needs of every customer, turning complex challenges into efficient solutions.",
    logo: "/logos/lensec.png",
    video: "/videos/vendor-2.mp4",
    website: "https://www.lensec.com",
  },
  {
    name: "Cyphercor",
    tag: "Supply Chain Security",
    desc: "Specializes in supply chain risk management and advanced IT engineering services.",
    logo: null,
    video: "/videos/vendor-3.mp4",
    website: "https://www.cyphercor.com/",
  },
  {
    name: "C4 Integrated Security",
    tag: "First Distributor in KSA & Gulf",
    desc: "UDC is the first authorized distributor of C4 Integrated Security Systems in Saudi Arabia and the Gulf region.",
    logo: "/logos/c4.png",
    video: "/videos/vendor-4.mp4",
    website: "http://www.c4portal.com",
  },
  {
    name: "Zinad",
    tag: "Human Threat Intelligence",
    desc: "Protection is our profession. Leading provider of security awareness training — empowering organizations to build a human firewall.",
    logo: "/logos/zinad.png",
    video: "/videos/vendor-5.mp4",
    website: "https://www.zinad.net",
  },
  {
    name: "Tech Arm",
    tag: "Enterprise Solutions",
    desc: "Delivering enterprise solutions that streamline business operations and drive efficiency across digital innovation and telecom.",
    logo: "/logos/techarm.png",
    video: "/videos/vendor-6.mp4",
    website: "http://tech-arm.com/",
  },
  {
    name: "SecureMagnus",
    tag: "Advanced Cybersecurity",
    desc: "An advanced solutions and cybersecurity provider that enhances and protects organizations from threats while meeting compliance.",
    logo: "/logos/securemag.png",
    video: "/videos/vendor-7.mp4",
    website: "https://www.securemagnusgroup.com",
  },
  {
    name: "SecureGate",
    tag: "Security Solutions",
    desc: "Advanced cybersecurity solutions provider protecting your organization from evolving threats and meeting compliance requirements.",
    logo: "/logos/securegate.png",
    video: "/videos/vendor-10.mp4",
    website: "https://www.securegate.it/en/",
  },
  {
    name: "Vinchin",
    tag: "Data Protection & Backup",
    desc: "Leading provider of enterprise data protection. Specializing in backup, instant recovery, and migration across all platforms.",
    logo: "/logos/vinchin.png",
    video: "/videos/vendor-8.mp4",
    website: "https://www.vinchin.com",
  },
  {
    name: "Sundray",
    tag: "Intelligent Networking",
    desc: "A Sangfor brand — the best all-in-one Wi-Fi and V-Sec switch provider, with X-LINK Cloud for SMB networks.",
    logo: "/logos/sundray.png",
    video: "/videos/vendor-9.mp4",
    website: "https://www.sundray.com.cn",
  },
];

function VendorCard({ vendor, index }: { vendor: (typeof vendors)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group relative rounded-2xl overflow-hidden tech-card"
    >
      {/* Video background */}
      <div className="relative h-48 overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
        >
          <source src={vendor.video} type="video/mp4" />
        </video>
        {/* Asset 13 gradient overlay */}
        <div className="vendor-card-bg absolute inset-0 opacity-70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Logo */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 flex items-center justify-center min-w-[110px] h-11">
            {vendor.logo ? (
              <Image
                src={vendor.logo}
                alt={vendor.name}
                width={90}
                height={34}
                className="object-contain max-h-9 filter brightness-[3] contrast-75 drop-shadow-lg"
              />
            ) : (
              <span className="text-white font-bold text-sm tracking-wide">{vendor.name}</span>
            )}
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full">
            {vendor.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">
          {vendor.name}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4">{vendor.desc}</p>
        <a
          href={vendor.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-cyan-400 hover:text-white text-sm font-medium transition-all group-hover:gap-2"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Neon border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-cyan-500/0 group-hover:border-cyan-500/30 transition-colors pointer-events-none" />
    </motion.div>
  );
}

export default function VendorsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("vendors_page");

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-52 pb-36 min-h-[60vh] overflow-hidden flex items-center">
        {/* Banner video */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/videos/banner-vendors.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050a14]/50 to-[#050a14]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              Our Partners
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6">{t("hero_title")}</h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">{t("hero_sub")}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050a14] to-transparent" />
      </section>

      {/* Vendors Grid */}
      <section className="py-24 tech-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor, i) => (
              <VendorCard key={vendor.name} vendor={vendor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="text-3xl font-black text-white mb-4">Become a Partner</h2>
          <p className="text-white/40 mb-8">Interested in joining our vendor ecosystem? Let's connect.</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent transition-colors text-white font-semibold px-8 py-4 rounded-xl neon-blue"
          >
            Get In Touch <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

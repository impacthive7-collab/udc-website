"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Users, Zap, Network, ArrowRight, CheckCircle } from "lucide-react";

const icons = [Globe, Users, Zap, Network];
const images = [
  "/images/professional-handshake.jpg",
  "/images/about-meeting.jpg",
  "/images/digital-transform.jpg",
  "/images/itops.jpg",
];
const features = [
  ["Market analysis & entry strategy", "Regulatory compliance support", "Local partner identification", "Go-to-market planning"],
  ["System integrator recruitment", "Technical enablement & training", "Joint business planning", "Deal registration & support"],
  ["Digital readiness assessment", "Technology roadmap design", "Implementation oversight", "Change management"],
  ["Channel program design", "Distributor & reseller network", "Marketing & demand generation", "Performance monitoring"],
];

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("services");

  const services = [
    { title: t("s1_title"), desc: t("s1_desc"), num: "01" },
    { title: t("s2_title"), desc: t("s2_desc"), num: "02" },
    { title: t("s3_title"), desc: t("s3_desc"), num: "03" },
    { title: t("s4_title"), desc: t("s4_desc"), num: "04" },
  ];

  return (
    <div className="overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative pt-48 pb-28 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-75">
          <source src="/videos/banner-services.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050a14]/65 to-[#050a14]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              {t("what_we_do") || "What We Do"}
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6">{t("hero_title")}</h1>
            <p className="text-white/50 text-xl max-w-3xl mx-auto leading-relaxed">{t("hero_sub")}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050a14] to-transparent" />
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-[#050a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map(({ title, desc, num }, i) => {
            const Icon = icons[i];
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-cyan-500/15 hover:border-cyan-500/30 transition-all group"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(26,69,145,0.2) 40%, rgba(10,22,50,0.65) 70%, rgba(0,0,0,0.88) 100%)" }}
              >
                <div className={`grid lg:grid-cols-2 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto overflow-hidden ${!isEven ? "lg:order-2" : ""}`}>
                    <Image
                      src={images[i]}
                      alt={title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                    {/* Number overlay */}
                    <div className="absolute top-6 left-6">
                      <span className="text-7xl font-black text-white/10 select-none">{num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-10 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">{num}</span>
                    </div>
                    <h3 className="text-white font-black text-2xl sm:text-3xl mb-4">{title}</h3>
                    <p className="text-white/50 leading-relaxed mb-6">{desc}</p>
                    {/* Feature list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {features[i].map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-white/60 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-white font-semibold text-sm transition-all group/btn w-fit">
                      Get Started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/udc-bg.jpg')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Partner with UDC?</h2>
          <p className="text-white/50 mb-8">Let's build your path to Saudi Arabia's digital market together.</p>
          <Link href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent transition-colors text-white font-bold px-10 py-4 rounded-xl neon-blue">
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

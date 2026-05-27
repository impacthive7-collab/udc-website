"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Eye, Zap, Star, TrendingUp, Globe } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");

  const values = [
    { icon: Shield, key: "val1", desc: "val1_desc", color: "text-blue-400" },
    { icon: Eye, key: "val2", desc: "val2_desc", color: "text-cyan-400" },
    { icon: Zap, key: "val3", desc: "val3_desc", color: "text-purple-400" },
    { icon: Star, key: "val4", desc: "val4_desc", color: "text-yellow-400" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-48 pb-28 min-h-[60vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-75">
          <source src="https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/banner-about.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050a14]/60 to-[#050a14]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/20 border border-primary/40 text-accent text-sm font-medium px-4 py-2 rounded-full mb-6">
              About UDC
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6">{t("hero_title")}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">{t("hero_sub")}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-white mb-6">{t("story_title")}</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{t("story_desc")}</p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-primary" />
                <span className="text-accent font-semibold">Est. 2025 · Saudi Arabia</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "2025", label: "Founded" },
                { num: "9+", label: "Global Vendors" },
                { num: "6+", label: "Gov. Clients" },
                { num: "#1", label: "KSA Digital Rank" },
              ].map(({ num, label }) => (
                <div key={label} className="gradient-border rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-accent mb-2">{num}</div>
                  <div className="text-white/60 text-sm">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: t("mission_title"), desc: t("mission_desc"), icon: TrendingUp, gradient: "from-blue-600/20 to-primary/20" },
              { title: t("vision_title"), desc: t("vision_desc"), icon: Globe, gradient: "from-cyan-600/20 to-blue-600/20" },
            ].map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="rounded-2xl p-10 border border-cyan-500/20 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0d1f45 0%, #1a4591 50%, #0a3060 100%)" }}
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-udc-bg.jpg')" }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
                  <p className="text-white/70 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t("values_title")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, key, desc, color }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl p-8 text-center border border-cyan-500/15 hover:border-cyan-500/35 transition-all"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(26,69,145,0.25) 40%, rgba(10,22,50,0.7) 70%, rgba(0,0,0,0.9) 100%)" }}
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{t(key as any)}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{t(desc as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-8xl font-black text-primary/20 mb-4">#1</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{t("market_title")}</h2>
            <p className="text-white/60 text-lg leading-relaxed">{t("market_desc")}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

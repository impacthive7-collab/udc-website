"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Cloud, Network, Eye, Cpu, Settings, Briefcase, ArrowRight, Globe, Award, Star, Users, CheckCircle } from "lucide-react";

// ── Animated Counter ──
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 80);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Section Arrow Link ──
function SectionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="arrow-btn group mt-4">
      {label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

const solutions = [
  { icon: Shield, key: "cybersecurity", href: "cybersecurity", img: "https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-cybersecurity.png", tags: ["Cybersecurity", "NCA Compliant"], desc: "Secure your digital assets with NCA and PDPL-compliant protection tailored to the Saudi market." },
  { icon: Cloud, key: "cloud", href: "cloud-computing", img: "https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-cloud.png", tags: ["Cloud", "Infrastructure"], desc: "Scalable cloud solutions and migration services for Saudi enterprises." },
  { icon: Eye, key: "xdr", href: "xdr-mdr", img: "https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-xdr.png", tags: ["XDR", "MDR", "SOC"], desc: "24/7 threat detection and response across your entire digital environment." },
  { icon: Cpu, key: "iot", href: "iot-ai", img: "https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-iot.png", tags: ["IoT", "AI"], desc: "Harness IoT and AI to drive operational efficiency and digital transformation." },
  { icon: Network, key: "networking", href: "networking", img: "https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-networking.jpg", tags: ["SD-WAN", "Wi-Fi"], desc: "High-performance secure networking for enterprise and campus environments." },
  { icon: Settings, key: "itops", href: "it-operations", img: "https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-itops.jpg", tags: ["IT Ops", "ITSM"], desc: "Optimize infrastructure performance and minimize downtime across your IT stack." },
  { icon: Briefcase, key: "professional", href: "professional-services", img: "https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-professional.jpg", tags: ["Consulting", "Training"], desc: "Expert consulting, certified training, and full project implementation support." },
];

const vendors = [
  { name: "Sangfor", logo: "/logos/sangfor.png" },
  { name: "LenSec", logo: "/logos/lensec.png" },
  { name: "Cyphercor", logo: null },
  { name: "Zinad", logo: "/logos/zinad.png" },
  { name: "Tech Arm", logo: "/logos/techarm.png" },
  { name: "SecureMagnus", logo: "/logos/securemag.png" },
  { name: "SecureGate", logo: "/logos/securegate.png" },
  { name: "Vinchin", logo: "/logos/vinchin.png" },
  { name: "Sundray", logo: "/logos/sundray.png" },
  { name: "C4", logo: "/logos/c4.png" },
];

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("hero");
  const ts = useTranslations("solutions_section");
  const tv = useTranslations("vendors_section");
  const tw = useTranslations("why");
  const tc = useTranslations("cta_banner");
  const tsm = useTranslations("solutions_menu");
  const tst = useTranslations("stats");
  const tn = useTranslations("nav");
  const tha = useTranslations("home_about");
  const ths = useTranslations("home_services");
  const thv = useTranslations("home_vendors");
  const thg = useTranslations("home_gov");

  return (
    <div className="overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Static hero background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-hero-bg.jpg')" }} />

        {/* Hero main video */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/aerial-drone.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#050a14]/50 to-[#050a14]" />

        {/* Neon orbs */}
        {[
          { size: 600, x: "-15%", y: "-10%", delay: 0 },
          { size: 400, x: "70%", y: "50%", delay: 2 },
          { size: 300, x: "40%", y: "20%", delay: 4 },
        ].map((orb, i) => (
          <motion.div key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: orb.size, height: orb.size,
              left: orb.x, top: orb.y,
              background: `radial-gradient(circle, rgba(0,102,255,0.12), transparent 70%)`,
              filter: "blur(40px)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, delay: orb.delay }}
          />
        ))}

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/40 pointer-events-none"
            style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {t("badge")}
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-white">{t("headline1")}</span><br />
            <span className="shimmer-text">{t("headline2")}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("sub")}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/solutions`}
              className="group inline-flex items-center gap-2 bg-primary hover:bg-accent transition-all duration-300 text-white font-bold px-8 py-4 rounded-xl neon-blue">
              {t("cta1")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 border border-cyan-500/30 hover:border-cyan-400 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-sm">
              {t("cta2")}
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050a14] to-transparent" />
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 bg-black/50 border-y border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 9, suffix: "+", label: tst("vendors"), icon: Globe },
              { num: 6, suffix: "+", label: tst("clients"), icon: Award },
              { num: 2025, suffix: "", label: tst("founded"), icon: Star },
              { num: 1, suffix: "", label: tst("ksa"), icon: Users },
            ].map(({ num, suffix, label, icon: Icon }, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-4xl font-black text-white mb-1 neon-text">
                  <AnimatedCounter target={num} suffix={suffix} />
                </div>
                <div className="text-white/40 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS SECTION ─── */}
      <section className="py-24 tech-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{ts("title")}</h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">{ts("sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {solutions.map(({ icon: Icon, key, href, img, tags, desc }, i) => (
              <motion.div key={href}
                initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                whileHover={{ y: -6 }}>
                <Link href={`/${locale}/solutions/${href}`}
                  className="block rounded-2xl overflow-hidden group h-full bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image src={img} alt={key} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {tags.map(tag => (
                        <span key={tag} className="bg-black/50 backdrop-blur-sm text-white/90 text-xs font-medium px-2.5 py-1 rounded-full border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 bg-[#0a1628]">
                    <h3 className="text-white font-bold text-base mb-2">{tsm(key as any)}</h3>
                    <p className="text-white/50 text-xs leading-relaxed mb-3">{desc}</p>
                    <span className="arrow-btn text-xs">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIPS SECTION ─── */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-12 h-1 bg-cyan-400 rounded-full mb-8" />
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Empowering Saudi Enterprises Through{" "}
                <span className="shimmer-text">Global Partnerships</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                UDC works closely with world-class technology vendors and industry leaders to bring cutting-edge innovation, secure infrastructure, and future-ready solutions to organizations across Saudi Arabia.
              </p>
              <p className="text-white/50 leading-relaxed">
                Our growing ecosystem of strategic partnerships enables us to deliver scalable technologies aligned with the evolving needs of the regional enterprise market.
              </p>
            </motion.div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden border border-cyan-500/20"
            >
              <Image
                src="https://res.cloudinary.com/dnoek2kh5/image/upload/v1779936480/udc-website/img-partnerships.webp"
                alt="Global Partnerships"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VISION SECTION ─── */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-cyan-500/20">
            {/* Video side */}
            <div className="relative h-72 lg:h-auto min-h-[400px]">
              <video autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover">
                <source src="https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/vision-section.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
              {/* Overlay badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 text-cyan-400 text-xs font-bold px-4 py-2 rounded-full">
                  Vision 2030
                </span>
              </div>
            </div>

            {/* Text side */}
            <div className="relative p-10 lg:p-14 flex flex-col justify-center"
              style={{ background: "linear-gradient(135deg, #0d1f45 0%, #091530 50%, #000000 100%)" }}>
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5"
                style={{ backgroundImage: "url('https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-udc-bg.jpg')", backgroundSize: "cover" }} />

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-12 h-1 bg-cyan-400 rounded-full mb-8" />
                <p className="text-white/90 text-xl sm:text-2xl font-light leading-relaxed mb-8">
                  <span className="text-white font-bold">In Saudi Arabia,</span> transformation is the national standard.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Ultimate Distribution Company delivers the <span className="text-cyan-400 font-semibold">high velocity distribution</span> required to outpace Vision 2030 milestones. We turn global innovation into a local competitive edge.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-0.5 bg-cyan-500/50" />
                  <span className="text-white/40 text-sm uppercase tracking-widest">Ultimate Distribution Co.</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GATEWAY SECTION ─── */}
      <section className="py-16 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-cyan-500/20">
            {/* Text side — LEFT this time */}
            <div className="relative p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1"
              style={{ background: "linear-gradient(135deg, #000000 0%, #091530 50%, #0d1f45 100%)" }}>
              <div className="absolute bottom-0 left-0 w-40 h-40 opacity-5"
                style={{ backgroundImage: "url('https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-udc-bg.jpg')", backgroundSize: "cover" }} />
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-12 h-1 bg-cyan-400 rounded-full mb-8" />
                <p className="text-white/90 text-xl sm:text-2xl font-light leading-relaxed mb-6">
                  <span className="text-white font-bold">Ultimate Distribution Company</span> is the definitive gateway to Saudi Arabia.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  We've traded generic distribution for <span className="text-cyan-400 font-semibold">precision strategy</span>, aligning world class vendors with the Kingdom's most influential partners to unlock immediate commercial value.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-0.5 bg-cyan-500/50" />
                  <span className="text-white/40 text-sm uppercase tracking-widest">The Definitive Gateway</span>
                </div>
              </motion.div>
            </div>
            {/* Video side — RIGHT */}
            <div className="relative h-72 lg:h-auto min-h-[400px] order-1 lg:order-2">
              <video autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover">
                <source src="https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/gateway-section.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />
              <div className="absolute top-6 right-6">
                <span className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 text-cyan-400 text-xs font-bold px-4 py-2 rounded-full">
                  Precision Strategy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4 block">{tha("badge")}</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">{tha("title")}</h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">{tha("desc")}</p>
              <div className="flex flex-col gap-3 mb-8">
                {[tha("check1"), tha("check2"), tha("check3"), tha("check4")].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <SectionLink href={`/${locale}/about`} label={tn("about")} />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 tech-card">
              <Image src="https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-hero-cover.png" alt="About UDC" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4">
                  <div className="text-cyan-400 font-bold text-2xl">#1</div>
                  <div className="text-white/70 text-sm">{tha("stat")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES TEASER ─── */}
      <section className="py-24 tech-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4 block">{ths("badge")}</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{ths("title")}</h2>
            <p className="text-white/40 max-w-xl mx-auto">{ths("sub")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { num: "01", title: ths("s1_title"), desc: ths("s1_desc") },
              { num: "02", title: ths("s2_title"), desc: ths("s2_desc") },
              { num: "03", title: ths("s3_title"), desc: ths("s3_desc") },
              { num: "04", title: ths("s4_title"), desc: ths("s4_desc") },
            ].map(({ num, title, desc }, i) => (
              <motion.div key={num}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 border border-cyan-500/15 hover:border-cyan-500/35 transition-all"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(26,69,145,0.25) 40%, rgba(10,22,50,0.7) 70%, rgba(0,0,0,0.9) 100%)" }}>
                <div className="text-5xl font-black text-cyan-500/20 mb-3">{num}</div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SectionLink href={`/${locale}/services`} label={tn("services")} />
          </div>
        </div>
      </section>

      {/* ─── VENDORS SECTION ─── */}
      <section className="py-20 bg-black border-y border-cyan-500/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3 block">{thv("badge")}</span>
          <h2 className="text-3xl font-black text-white mb-2">{thv("title")}</h2>
          <p className="text-white/40 text-sm">{thv("sub")}</p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden py-4">
          <div className="marquee-track flex gap-12 w-max">
            {[...vendors, ...vendors].map((v, i) => (
              <div key={i} className="flex-shrink-0 flex items-center px-6 py-3 tech-card rounded-xl min-w-[150px] justify-center">
                {v.logo ? (
                  <div className="relative w-24 h-9">
                    <Image src={v.logo} alt={v.name} fill className="object-contain filter brightness-[3] contrast-75 drop-shadow" />
                  </div>
                ) : (
                  <span className="text-white/70 font-bold text-sm">{v.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <SectionLink href={`/${locale}/vendors`} label={tn("vendors")} />
        </div>
      </section>



      {/* ─── GOV CLIENTS ─── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4 block">{thg("badge")}</span>
            <h2 className="text-4xl font-black text-white mb-4">{thg("title")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "KSAU", desc: "King Saud bin Abdulaziz University for Health Sciences", video: "https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/vendor-1.mp4" },
              { name: "General Presidency", desc: "General Presidency for the Promotion of Virtue and Prevention of Vice", video: "https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/vendor-2.mp4" },
              { name: "Jeddah Chamber", desc: "Jeddah Chamber of Commerce & Industry", video: "https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/vendor-3.mp4" },
              { name: "Saudi Post (SPL)", desc: "Saudi Post Corporation", video: "https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/vendor-4.mp4" },
              { name: "Madinah Dev. Authority", desc: "Madinah Region Development Authority", video: "https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/vendor-5.mp4" },
              { name: "Emirate of Tabuk", desc: "Emirate of Tabuk Province", video: "https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/vendor-6.mp4" },
            ].map((client, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl overflow-hidden border border-cyan-500/15 hover:border-cyan-500/35 transition-all group"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(26,69,145,0.25) 40%, rgba(10,22,50,0.7) 70%, rgba(0,0,0,0.9) 100%)" }}
              >
                {/* Video */}
                <div className="relative h-36 overflow-hidden">
                  <video autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500">
                    <source src={client.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full">
                      {client.name}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <p className="text-white/50 text-sm leading-relaxed">{client.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-bg-circuit.png')" }} />
          <div className="absolute inset-0 bg-black/70" />
          <motion.div className="absolute w-[600px] h-[600px] rounded-full opacity-10 -top-1/2 left-1/2 -translate-x-1/2"
            style={{ background: "radial-gradient(circle, #0066ff, transparent)" }}
            animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 5, repeat: Infinity }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black text-white mb-6">{tc("title")}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-white/50 text-xl mb-10">{tc("sub")}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-accent hover:bg-primary transition-all duration-300 text-white font-bold px-12 py-5 rounded-xl text-lg neon-blue">
              {tc("btn")} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

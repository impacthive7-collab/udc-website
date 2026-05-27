"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/20 border border-primary/40 text-accent text-sm font-medium px-4 py-2 rounded-full mb-6">
              Let's Talk
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6">{t("hero_title")}</h1>
            <p className="text-white/60 text-xl">{t("hero_sub")}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-20 h-20 text-accent mx-auto" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-white">Message Sent!</h3>
                  <p className="text-white/60">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-3xl font-black text-white mb-8">Send us a message</h2>
                  {[
                    { key: "name", type: "text", label: t("name") },
                    { key: "email", type: "email", label: t("email") },
                    { key: "company", type: "text", label: t("company") },
                  ].map(({ key, type, label }) => (
                    <div key={key}>
                      <label className="block text-white/60 text-sm mb-2">{label}</label>
                      <input
                        type={type}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full bg-card border border-primary/30 focus:border-accent rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">{t("message")}</label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-card border border-primary/30 focus:border-accent rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-accent transition-colors text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 group"
                  >
                    {t("send")}
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-black text-white">{t("info_title")}</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "info@udc.net.sa", href: "mailto:info@udc.net.sa" },
                  { icon: Phone, label: "Phone", value: "+966 55 332 2001", href: "tel:+966553322001" },
                  { icon: MapPin, label: "Location", value: t("address"), href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-5 gradient-border rounded-2xl p-6 hover:bg-primary/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/50 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{label}</div>
                      <div className="text-white font-semibold">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="gradient-border rounded-2xl overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-primary/50 mx-auto mb-2" />
                  <p className="text-white/30 text-sm">Kingdom of Saudi Arabia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

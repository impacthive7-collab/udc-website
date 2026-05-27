"use client";

import { motion } from "framer-motion";
import { Zap, Users, TrendingUp, Heart, Briefcase, MapPin, Clock } from "lucide-react";

const values = [
  { icon: Zap, title: "Innovation First", desc: "We encourage bold ideas and creative problem-solving at every level." },
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside Saudi Arabia's best IT professionals in a supportive environment." },
  { icon: TrendingUp, title: "Growth Mindset", desc: "Continuous learning, certifications, and career advancement opportunities." },
  { icon: Heart, title: "Purpose-Driven", desc: "Contribute to Saudi Arabia's digital transformation and Vision 2030." },
];

const openings = [
  { title: "Senior Cybersecurity Consultant", dept: "Solutions", location: "Riyadh, KSA", type: "Full-time" },
  { title: "Cloud Solutions Architect", dept: "Cloud", location: "Riyadh, KSA", type: "Full-time" },
  { title: "Channel Sales Manager", dept: "Sales", location: "Jeddah, KSA", type: "Full-time" },
  { title: "Pre-Sales Engineer", dept: "Technical", location: "Riyadh, KSA", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative pt-48 pb-28 min-h-[60vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-70">
          <source src="https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/hero-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050a14]/65 to-[#050a14]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/20 border border-primary/40 text-accent text-sm px-4 py-2 rounded-full mb-6 font-medium">
              Join Our Team
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6">Careers at UDC</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Shape Saudi Arabia's digital future. Join a team that combines local expertise with global technology.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
      </section>

      {/* Culture */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Why Work at UDC?</h2>
            <p className="text-white/50">Be part of something that matters.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="gradient-border rounded-2xl p-8 text-center hover:bg-primary/5 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/30 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-card border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl font-black text-white mb-2">Open Positions</h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
          </motion.div>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 4 }}
                className="gradient-border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-primary/10 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{job.title}</h3>
                    <p className="text-accent text-sm font-medium">{job.dept}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-white/50 text-sm">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{job.type}</span>
                  <button className="text-accent font-semibold hover:underline whitespace-nowrap">Apply Now →</button>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-white/40 text-sm">Don't see a match? Send your CV to <a href="mailto:info@udc.net.sa" className="text-accent hover:underline">info@udc.net.sa</a></p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    title: "Saudi Arabia Ranks #1 in Global Digital Readiness: What It Means for Enterprises",
    excerpt: "The International Telecommunication Union ranked Saudi Arabia first worldwide in digital readiness in 2025. We explore the opportunities this creates for local businesses.",
    tag: "Market Insights",
    date: "May 2025",
    readTime: "5 min read",
    video: "https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/hero-main.mp4",
    img: null,
  },
  {
    title: "Understanding XDR vs MDR: Choosing the Right Security Strategy",
    excerpt: "As cyber threats evolve, understanding the difference between Extended Detection & Response and Managed Detection & Response is critical for Saudi CISOs.",
    tag: "Cybersecurity",
    date: "April 2025",
    readTime: "7 min read",
    video: "https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/vendor-6.mp4",
    img: null,
  },
  {
    title: "Cloud Migration Best Practices for Saudi Enterprises in 2025",
    excerpt: "Moving to the cloud requires careful planning, especially with local compliance requirements. Our experts share key considerations for successful cloud adoption.",
    tag: "Cloud Computing",
    date: "March 2025",
    readTime: "6 min read",
    video: null,
    img: "https://res.cloudinary.com/dnoek2kh5/image/upload/udc-website/img-cloud.png",
  },
];

export default function InsightsPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative pt-48 pb-28 min-h-[60vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-75">
          <source src="https://res.cloudinary.com/dnoek2kh5/video/upload/udc-website/banner-insights.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050a14]/65 to-[#050a14]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/20 border border-primary/40 text-accent text-sm px-4 py-2 rounded-full mb-6 font-medium">
              Knowledge Hub
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6">Insights</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Expert perspectives on cybersecurity, cloud, and digital transformation in Saudi Arabia.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl overflow-hidden border border-cyan-500/15 hover:border-cyan-500/35 transition-all group cursor-pointer"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(26,69,145,0.2) 40%, rgba(10,22,50,0.65) 70%, rgba(0,0,0,0.88) 100%)" }}
              >
                {/* Media */}
                <div className="relative h-44 overflow-hidden">
                  {post.video ? (
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500">
                      <source src={post.video} type="video/mp4" />
                    </video>
                  ) : post.img ? (
                    <Image src={post.img} alt={post.title} fill className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-5xl font-black text-white/10 select-none">{String(i + 1).padStart(2, "0")}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1 text-accent text-xs font-semibold">
                      <Tag className="w-3 h-3" /> {post.tag}
                    </span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-xl mb-3 leading-snug">{post.title}</h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/30 text-xs">{post.date}</span>
                    <div className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

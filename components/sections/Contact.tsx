"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle2, MapPin, Clock, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/SocialIcons";

const socials = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/VedantSaraf1301",
    username: "@VedantSaraf1301",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/vedant-saraf",
    username: "Vedant Saraf",
  },
  {
    icon: LeetCodeIcon,
    label: "LeetCode",
    href: "https://leetcode.com/Vedant1301",
    username: "@Vedant1301",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:vedantsaraf1301@gmail.com",
    username: "vedantsaraf1301@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError("Something went wrong. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Let&apos;s talk
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-lg mx-auto">
            Whether you have a project idea, an internship opportunity, or just want
            to say hi — my inbox is always open.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center mt-6">
            <Separator className="w-16 bg-primary/50" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">Bangalore, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">+91-89368-72172</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">IST (UTC+5:30) · Replies within 24h</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a
                    href="mailto:vedantsaraf1301@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vedantsaraf1301@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Find Me Online</h3>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">{label}</div>
                      <div className="text-xs text-muted-foreground">{username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl border border-border bg-card/50"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project, internship opportunity, or just say hi..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400 text-center -mb-1">{error}</p>
              )}

              <Button
                type="submit"
                disabled={sending || sent}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

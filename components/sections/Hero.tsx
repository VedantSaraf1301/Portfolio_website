"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/SocialIcons";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const roles = [
  "Information Science Student",
  "Full Stack Developer",
  "DSA Enthusiast",
  "Problem Solver",
];

function TypeWriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? 60 : 100
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words]);

  return (
    <span className="gradient-text">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity`}>
        |
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Vedant Saraf</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 h-10"
        >
          <TypeWriter words={roles} />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Information Science student at MSRIT Bangalore with a 9.66 CGPA — I love
          building full-stack web apps and solving complex problems with DSA.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 glow transition-all hover:scale-105 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="/Vedant_Saraf_Resume.pdf"
            download
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all hover:scale-105 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: "https://github.com/VedantSaraf1301", icon: GithubIcon, label: "GitHub" },
            { href: "https://linkedin.com/in/vedant-saraf", icon: LinkedinIcon, label: "LinkedIn" },
            { href: "https://leetcode.com/Vedant1301", icon: LeetCodeIcon, label: "LeetCode" },
            { href: "mailto:vedantsaraf1301@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}

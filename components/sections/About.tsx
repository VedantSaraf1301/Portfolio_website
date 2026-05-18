"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOptions } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code2, Layers, Rocket, Trophy } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "3+" },
  { label: "CGPA", value: "9.66" },
  { label: "Semesters", value: "5" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "I write readable, maintainable code with a focus on best practices and reusable architecture.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "Comfortable from database schema to pixel-perfect UI — React, Next.js, Node.js and more.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    desc: "Always eager to pick up new tech and apply it to real projects quickly.",
  },
  {
    icon: Trophy,
    title: "DSA",
    desc: "Strong foundations in Data Structures & Algorithms — 2nd at intra-college DSA contest.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Separator className="w-16 bg-primary/50" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m <strong className="text-foreground">Vedant Saraf</strong>, an Information
              Science student at{" "}
              <span className="text-primary font-medium">MS Ramaiah Institute of Technology, Bangalore</span>{" "}
              with a CGPA of 9.66/10. I&apos;m genuinely curious about how things work behind the
              scenes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy breaking down problems and figuring out efficient solutions using{" "}
              <span className="text-primary font-medium">Data Structures &amp; Algorithms</span>.
              I&apos;ve also been building full-stack web projects using{" "}
              <span className="text-primary font-medium">React, Next.js, Node.js</span> and
              exploring AI-powered tooling.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love working on things that challenge me to think deeper — whether it&apos;s
              designing a scalable system or crafting a smooth user experience from scratch.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "Next.js", "TypeScript", "Node.js", "C++", "Python", "MySQL", "MongoDB"].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-6"
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all card-hover text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <Icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold mb-0.5">{title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

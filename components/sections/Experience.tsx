"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer, viewportOptions } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, MapPin, Calendar, Trophy } from "lucide-react";

const education = [
  {
    role: "Bachelor of Engineering – Information Science",
    institution: "MS Ramaiah Institute of Technology, Bangalore",
    period: "2023 – 2027",
    detail: "CGPA: 9.66 / 10 (Till 5th Semester)",
    tags: ["Data Structures", "Algorithms", "DBMS", "OS", "Computer Networks", "OOP", "Theory of Computation"],
  },
  {
    role: "Grade 12 — Science (PCM + CS)",
    institution: "GD Goenka Public School",
    period: "2022",
    detail: "Percentage: 92.8%",
    tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    role: "Grade 10",
    institution: "GD Goenka Public School",
    period: "2020",
    detail: "Percentage: 94%",
    tags: [],
  },
];

const achievements = [
  {
    title: "2nd Place — Intra-College DSA & Logical Reasoning Contest",
    desc: "Ranked 2nd out of 140 teams, solving algorithmic and logic-based challenges under time constraints.",
    icon: Trophy,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            My journey
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Education &amp; <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Separator className="w-16 bg-primary/50" />
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-6"
          >
            {education.map((edu, i) => (
              <motion.div key={i} variants={slideInLeft} className="relative md:pl-16">
                <div className="absolute left-3.5 top-6 hidden md:flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary bg-background z-10">
                  <GraduationCap className="w-2.5 h-2.5 text-primary" />
                </div>

                <div className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-semibold text-base">{edu.role}</h3>
                      <p className="text-primary font-medium text-sm">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        India
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-foreground/80 mb-3">{edu.detail}</p>

                  {edu.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {edu.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary/80 border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold mb-6 flex items-center gap-2"
          >
            <Trophy className="w-5 h-5 text-primary" />
            Hackathons &amp; Awards
          </motion.h3>

          <div className="space-y-4">
            {achievements.map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                className="flex gap-4 p-5 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

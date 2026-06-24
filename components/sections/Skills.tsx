"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, viewportOptions } from "@/lib/motion";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
  {
    category: "Languages",
    color: "from-yellow-400 to-amber-500",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "C / C++", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 72 },
    ],
  },
  {
    category: "Frameworks",
    color: "from-amber-400 to-yellow-500",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 78 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Databases",
    color: "from-yellow-500 to-amber-400",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Prisma ORM", level: 72 },
    ],
  },
  {
    category: "Utilities",
    color: "from-amber-500 to-yellow-400",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 82 },
      { name: "REST APIs", level: 82 },
      { name: "JWT Auth", level: 75 },
    ],
  },
];

const techPills = [
  "C", "C++", "JavaScript", "TypeScript", "Java", "Python",
  "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS",
  "MySQL", "MongoDB", "Prisma", "Git", "GitHub", "JWT", "REST APIs", "Postman",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            What I work with
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Separator className="w-16 bg-primary/50" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map(({ category, color, skills }) => (
            <motion.div
              key={category}
              variants={scaleIn}
              className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all card-hover"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-2 h-6 rounded-full bg-linear-to-b ${color}`} />
                <h3 className="font-semibold text-lg">{category}</h3>
              </div>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/90">{name}</span>
                      <span className="text-muted-foreground">{level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-border overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-linear-to-r ${color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={viewportOptions}
                        transition={{ duration: 1, ease: "easeOut" as const, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-wrap justify-center gap-3"
        >
          {techPills.map((tech, i) => (
            <motion.span
              key={tech}
              variants={scaleIn}
              custom={i}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, viewportOptions } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const projects = [
  {
    title: "V0 Engine – AI Project Builder",
    description:
      "AI-driven full-stack project generation engine where users build apps by chatting with LLMs. Features rate limiting, usage tracking via Prisma ORM, Clerk auth, and a modular real-time architecture.",
    tags: ["Next.js", "TypeScript", "Prisma", "Clerk", "LLM", "PostgreSQL"],
    github: "https://github.com/VedantSaraf1301/v0-Vercel",
    live: null,
    gradient: "from-yellow-400 to-amber-500",
    featured: true,
  },
  {
    title: "Code Saathi – DSA Platform",
    description:
      "LeetCode-style DSA practice platform with structured problem sets, dynamic problem rendering, Prisma ORM + PostgreSQL for data storage, and a modular full-stack Next.js architecture.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "React.js"],
    github: "https://github.com/VedantSaraf1301/CodeSaathi",
    live: null,
    gradient: "from-amber-400 to-yellow-500",
    featured: true,
  },
  {
    title: "Digital War Memorial – Bharat Ke Veer",
    description:
      "A Digital War Memorial web app built with React.js to honor Indian soldiers. Includes search & filter by name, operation, or year with responsive design for accessibility across all devices.",
    tags: ["React.js", "JavaScript", "CSS", "Responsive Design"],
    github: "https://github.com/VedantSaraf1301/Digital-War-Memorial",
    live: "https://bharatkeveer-delta.vercel.app/",
    gradient: "from-yellow-500 to-amber-400",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Things I&apos;ve built
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/50 overflow-hidden transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_oklch(0.585_0.237_280_/_20%)]"
            >
              <div
                className={`h-1 w-full bg-linear-to-r ${project.gradient} group-hover:h-1.5 transition-all duration-300`}
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" />
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary/80 border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/VedantSaraf1301"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <GithubIcon className="w-4 h-4" />
            See all repositories on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

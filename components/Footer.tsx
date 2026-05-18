"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "@/lib/motion";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-primary" />
          <span>
            <span className="gradient-text font-medium">Vedant Saraf</span>
          </span>
        </div>

        <div className="flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-primary mx-1" fill="currentColor" /> using Next.js &amp; Framer Motion
        </div>

        <div>© {new Date().getFullYear()} All rights reserved.</div>
      </motion.div>
    </footer>
  );
}

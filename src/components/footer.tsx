"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link href="/" className="text-2xl font-bold mb-4 block group">
              <span className="text-white group-hover:text-violet-400 transition-colors">ruzi</span>
              <span className="text-violet-500">.dev</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Crafting modern, performant, and user-friendly web solutions with
              cutting-edge technologies. Let&apos;s build something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@ruzi.dev"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  hello@ruzi.dev
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-violet-500/20 hover:text-violet-400 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-violet-500/20 hover:text-violet-400 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ruzi.dev — All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

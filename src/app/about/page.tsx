"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Terminal,
  Database,
  Globe,
  ArrowRight,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
} from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "Frontend", icon: Palette, items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: Terminal, items: ["Node.js", "Python", "Go", "Express", "NestJS"] },
  { name: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"] },
  { name: "DevOps", icon: Globe, items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"] },
];

const experience = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Startup",
    period: "2022 - Present",
    description: "Building enterprise applications with React and Next.js. Leading frontend architecture decisions and mentoring junior developers.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Developed e-commerce platforms and SaaS products. Implemented CI/CD pipelines and improved development workflows.",
  },
  {
    title: "Junior Developer",
    company: "Software House",
    period: "2018 - 2020",
    description: "Built web applications and REST APIs. Gained expertise in modern JavaScript frameworks and best practices.",
  },
];

const stats = [
  { label: "Years Experience", value: "5+", icon: Calendar },
  { label: "Projects Completed", value: "50+", icon: Briefcase },
  { label: "Happy Clients", value: "30+", icon: Heart },
  { label: "Technologies", value: "20+", icon: Code2 },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <SparklesCore
            id="about-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#8b5cf6"
            speed={0.3}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HoverBorderGradient
                containerClassName="mb-6"
                className="text-sm px-4 py-1"
              >
                About Me
              </HoverBorderGradient>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hey, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
                  Ruzi
                </span>
              </h1>

              <TextGenerateEffect
                words="A passionate full-stack developer crafting modern, performant, and user-centric web applications. I love turning complex problems into elegant solutions."
                className="text-xl text-gray-400 mb-8"
              />

              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-5 h-5 text-violet-500" />
                  Remote Worldwide
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <Briefcase className="w-5 h-5 text-violet-500" />
                  Open to Freelance
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-violet-500" />
                  CS Graduate
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
                <Code2 className="w-40 h-40 text-violet-500/50" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 border border-violet-500/30 backdrop-blur-sm flex items-center justify-center"
              >
                <Award className="w-12 h-12 text-violet-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 border border-pink-500/30 backdrop-blur-sm flex items-center justify-center"
              >
                <Heart className="w-8 h-8 text-pink-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-violet-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                Toolkit
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-violet-500/50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with Tracing Beam */}
      <section className="py-24 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                Journey
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Professional experience and growth</p>
          </motion.div>

          <TracingBeam className="px-6">
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30 mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-violet-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-violet-950/50 to-purple-950/30 border border-violet-500/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                Work Together
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Interested in collaborating? I&apos;m always open to discussing new projects and opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

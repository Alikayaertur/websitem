"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Rocket,
  Users,
  Zap,
  Shield,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Modern Stack",
    description: "React, Next.js, TypeScript & cutting-edge technologies",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile methodology with efficient workflow",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Transparent communication & regular updates",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized, blazing fast applications",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Secure, tested & production-ready code",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Beautiful UI/UX that users love",
  },
];

export default function Home() {
  const words = ["Websites", "Applications", "Experiences", "Solutions"];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section with 3D Spline */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#8b5cf6"
        />

        <div className="absolute inset-0 opacity-30">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={20}
            className="w-full h-full"
            particleColor="#8b5cf6"
            speed={0.3}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <HoverBorderGradient
                containerClassName="mx-auto lg:mx-0 mb-6"
                className="flex items-center gap-2 text-sm"
              >
                <span className="text-violet-400">✦</span>
                <span>Available for Freelance Projects</span>
              </HoverBorderGradient>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
                  Ruzi.dev
                </span>
              </h1>

              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">I Build</span>
                <FlipWords words={words} className="text-violet-400" />
              </div>

              <div className="max-w-xl mb-8">
                <TextGenerateEffect
                  words="Transforming ideas into digital reality. Full-stack developer crafting modern, performant, and scalable web solutions."
                  className="text-lg text-gray-400"
                />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Link href="/contact">
                  <MovingBorderButton
                    borderRadius="2rem"
                    className="bg-black text-white border-violet-500/50 px-8 py-4 text-lg font-medium"
                    containerClassName="h-auto w-auto"
                  >
                    <span className="flex items-center gap-2">
                      Let&apos;s Talk
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </MovingBorderButton>
                </Link>
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-violet-500/50 hover:bg-white/5 text-white font-medium text-lg transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right content - 3D Spline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full h-[400px] lg:h-[600px] relative"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Work With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                Me?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I bring your projects to success with modern technologies and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-violet-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <SparklesCore
            id="cta-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={15}
            className="w-full h-full"
            particleColor="#8b5cf6"
            speed={0.2}
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-violet-950/50 to-purple-950/30 border border-violet-500/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                Project?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Got an idea? Let&apos;s bring it to life together. I&apos;m here to help you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <MovingBorderButton
                  borderRadius="2rem"
                  className="bg-black text-white px-10 py-4 text-lg font-medium"
                  containerClassName="h-auto w-auto"
                >
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </MovingBorderButton>
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Explore Services →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

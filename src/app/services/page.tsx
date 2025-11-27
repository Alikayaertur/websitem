"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import {
  Layers,
  Shield,
  Code2,
  Palette,
  Rocket,
  Settings,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, SEO-friendly, and responsive websites built with React, Next.js, and modern technologies.",
    features: ["Single Page Applications", "Server Side Rendering", "Progressive Web Apps", "API Integrations"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centric, modern, and impactful interface designs that convert visitors into customers.",
    features: ["Wireframe & Prototyping", "Responsive Design", "Design Systems", "User Research"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development from frontend to backend, database to deployment.",
    features: ["REST & GraphQL APIs", "Database Design", "Authentication", "Cloud Deployment"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Speed and performance improvements for your existing projects to boost user experience.",
    features: ["Core Web Vitals", "Code Splitting", "Image Optimization", "Caching Strategies"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "OWASP-compliant secure coding practices and comprehensive security audits.",
    features: ["Security Audits", "Penetration Testing", "SSL/TLS Setup", "Data Encryption"],
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description:
      "Automated deployment, monitoring, and infrastructure management for seamless operations.",
    features: ["Docker & Kubernetes", "GitHub Actions", "AWS/Vercel Deploy", "Monitoring Setup"],
    gradient: "from-indigo-500 to-blue-500",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your needs, goals, and vision for the project." },
  { step: "02", title: "Planning", description: "Creating technical architecture and detailed project timeline." },
  { step: "03", title: "Development", description: "Iterative development with regular updates and feedback." },
  { step: "04", title: "Delivery", description: "Testing, deployment, documentation, and ongoing support." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Spotlight
          className="-top-40 right-0 md:right-60 md:-top-20"
          fill="#8b5cf6"
        />
        <div className="absolute inset-0 opacity-30">
          <SparklesCore
            id="services-sparkles"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <HoverBorderGradient
              containerClassName="mx-auto mb-6"
              className="text-sm px-4 py-1"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                What I Offer
              </span>
            </HoverBorderGradient>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need for your project. Modern technologies,
              professional approach, and exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-violet-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center group-hover:bg-black/80 transition-colors">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-violet-400" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                Work
              </span>
            </h2>
            <p className="text-gray-400 text-lg">A simple and transparent process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-violet-500/50 to-transparent" />
                )}
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-500 to-violet-500/20 mb-4 group-hover:from-violet-400 group-hover:to-violet-400/30 transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-violet-950/50 to-purple-950/30 border border-violet-500/20 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 text-sm mb-6">
                <Zap className="w-4 h-4" />
                Flexible Pricing
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Start Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                  Project?
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Every project is unique. Let&apos;s discuss your requirements and I&apos;ll provide a custom quote tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <MovingBorderButton
                    borderRadius="2rem"
                    className="bg-black text-white px-10 py-4 text-lg font-medium"
                    containerClassName="h-auto w-auto"
                  >
                    <span className="flex items-center gap-2">
                      Get a Quote
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </MovingBorderButton>
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  View My Work →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

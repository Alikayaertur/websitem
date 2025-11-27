"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { CardContainer, CardBody, CardItem } from "@/components/3d-card-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Folder, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with Stripe integration, admin dashboard, and real-time inventory tracking.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "SaaS Dashboard",
    description: "Comprehensive analytics and reporting dashboard with real-time data visualization and custom charts.",
    tags: ["React", "TypeScript", "Recharts", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Minimal and impactful portfolio site for a creative photographer with smooth animations.",
    tags: ["Next.js", "Framer Motion", "Sanity CMS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Task Management App",
    description: "Real-time collaboration and task management application for teams with Kanban boards.",
    tags: ["React", "Socket.io", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI GPT-4 with custom templates and workflows.",
    tags: ["Next.js", "OpenAI", "Prisma", "Vercel AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracking app with price alerts, portfolio management, and market analysis.",
    tags: ["React Native", "WebSocket", "Firebase", "CoinGecko API"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <SparklesCore
            id="projects-sparkles"
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
                <Folder className="w-4 h-4" />
                Portfolio
              </span>
            </HoverBorderGradient>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work. Each project represents unique challenges
              and innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects with 3D Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-12"
          >
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardContainer className="inter-var" containerClassName="py-4">
                  <CardBody className="bg-gradient-to-br from-white/5 to-white/[0.02] relative group/card border border-white/10 hover:border-violet-500/50 w-full h-auto rounded-2xl p-6">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-white"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-gray-400 text-sm mt-2 line-clamp-2"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <div className="h-48 rounded-xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </CardItem>
                    <CardItem translateZ="40" className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>
                    <div className="flex justify-between items-center mt-6">
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-white hover:text-violet-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-white hover:text-violet-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            More Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-violet-500/50 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm text-white hover:text-violet-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm text-white hover:text-violet-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Have a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                Project Idea?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let&apos;s turn your vision into reality. Get in touch and let&apos;s discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

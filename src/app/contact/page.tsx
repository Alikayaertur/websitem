"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Clock, Send, MessageSquare, Zap } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(formData);
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <SparklesCore
            id="contact-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={20}
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
            className="text-center mb-16"
          >
            <HoverBorderGradient
              containerClassName="mx-auto mb-6"
              className="text-sm px-4 py-1"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Let&apos;s Connect
              </span>
            </HoverBorderGradient>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s talk about it. I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@ruzi.dev"
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-violet-500/50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 p-[1px]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center group-hover:bg-black/80 transition-colors">
                        <Mail className="w-6 h-6 text-violet-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold text-lg">hello@ruzi.dev</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-[1px]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-pink-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-semibold text-lg">Remote Worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 p-[1px]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <Clock className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Availability</p>
                      <p className="font-semibold text-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Open for Freelance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                  >
                    <Github className="w-6 h-6 group-hover:text-violet-400 transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 group-hover:text-violet-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-950/50 to-purple-950/30 border border-violet-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Quick Response</span>
                </div>
                <p className="text-gray-400 text-sm">
                  I typically respond within 24 hours. For urgent projects, mention it in your message.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all placeholder:text-gray-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all placeholder:text-gray-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all placeholder:text-gray-500"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all resize-none placeholder:text-gray-500"
                    placeholder="Tell me about your project, timeline, and budget..."
                    required
                  />
                </div>

                <MovingBorderButton
                  borderRadius="1rem"
                  className="w-full bg-black text-white py-5 text-lg font-medium"
                  containerClassName="w-full h-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </MovingBorderButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

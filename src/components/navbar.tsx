"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-white/10 bg-black/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold group">
              <span className="text-white group-hover:text-violet-400 transition-colors">ruzi</span>
              <span className="text-violet-500">.dev</span>
            </Link>

            <button
              onClick={() => setMenuState(!menuState)}
              className="relative z-20 block lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Menu
                className={cn(
                  "size-6 transition-all duration-200",
                  menuState && "rotate-180 scale-0 opacity-0"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 m-2 size-6 transition-all duration-200",
                  !menuState && "-rotate-180 scale-0 opacity-0"
                )}
              />
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-colors rounded-full",
                    pathname === item.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {pathname === item.href && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-violet-500/20 border border-violet-500/30 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={menuState ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              className={cn(
                "absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 lg:hidden",
                menuState ? "pointer-events-auto" : "pointer-events-none"
              )}
            >
              <div className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={menuState ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className={cn(
                        "block px-4 py-3 text-lg rounded-lg transition-colors",
                        pathname === item.href
                          ? "text-white bg-violet-500/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}

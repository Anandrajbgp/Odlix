"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Globe, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navLinks = [
  { name: "E-Learning", href: "/elearning" },
  { name: "Agency", href: "/agency" },
  { name: "Mock Tests", href: "/competition" },
  { name: "Trading", href: "/trading" },
  { name: "Useful Apps & Websites", href: "/apps" },
  { name: "Mart", href: "/mart" },
];

export function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-3 z-50 mx-3 w-auto rounded-2xl border border-white/10 bg-[#001f3f]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-10 h-10 gradient-platform rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform"
          >
            <Globe className="text-white w-6 h-6" />
          </motion.div>
          <div>
            <div className="text-xl font-black text-white tracking-tighter leading-none">ODLIX</div>
            <div className="text-[10px] font-bold text-white/50 tracking-[0.2em] leading-none mt-1 uppercase">Ecosystem</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <button className="text-white/70 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
          <Link
            href="/login"
            className="px-6 py-2 rounded-full bg-white text-[#001f3f] font-bold hover:bg-white/90 transition-all"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-[#001f3f] border-b border-white/10 p-4 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-white/70 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block w-full py-3 rounded-xl bg-white text-[#001f3f] text-center font-bold"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

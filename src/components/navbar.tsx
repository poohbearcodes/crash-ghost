"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/lib/constants";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="font-black uppercase tracking-[0.2em]">
          Crash Ghost
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:-translate-y-0.5 hover:opacity-65">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

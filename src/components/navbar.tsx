"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/lib/constants";
import { withBasePath } from "@/lib/asset-path";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3 font-black uppercase tracking-[0.2em]">
          <img
            src={withBasePath("/stickers/group-91.png")}
            alt="Ghost icon"
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 object-contain"
          />
          <span className="text-base md:text-lg">Crash Ghost</span>
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

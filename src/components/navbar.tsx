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
      className="sticky top-0 z-50 border-b-4 border-black shadow-[0_6px_0_0_#000]"
      style={{
        backgroundImage: `url(${withBasePath("/stickers/barbedbar.png")})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex h-28 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-4 font-black uppercase tracking-[0.2em]">
          <img
            src={withBasePath("/stickers/group-91.png")}
            alt="Ghost icon"
            width={100}
            height={100}
            className="h-[100px] w-[100px] shrink-0 object-contain"
          />
          <span className="text-lg leading-none md:text-2xl">Crash Ghost</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-black uppercase md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-1 transition hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

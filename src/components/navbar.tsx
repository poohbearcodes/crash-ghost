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
      className="sticky top-0 z-50 overflow-visible bg-white"
    >
      <div className="mx-auto flex h-28 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex cursor-pointer items-center transition hover:-translate-y-0.5"
        >
          <img
            src={withBasePath("/stickers/Group 21.png")}
            alt="Crash Ghost header mark"
            width={132}
            height={56}
            className="h-[56px] w-[132px] shrink-0 object-contain drop-shadow-[6px_6px_0_#000]"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-black uppercase md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full border-2 border-black bg-white px-3 py-1 !text-black visited:!text-black transition hover:-translate-y-0.5 hover:bg-black hover:!text-white hover:visited:!text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <img
        src={withBasePath("/stickers/barbedbar.png")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-8 w-full translate-y-1/2 object-cover"
      />
    </motion.header>
  );
}

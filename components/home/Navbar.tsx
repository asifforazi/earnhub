"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-white">
          Earn
          <span className="text-emerald-400">Hub</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-slate-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how"
            className="text-slate-300 transition hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#faq"
            className="text-slate-300 transition hover:text-white"
          >
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg border border-slate-700 px-5 py-2 font-semibold text-white transition hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-black transition hover:bg-emerald-400"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
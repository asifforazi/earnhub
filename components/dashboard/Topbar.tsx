"use client";

import { FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          Welcome back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="relative rounded-xl bg-slate-800 p-3 text-slate-300 transition hover:bg-slate-700">

          <FaBell size={18} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

      </div>

    </header>
  );
}
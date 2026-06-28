"use client";

import { FaBars, FaBell } from "react-icons/fa";

type TopbarProps = {
  openSidebar: () => void;
};

export default function Topbar({
  openSidebar,
}: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-4 md:px-6">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu */}
        <button
          onClick={openSidebar}
          className="rounded-lg p-2 text-white hover:bg-slate-800 lg:hidden"
        >
          <FaBars size={20} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-white md:text-3xl">
            Dashboard
          </h1>

          <p className="hidden text-slate-400 md:block">
            Welcome back 👋
          </p>
        </div>

      </div>

      {/* Right */}
      <button className="relative rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700">
        <FaBell className="text-xl text-white" />

        <span className="absolute right-2 top-2 h-3 w-3 rounded-full bg-red-500"></span>
      </button>

    </header>
  );
}
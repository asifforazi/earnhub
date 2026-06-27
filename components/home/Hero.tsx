"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaWallet,
  FaUsers,
  FaGift,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-36 pb-24">

  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />

    <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px]" />

    <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[150px]" />

  </div>

  <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          className="flex-1"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            🚀 Trusted Online Earning Platform
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
  The Smarter Way
  <br />

  to

  <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
    {" "}
    Earn Online
  </span>
</h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
  EarnHub helps you earn real rewards by completing surveys,
offerwall tasks, watching videos, installing apps and inviting friends.

  <br />
  <br />

  Fast payouts.

  <br />

  Secure platform.

  <br />

  No hidden fees.
</p>

          <div className="mt-10 flex flex-wrap gap-5">

  <Link
    href="/register"
    className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105"
  >
    Start Earning
  </Link>

  <Link
    href="/login"
    className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-emerald-400 hover:bg-slate-900"
  >
    Login
  </Link>

</div>

          <div className="mt-12 flex flex-wrap gap-8">

            <div className="flex items-center gap-3">
              <FaWallet className="text-emerald-400" />
              <span className="text-slate-300">
                Instant Withdraw
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaGift className="text-emerald-400" />
              <span className="text-slate-300">
                Daily Rewards
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaUsers className="text-emerald-400" />
              <span className="text-slate-300">
                Referral Program
              </span>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        {/* Right */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex-1"
>
  {/* Floating Badge */}
  

  <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">

    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-400">
          Available Balance
        </p>

        <h1 className="mt-2 text-5xl font-black text-emerald-400">
          $245.80
        </h1>
      </div>

      <div className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-black">
        LIVE
      </div>
    </div>
    <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/70 px-5 py-4">

  <div>
    <p className="text-sm text-slate-400">
      Active Users
    </p>

    <h3 className="mt-1 text-2xl font-bold text-white">
      24,381
    </h3>
  </div>

  <div className="flex items-center gap-2">
    <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>

    <span className="font-semibold text-emerald-400">
      Online
    </span>
  </div>

</div>

    <div className="mt-8 space-y-4">

      <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
        <span className="text-slate-400">
          Today's Earnings
        </span>

        <span className="font-bold text-white">
          +$18.25
        </span>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
        <span className="text-slate-400">
          Referral Bonus
        </span>

        <span className="font-bold text-white">
          +$56.00
        </span>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
        <span className="text-slate-400">
          Pending Withdrawal
        </span>

        <span className="font-bold text-yellow-400">
          $120
        </span>
      </div>

    </div>

    <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 p-6 text-black">

      <p className="font-semibold">
        Weekly Earnings
      </p>

      <h2 className="mt-2 text-4xl font-black">
        +$387
      </h2>

      <p className="mt-2 text-sm">
        ↑ 23% higher than last week
      </p>

    </div>

  </div>
</motion.div>

      </div>
    </section>
  );
}
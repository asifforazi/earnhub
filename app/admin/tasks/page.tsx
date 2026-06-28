"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  FaWallet,
  FaMoneyBillWave,
  FaUsers,
  FaGift,
} from "react-icons/fa";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>

        {/* Balance */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 p-6 text-black shadow-2xl md:p-8">

          <p className="text-base font-medium md:text-lg">
            Available Balance
          </p>

          <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">
            ৳0.00
          </h2>

          <p className="mt-3 text-sm md:text-base">
            Start completing tasks to earn rewards.
          </p>

        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-3 md:gap-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <FaWallet className="text-3xl text-emerald-400" />
            <p className="mt-4 text-slate-400">
              Total Earned
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              ৳0
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <FaMoneyBillWave className="text-3xl text-blue-400" />
            <p className="mt-4 text-slate-400">
              Total Withdraw
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              ৳0
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <FaUsers className="text-3xl text-yellow-400" />
            <p className="mt-4 text-slate-400">
              Referrals
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              0
            </h2>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-8">

          <h2 className="mb-5 text-xl font-bold md:text-2xl">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">

            <button className="rounded-2xl bg-emerald-500 p-4 font-bold text-black transition hover:scale-105">
              💰 Earn
            </button>

            <button className="rounded-2xl bg-blue-600 p-4 font-bold transition hover:scale-105">
              📋 Tasks
            </button>

            <button className="rounded-2xl bg-purple-600 p-4 font-bold transition hover:scale-105">
              👥 Referral
            </button>

            <button className="rounded-2xl bg-orange-500 p-4 font-bold text-black transition hover:scale-105">
              💳 Withdraw
            </button>

          </div>

        </div>

        {/* Coming Soon */}
        <div className="mt-8 rounded-2xl border border-dashed border-slate-700 p-6 text-center md:mt-10 md:p-8">

          <FaGift className="mx-auto text-4xl text-emerald-400 md:text-5xl" />

          <h2 className="mt-4 text-xl font-bold md:text-2xl">
            More Features Coming Soon
          </h2>

          <p className="mt-2 text-sm text-slate-400 md:text-base">
            Surveys, Offerwalls, Referral Rewards,
            Notifications and more are under development.
          </p>

        </div>

      </DashboardLayout>
    </ProtectedRoute>
  );
}
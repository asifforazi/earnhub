"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

import { auth } from "@/lib/firebase";
import { getUserProfile } from "@/services/firebase";

export default function ReferralPage() {
  const [code, setCode] = useState("");

  useEffect(() => {
    async function loadUser() {
      if (!auth.currentUser) return;

      const data = await getUserProfile(auth.currentUser.uid);

      if (data) {
        setCode(data.referralCode);
      }
    }

    loadUser();
  }, []);

  const referralLink =
    `https://earnhub-six.vercel.app/register?ref=${code}`;

  async function copyLink() {
    await navigator.clipboard.writeText(referralLink);

    alert("Referral Link Copied!");
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>

        <div className="mx-auto max-w-3xl rounded-3xl bg-slate-900 p-8">

          <h1 className="text-3xl font-bold">
            Referral Program
          </h1>

          <p className="mt-2 text-slate-400">
            Invite friends and earn rewards.
          </p>

          <div className="mt-8">

            <p className="text-slate-400">
              Your Referral Code
            </p>

            <div className="mt-2 rounded-xl bg-slate-800 p-4 text-center text-2xl font-bold text-emerald-400">
              {code}
            </div>

          </div>

          <div className="mt-6">

            <p className="text-slate-400">
              Referral Link
            </p>

            <div className="mt-2 rounded-xl bg-slate-800 p-4 break-all">
              {referralLink}
            </div>

          </div>

          <button
            onClick={copyLink}
            className="mt-8 w-full rounded-xl bg-emerald-500 py-4 font-bold text-black transition hover:bg-emerald-400"
          >
            Copy Referral Link
          </button>

        </div>

      </DashboardLayout>
    </ProtectedRoute>
  );
}
"use client";

import { useEffect, useState } from "react";
import {
  getReferralBonus,
  updateReferralBonus,
} from "@/services/settings";

export default function AdminSettingsPage() {
  const [bonus, setBonus] = useState(2);

  useEffect(() => {
    async function loadBonus() {
      const value = await getReferralBonus();
      setBonus(value);
    }

    loadBonus();
  }, []);

  async function handleSave() {
    await updateReferralBonus(bonus);

    alert("Referral Bonus Updated Successfully!");
  }

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-8 text-3xl font-bold">
          Admin Settings
        </h1>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-semibold">
            Referral Bonus
          </h2>

          <p className="mt-2 text-slate-400">
            Change referral bonus percentage.
          </p>

          <div className="mt-6 flex items-center gap-4">

            <input
              type="number"
              value={bonus}
              onChange={(e) =>
                setBonus(Number(e.target.value))
              }
              min={0}
              max={100}
              className="w-32 rounded-lg border border-slate-700 bg-slate-800 p-3 text-center text-xl outline-none"
            />

            <span className="text-xl">%</span>

          </div>

          <button
            onClick={handleSave}
            className="mt-6 rounded-xl bg-emerald-500 px-8 py-3 font-bold text-black transition hover:bg-emerald-400"
          >
            Save
          </button>

        </div>

      </div>
    </main>
  );
}
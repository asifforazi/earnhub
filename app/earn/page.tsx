"use client";

import {
  FaClipboardList,
  FaMobileAlt,
  FaPlayCircle,
  FaPoll,
  FaGift,
} from "react-icons/fa";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CategoryCard from "@/components/earn/CategoryCard";

export default function EarnPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>

        <h1 className="text-4xl font-bold text-white">
          Earn Money
        </h1>

        <p className="mt-2 text-slate-400">
          Choose a category and start earning.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <CategoryCard
            title="Surveys"
            description="Complete surveys and earn rewards."
            icon={FaPoll}
          />

          <CategoryCard
            title="Offerwalls"
            description="Finish partner offers to earn money."
            icon={FaGift}
          />

          <CategoryCard
            title="Watch Videos"
            description="Watch videos and get paid."
            icon={FaPlayCircle}
          />

          <CategoryCard
            title="App Install"
            description="Install apps and complete simple tasks."
            icon={FaMobileAlt}
          />

          <CategoryCard
            title="Daily Tasks"
            description="Complete daily missions and earn bonuses."
            icon={FaClipboardList}
          />

        </div>

      </DashboardLayout>
    </ProtectedRoute>
  );
}
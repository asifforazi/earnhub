"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BalanceCard from "@/components/dashboard/BalanceCard";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickActions from "@/components/dashboard/QuickActions";
import ComingSoon from "@/components/dashboard/ComingSoon";

import { auth } from "@/lib/firebase";
import { getUserProfile } from "@/services/firebase";
import { UserProfile } from "@/types/user";

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      const data = await getUserProfile(auth.currentUser.uid);

      setUser(data);

      setLoading(false);
    }

    loadUser();
  }, []);

  if (loading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="flex h-[70vh] items-center justify-center text-white">
            Loading Dashboard...
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>

        <BalanceCard
          balance={user?.balance ?? 0}
        />

        <StatsCards
          totalEarned={user?.totalEarned ?? 0}
          totalWithdraw={user?.totalWithdraw ?? 0}
          referrals={0}
        />

        <QuickActions />

        <ComingSoon />

      </DashboardLayout>
    </ProtectedRoute>
  );
}
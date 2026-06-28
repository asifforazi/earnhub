"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BalanceCard from "@/components/dashboard/BalanceCard";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickActions from "@/components/dashboard/QuickActions";
import ComingSoon from "@/components/dashboard/ComingSoon";

import { auth } from "@/lib/firebase";
import {
  getReferralCount,
  getUserProfile,
} from "@/services/firebase";
import { UserProfile } from "@/types/user";

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [referralCount, setReferralCount] = useState(0);

  useEffect(() => {
    async function loadUser() {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      const data = await getUserProfile(auth.currentUser.uid);

      if (data) {
        setUser(data);

        if (data.referralCode) {
          const count = await getReferralCount(
            data.referralCode
          );

          setReferralCount(count);
        }
      }

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
          referrals={referralCount}
        />

        <QuickActions />

        <ComingSoon />

      </DashboardLayout>
    </ProtectedRoute>
  );
}
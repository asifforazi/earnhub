"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProfileCard from "@/components/profile/ProfileCard";

import { auth } from "@/lib/firebase";
import { getUserProfile } from "@/services/firebase";
import { UserProfile } from "@/types/user";

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      const data = await getUserProfile(auth.currentUser.uid);

      setUser(data);

      setLoading(false);
    }

    loadProfile();
  }, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>

        <h1 className="mb-8 text-3xl font-bold text-white">
          My Profile
        </h1>

        {loading ? (
          <div className="text-white">
            Loading Profile...
          </div>
        ) : (
          <ProfileCard
            name={user?.name ?? "User"}
            email={user?.email ?? ""}
            balance={user?.balance ?? 0}
            referralCode={user?.referralCode ?? ""}
          />
        )}

      </DashboardLayout>
    </ProtectedRoute>
  );
}
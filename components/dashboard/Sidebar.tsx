"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCoins, FaHistory, FaHome, FaSignOutAlt, FaUser, FaUsers, FaWallet } from "react-icons/fa";

import { auth } from "@/lib/firebase";
import { getUserProfile } from "@/services/firebase";
import { useAuth } from "@/contexts/AuthContext";

import SidebarItem from "./SidebarItem";
import UserCard from "./UserCard";

export default function Sidebar() {
  const router = useRouter();
  const { logout } = useAuth();

  const [name, setName] = useState("User");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function loadUser() {
      if (!auth.currentUser) return;

      const data = await getUserProfile(auth.currentUser.uid);

      if (data) {
        setName(data.name || "User");
        setBalance(data.balance || 0);
      }
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">

      {/* Logo */}
      <div className="border-b border-slate-800 p-6 flex-shrink-0">
        <h1 className="text-3xl font-extrabold text-emerald-400">
          EarnHub
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Earn Smart. Earn More.
        </p>
      </div>

      {/* User */}
      <UserCard
        name={name}
        balance={balance}
      />

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">

        <div className="space-y-2">

          <SidebarItem
            href="/dashboard"
            icon={FaHome}
            label="Dashboard"
          />

          <SidebarItem
            href="/earn"
            icon={FaCoins}
            label="Earn"
          />

          <SidebarItem
            href="/referral"
            icon={FaUsers}
            label="Referral"
          />

          <SidebarItem
            href="/withdraw"
            icon={FaWallet}
            label="Withdraw"
          />

          <SidebarItem
            href="/history"
            icon={FaHistory}
            label="History"
          />

          <SidebarItem
            href="/profile"
            icon={FaUser}
            label="Profile"
          />

        </div>

      </div>

      {/* Logout */}
      <div className="flex-shrink-0 border-t border-slate-800 p-4">

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}
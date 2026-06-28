"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaCoins,
  FaHistory,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUsers,
  FaWallet,
} from "react-icons/fa";

import { auth } from "@/lib/firebase";
import { getUserProfile } from "@/services/firebase";
import { useAuth } from "@/contexts/AuthContext";

import SidebarItem from "./SidebarItem";
import UserCard from "./UserCard";

type SidebarProps = {
  closeSidebar?: () => void;
};

export default function Sidebar({
  closeSidebar,
}: SidebarProps) {
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
    closeSidebar?.();
    await logout();
    router.push("/login");
  }

  return (
    <aside className="flex h-screen w-72 flex-col overflow-y-auto border-r border-slate-800 bg-slate-900">

      {/* Logo */}
      <div className="flex-shrink-0 border-b border-slate-800 p-6">
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
      <div className="flex-1 overflow-y-auto px-4 py-2">

        <div className="space-y-2">

          <SidebarItem
            href="/dashboard"
            icon={FaHome}
            label="Dashboard"
            closeSidebar={closeSidebar}
          />

          <SidebarItem
            href="/earn"
            icon={FaCoins}
            label="Earn"
            closeSidebar={closeSidebar}
          />

          <SidebarItem
            href="/referral"
            icon={FaUsers}
            label="Referral"
            closeSidebar={closeSidebar}
          />

          <SidebarItem
            href="/withdraw"
            icon={FaWallet}
            label="Withdraw"
            closeSidebar={closeSidebar}
          />

          <SidebarItem
            href="/history"
            icon={FaHistory}
            label="History"
            closeSidebar={closeSidebar}
          />

          <SidebarItem
            href="/profile"
            icon={FaUser}
            label="Profile"
            closeSidebar={closeSidebar}
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
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

type SidebarItemProps = {
  href: string;
  icon: IconType;
  label: string;
  closeSidebar?: () => void;
};

export default function SidebarItem({
  href,
  icon: Icon,
  label,
  closeSidebar,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={closeSidebar}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-emerald-500 font-semibold text-black"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <Icon className="text-lg" />
      <span>{label}</span>
    </Link>
  );
}
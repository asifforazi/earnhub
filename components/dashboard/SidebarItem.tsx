"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

type SidebarItemProps = {
  href: string;
  icon: IconType;
  label: string;
};

export default function SidebarItem({
  href,
  icon: Icon,
  label,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
        active
          ? "bg-emerald-500 text-black"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
}
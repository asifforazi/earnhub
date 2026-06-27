"use client";

type UserCardProps = {
  name: string;
  balance: number;
};

export default function UserCard({
  name,
  balance,
}: UserCardProps) {
  return (
    <div className="mx-4 my-4 rounded-2xl border border-slate-700 bg-slate-800 p-4">

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-black">
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0">
          <h2 className="truncate font-semibold text-white">
            {name}
          </h2>

          <p className="text-sm text-slate-400">
            Member
          </p>
        </div>

      </div>

      <div className="mt-4 rounded-xl bg-slate-900 p-3">

        <p className="text-xs uppercase tracking-wider text-slate-400">
          Available Balance
        </p>

        <h3 className="mt-1 text-2xl font-bold text-emerald-400">
          ৳{balance.toFixed(2)}
        </h3>

      </div>

    </div>
  );
}
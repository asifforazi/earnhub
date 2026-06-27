import {
  FaWallet,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

type Props = {
  totalEarned: number;
  totalWithdraw: number;
  referrals: number;
};

export default function StatsCards({
  totalEarned,
  totalWithdraw,
  referrals,
}: Props) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <FaWallet className="text-3xl text-emerald-400" />

        <p className="mt-4 text-slate-400">
          Total Earned
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          ৳{totalEarned.toFixed(2)}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <FaMoneyBillWave className="text-3xl text-blue-400" />

        <p className="mt-4 text-slate-400">
          Total Withdraw
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          ৳{totalWithdraw.toFixed(2)}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <FaUsers className="text-3xl text-yellow-400" />

        <p className="mt-4 text-slate-400">
          Referrals
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {referrals}
        </h2>
      </div>

    </div>
  );
}
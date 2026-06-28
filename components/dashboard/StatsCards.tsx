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

  {/* Total Earned */}
  <div className="rounded-2xl border border-emerald-500/20 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-emerald-500/20">

    <FaWallet className="text-4xl text-emerald-400" />

    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
      Total Earned
    </p>

    <h2 className="mt-2 text-4xl font-extrabold text-white">
      ৳{totalEarned.toFixed(2)}
    </h2>

  </div>

  {/* Total Withdraw */}
  <div className="rounded-2xl border border-blue-500/20 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-blue-500/20">

    <FaMoneyBillWave className="text-4xl text-blue-400" />

    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
      Total Withdraw
    </p>

    <h2 className="mt-2 text-4xl font-extrabold text-white">
      ৳{totalWithdraw.toFixed(2)}
    </h2>

  </div>

  {/* Referrals */}
  <div className="rounded-2xl border border-yellow-500/20 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-yellow-500/20">

    <FaUsers className="text-4xl text-yellow-400" />

    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
      Referrals
    </p>

    <h2 className="mt-2 text-4xl font-extrabold text-white">
      {referrals}
    </h2>

  </div>

</div>
  );
}
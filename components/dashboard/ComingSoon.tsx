import { FaGift } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-slate-700 p-8 text-center">

      <FaGift className="mx-auto text-5xl text-emerald-400" />

      <h2 className="mt-4 text-2xl font-bold text-white">
        More Features Coming Soon
      </h2>

      <p className="mt-2 text-slate-400">
        Surveys, Offerwalls, Referral Rewards,
        Notifications and more are under development.
      </p>

    </div>
  );
}
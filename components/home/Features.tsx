import {
  FaMoneyBillWave,
  FaGift,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMoneyBillWave size={34} />,
    title: "Earn by Completing Tasks",
    description:
      "Complete surveys, offerwalls and daily missions to earn rewards instantly.",
  },
  {
    icon: <FaGift size={34} />,
    title: "Daily Rewards",
    description:
      "Claim daily bonuses, participate in events and unlock exclusive rewards.",
  },
  {
    icon: <FaUsers size={34} />,
    title: "Referral Program",
    description:
      "Invite your friends and earn commission every time they complete tasks.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Why Choose EarnHub?
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to earn online from one platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500"
            >
              <div className="mb-6 inline-flex rounded-xl bg-emerald-500/10 p-4 text-emerald-400">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
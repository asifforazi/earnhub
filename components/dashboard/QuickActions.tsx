export default function QuickActions() {
  return (
    <div className="mt-10">
      <h2 className="mb-5 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-5 md:grid-cols-4">

        <button className="rounded-2xl bg-emerald-500 p-5 font-bold text-black transition hover:scale-105">
          💰 Earn Money
        </button>

        <button className="rounded-2xl bg-blue-600 p-5 font-bold text-white transition hover:scale-105">
          📋 Tasks
        </button>

        <button className="rounded-2xl bg-purple-600 p-5 font-bold text-white transition hover:scale-105">
          👥 Referral
        </button>

        <button className="rounded-2xl bg-orange-500 p-5 font-bold text-black transition hover:scale-105">
          💳 Withdraw
        </button>

      </div>
    </div>
  );
}
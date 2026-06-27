type BalanceCardProps = {
  balance: number;
};

export default function BalanceCard({
  balance,
}: BalanceCardProps) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 p-8 text-black shadow-2xl">

      <p className="text-lg font-medium">
        Available Balance
      </p>

      <h2 className="mt-2 text-5xl font-extrabold">
        ৳{balance.toFixed(2)}
      </h2>

      <p className="mt-4">
        Start completing tasks to earn rewards.
      </p>

    </div>
  );
}
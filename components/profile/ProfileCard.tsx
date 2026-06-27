type ProfileCardProps = {
  name: string;
  email: string;
  balance: number;
  referralCode: string;
};

export default function ProfileCard({
  name,
  email,
  balance,
  referralCode,
}: ProfileCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-5">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-3xl font-bold text-black">
          {name.charAt(0).toUpperCase()}
        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            {name}
          </h2>

          <p className="mt-1 text-slate-400">
            {email}
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-800 p-5">

          <p className="text-sm text-slate-400">
            Balance
          </p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-400">
            ৳{balance.toFixed(2)}
          </h3>

        </div>

        <div className="rounded-2xl bg-slate-800 p-5">

          <p className="text-sm text-slate-400">
            Referral Code
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {referralCode}
          </h3>

        </div>

      </div>

    </div>
  );
}
const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up for free using your email or Google account in just a few seconds.",
  },
  {
    number: "02",
    title: "Complete Tasks",
    description:
      "Complete surveys, offerwall tasks, watch videos and install apps to earn real rewards.",
  },
  {
    number: "03",
    title: "Earn Rewards",
    description:
      "Your earnings are automatically added to your wallet after successful completion.",
  },
  {
    number: "04",
    title: "Withdraw Anytime",
    description:
      "Withdraw your balance securely through supported payment methods.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            How It Works
          </h2>

          <p className="mt-4 text-slate-400">
            Start earning in four simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-emerald-500"
            >
              <div className="text-5xl font-extrabold text-emerald-500/20">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
const stats = [
  {
    number: "25K+",
    title: "Active Users",
  },
  {
    number: "$150K+",
    title: "Paid to Members",
  },
  {
    number: "500K+",
    title: "Completed Tasks",
  },
  {
    number: "99.9%",
    title: "Uptime",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-emerald-500"
            >
              <h2 className="text-5xl font-extrabold text-emerald-400">
                {item.number}
              </h2>

              <p className="mt-4 text-lg text-slate-400">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
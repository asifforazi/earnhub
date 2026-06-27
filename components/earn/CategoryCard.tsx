import { IconType } from "react-icons";

type Props = {
  title: string;
  description: string;
  icon: IconType;
};

export default function CategoryCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500">

      <Icon
        size={42}
        className="text-emerald-400"
      />

      <h2 className="mt-5 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-2 text-slate-400">
        {description}
      </p>

    </div>
  );
}
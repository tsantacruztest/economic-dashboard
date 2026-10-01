type KPICardProps = {
  title: string;
  value: string;
  updated: string;
  status: "good" | "warning" | "bad";
};

export default function KPICard({
  title,
  value,
  updated,
  status,
}: KPICardProps) {

  const config = {
    good: {
  border: "border-green-200",
  badge: "bg-green-100 text-green-700",
  icon: "📈",
  label: "Positive",
},
    warning: {
  border: "border-yellow-200",
  badge: "bg-yellow-100 text-yellow-700",
  icon: "➖",
  label: "Neutral",
},
    bad: {
  border: "border-red-200",
  badge: "bg-red-100 text-red-700",
  icon: "📉",
  label: "Negative",
},
  };

  return (
    <div
      className={`
        bg-slate-50
        rounded-2xl
        p-5
        border
        ${config[status].border}
        hover:shadow-md
        transition-all
      `}
    >
      <div className="flex justify-between items-start">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-5xl font-black tracking-tight text-slate-900">
            {value}
          </p>
          <p className="mt-2 text-xs text-slate-400">
  Updated: {updated}
</p>
        </div>

        <div
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            ${config[status].badge}
          `}
        >
          {config[status].icon} {config[status].label}
        </div>

      </div>
    </div>
  );
}
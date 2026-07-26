import {
  Users,
  CircleCheckBig,
  CircleX,
  CalendarClock,
} from "lucide-react";

const summary = [
  {
    title: "Total Students",
    value: 15,
    icon: Users,
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    title: "Present",
    value: 8,
    icon: CircleCheckBig,
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    text: "text-green-600",
  },
  {
    title: "Absent",
    value: 4,
    icon: CircleX,
    bg: "bg-red-50",
    iconBg: "bg-red-100",
    text: "text-red-600",
  },
  {
    title: "Leave",
    value: 3,
    icon: CalendarClock,
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    text: "text-yellow-600",
  },
];

export default function SummaryCards() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {summary.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`rounded-2xl border border-slate-200 ${item.bg} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{item.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
              >
                <Icon className={item.text} size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
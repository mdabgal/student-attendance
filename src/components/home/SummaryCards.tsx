import {
  Users,
  CircleCheckBig,
  CircleX,
  CalendarClock,
} from "lucide-react";

import { Student } from "@/types/student";

interface SummaryCardsProps {
  students: Student[];
}

export default function SummaryCards({
  students,
}: SummaryCardsProps) {

  const total = students.length;

  const present = students.filter(
    (student) => student.status === "present"
  ).length;

  const absent = students.filter(
    (student) => student.status === "absent"
  ).length;

  const leave = students.filter(
    (student) => student.status === "leave"
  ).length;


  const summary = [
    {
      title: "Total Students",
      value: total,
      icon: Users,
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      title: "Present",
      value: present,
      icon: CircleCheckBig,
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      text: "text-green-600",
    },
    {
      title: "Absent",
      value: absent,
      icon: CircleX,
      bg: "bg-red-50",
      iconBg: "bg-red-100",
      text: "text-red-600",
    },
    {
      title: "Leave",
      value: leave,
      icon: CalendarClock,
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      text: "text-yellow-600",
    },
  ];


  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {summary.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`
              rounded-2xl 
              border 
              border-slate-200 
              ${item.bg}
              p-6 
              shadow-sm 
              transition-all 
              duration-300 
              hover:-translate-y-1 
              hover:shadow-lg
            `}
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {item.value}
                </h2>
              </div>


              <div
                className={`
                  flex 
                  h-14 
                  w-14 
                  items-center 
                  justify-center 
                  rounded-2xl
                  ${item.iconBg}
                `}
              >
                <Icon
                  size={28}
                  className={item.text}
                />
              </div>

            </div>

          </div>
        );
      })}

    </section>
  );
}
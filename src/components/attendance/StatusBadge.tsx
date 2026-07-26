import { AttendanceStatus } from "@/types/student";
import { CheckCircle2, XCircle, Clock3 } from "lucide-react";

interface StatusBadgeProps {
  status: AttendanceStatus;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles = {
    present: {
      label: "Present",
      className:
        "bg-green-100 text-green-700 border border-green-200",
      icon: <CheckCircle2 size={16} />,
    },
    absent: {
      label: "Absent",
      className:
        "bg-red-100 text-red-700 border border-red-200",
      icon: <XCircle size={16} />,
    },
    leave: {
      label: "Leave",
      className:
        "bg-yellow-100 text-yellow-700 border border-yellow-200",
      icon: <Clock3 size={16} />,
    },
  };

  const current = styles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${current.className}`}
    >
      {current.icon}
      {current.label}
    </span>
  );
}
"use client";

import { Pencil } from "lucide-react";
import { Student } from "@/types/student";
import StatusBadge from "./StatusBadge";

interface StudentTableProps {
  students: Student[];
  onEdit: (student: Student) => void;
}

export default function StudentTable({
  students,
  onEdit,
}: StudentTableProps) {
  if (students.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <h3 className="text-xl font-semibold text-slate-700">
          No students found
        </h3>
        <p className="mt-2 text-slate-500">
          Try changing the search or filter.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto rounded-2xl bg-white shadow md:block">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Class</th>
              <th className="px-6 py-4 text-left">Section</th>
              <th className="px-6 py-4 text-left">Roll</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="px-6 py-4 font-medium">{student.name}</td>

                <td className="px-6 py-4">{student.class}</td>

                <td className="px-6 py-4">{student.section}</td>

                <td className="px-6 py-4">{student.roll}</td>

                <td className="px-6 py-4">
                  <StatusBadge status={student.status} />
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onEdit(student)}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card */}
      <div className="space-y-4 md:hidden">
        {students.map((student) => (
          <div
            key={student.id}
            className="rounded-2xl bg-white p-5 shadow"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{student.name}</h3>

              <StatusBadge status={student.status} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-slate-500">Class</p>
                <p className="font-medium">{student.class}</p>
              </div>

              <div>
                <p className="text-slate-500">Section</p>
                <p className="font-medium">{student.section}</p>
              </div>

              <div>
                <p className="text-slate-500">Roll</p>
                <p className="font-medium">{student.roll}</p>
              </div>
            </div>

            <button
              onClick={() => onEdit(student)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              <Pencil size={18} />
              Edit Attendance
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
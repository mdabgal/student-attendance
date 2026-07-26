"use client";

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

  // Empty State
  if (students.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl font-bold text-slate-800">
            No students found
          </h2>

          <p className="mt-2 text-slate-500">
            Try changing your search or class filter.
          </p>
        </div>
      </section>
    );
  }


  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="w-full min-w-[700px]">

          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Class
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Section
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Roll
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Action
              </th>
            </tr>
          </thead>


          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-t border-slate-200 hover:bg-slate-50"
              >

                <td className="px-6 py-4 font-medium text-slate-800">
                  {student.name}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {student.class}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {student.section}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {student.roll}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={student.status} />
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => onEdit(student)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </section>
  );
}
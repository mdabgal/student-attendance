"use client";

import { Student, AttendanceStatus } from "@/types/student";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface AttendanceModalProps {
  isOpen: boolean;
  student: Student | null;
  onClose: () => void;
  onSave: (status: AttendanceStatus) => void;
}

export default function AttendanceModal({
  isOpen,
  student,
  onClose,
  onSave,
}: AttendanceModalProps) {
  const [status, setStatus] = useState<AttendanceStatus>("present");

  useEffect(() => {
    if (student) {
      setStatus(student.status);
    }
  }, [student]);

  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Update Attendance
            </h2>
            <p className="text-sm text-slate-500">
              Change student attendance status
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-5 p-6">
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">{student.name}</h3>

            <p className="mt-1 text-sm text-slate-500">
              Class {student.class} • Section {student.section} • Roll{" "}
              {student.roll}
            </p>
          </div>

          <div>
            <label className="mb-3 block font-semibold text-slate-700">
              Attendance Status
            </label>

            <div className="space-y-3">
              {(["present", "absent", "leave"] as AttendanceStatus[]).map(
                (item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border p-3 hover:bg-slate-50"
                  >
                    <input
                      type="radio"
                      name="status"
                      value={item}
                      checked={status === item}
                      onChange={() => setStatus(item)}
                    />

                    <span className="capitalize font-medium">{item}</span>
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-2 font-medium transition hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(status)}
            className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchFilter from "@/components/home/SearchFilter";
import SummaryCards from "@/components/home/SummaryCards";
import StudentTable from "@/components/attendance/StudentTable";
import StudentSkeleton from "@/components/attendance/StudentSkeleton";
import AttendanceModal from "@/components/attendance/AttendanceModal";
import Footer from "@/components/layout/Footer";

import { Student, AttendanceStatus } from "@/types/student";

export default function Home() {
  const [studentList, setStudentList] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");

  const [selectedStudent, setSelectedStudent] =
    useState<Student | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/students`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch students");
        }

        const data = await res.json();

        setStudentList(data);
      } catch {
        setError(
          "Something went wrong while loading students"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);
    const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleSave = async (
    status: AttendanceStatus
  ) => {
    if (!selectedStudent) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/students/${selectedStudent.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to update attendance"
        );
      }

      const updatedStudent =
        await res.json();

      setStudentList((prev) =>
        prev.map((student) =>
          student.id === updatedStudent.id
            ? updatedStudent
            : student
        )
      );

      toast.success(
        "Attendance updated successfully"
      );

      setIsModalOpen(false);
      setSelectedStudent(null);
    } catch {
      toast.error(
        "Failed to update attendance"
      );
    }
  };

  const filteredStudents =
    studentList.filter((student) => {
      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesClass =
        selectedClass === "All" ||
        student.class === selectedClass;

      return (
        matchesSearch &&
        matchesClass
      );
    });

  const totalStudents =
    studentList.length;

  const presentStudents =
    studentList.filter(
      (student) =>
        student.status === "present"
    ).length;

  const totalClasses =
    new Set(
      studentList.map(
        (student) => student.class
      )
    ).size;

  const attendanceRate =
    totalStudents === 0
      ? 0
      : Math.round(
          (presentStudents /
            totalStudents) *
            100
        );
          return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">

        <Hero
          totalStudents={totalStudents}
          totalClasses={totalClasses}
          attendanceRate={attendanceRate}
        />

        <SearchFilter
          search={search}
          setSearch={setSearch}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
        />

        <SummaryCards
          students={studentList}
        />

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-center text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <StudentSkeleton />
        ) : filteredStudents.length === 0 ? (
          <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-slate-700">
              No students found
            </h2>

            <p className="mt-2 text-slate-500">
              Try changing your search or filter
            </p>
          </div>
        ) : (
          <StudentTable
            students={filteredStudents}
            onEdit={handleEdit}
          />
        )}

        <AttendanceModal
          isOpen={isModalOpen}
          student={selectedStudent}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedStudent(null);
          }}
          onSave={handleSave}
        />
      </div>

      <Footer />
    </main>
  );
}
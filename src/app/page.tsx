"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchFilter from "@/components/home/SearchFilter";
import SummaryCards from "@/components/home/SummaryCards";
import StudentTable from "@/components/attendance/StudentTable";
import AttendanceModal from "@/components/attendance/AttendanceModal";

import { students } from "@/data/students";
import { Student, AttendanceStatus } from "@/types/student";

export default function Home() {
  const [studentList, setStudentList] = useState(students);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleSave = (status: AttendanceStatus) => {
    if (!selectedStudent) return;

    setStudentList((prev) =>
      prev.map((student) =>
        student.id === selectedStudent.id
          ? { ...student, status }
          : student
      )
    );

    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Hero />

        <SearchFilter />

        <SummaryCards />

        <StudentTable
          students={studentList}
          onEdit={handleEdit}
        />

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
    </main>
  );
}
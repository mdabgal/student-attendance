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
  // Student List
  const [studentList, setStudentList] = useState(students);

  // Search
  const [search, setSearch] = useState("");

  // Class Filter
  const [selectedClass, setSelectedClass] = useState("All");

  // Modal
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Edit Button
  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  // Save Attendance
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

  // Search + Filter
  const filteredStudents = studentList.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesClass =
      selectedClass === "All" ||
      student.class === selectedClass;

    return matchesSearch && matchesClass;
  });

  // Summary
  const totalStudents = studentList.length;

  const presentStudents = studentList.filter(
    (student) => student.status === "present"
  ).length;

  const absentStudents = studentList.filter(
    (student) => student.status === "absent"
  ).length;

  const leaveStudents = studentList.filter(
    (student) => student.status === "leave"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Hero />

        <SearchFilter
          search={search}
          setSearch={setSearch}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
        />
<SummaryCards
  students={studentList}
/>

        <StudentTable
          students={filteredStudents}
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
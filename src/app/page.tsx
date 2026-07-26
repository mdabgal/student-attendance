"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchFilter from "@/components/home/SearchFilter";
import SummaryCards from "@/components/home/SummaryCards";
import StudentTable from "@/components/attendance/StudentTable";
import { students } from "@/data/students";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-8 space-y-8">
        <Hero />
        <SearchFilter />
        <SummaryCards/>

        <StudentTable
  students={students}
  onEdit={(student) => console.log(student)}
/>
      </div>
    </main>
  );
}
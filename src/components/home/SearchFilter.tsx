"use client";

import { Search, Filter } from "lucide-react";

interface SearchFilterProps {
  search: string;
  setSearch: (value: string) => void;
  selectedClass: string;
  setSelectedClass: (value: string) => void;
}

export default function SearchFilter({
  search,
  setSearch,
  selectedClass,
  setSelectedClass,
}: SearchFilterProps) {

  console.log({
    search,
    selectedClass,
    setSearch,
    setSelectedClass,
  });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="relative w-full md:max-w-md">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search student by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>


        <div className="relative w-full md:w-64">
          <Filter
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="All">All Classes</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>
        </div>

      </div>
    </section>
  );
}
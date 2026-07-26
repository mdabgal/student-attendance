"use client";

import { Search, Filter } from "lucide-react";

export default function SearchFilter() {
  return (
    <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    
        <div className="relative w-full md:max-w-md">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search student by name..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

      
        <div className="relative w-full md:w-60">
          <Filter
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
            <option>All Classes</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
          </select>
        </div>
      </div>
    </section>
  );
}
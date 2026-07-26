"use client";

import Link from "next/link";
import { Menu, X, GraduationCap, LayoutDashboard } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <GraduationCap size={22} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Student Attendance
            </h2>
            <p className="text-xs text-slate-500">
              Attendance Management System
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 font-medium text-blue-600"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 font-medium text-blue-600"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
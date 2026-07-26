import { ArrowRight, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 px-6 py-12 text-white shadow-xl md:px-12 md:py-16">
   
      <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
            <GraduationCap size={18} />
            Student Attendance Dashboard
          </div>

          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Manage Student Attendance
            <span className="block text-cyan-200">Faster & Smarter</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 md:text-lg">
            Track attendance, update student status, and monitor attendance
            records with a modern, responsive dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105 hover:bg-slate-100">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-white/60 px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-700">
              View Attendance
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="grid w-full max-w-sm grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="mt-2 text-blue-100">Students</p>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="mt-2 text-blue-100">Attendance</p>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <h3 className="text-3xl font-bold">3</h3>
            <p className="mt-2 text-blue-100">Classes</p>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <h3 className="text-3xl font-bold">A+</h3>
            <p className="mt-2 text-blue-100">Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
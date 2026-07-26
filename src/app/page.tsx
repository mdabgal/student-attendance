export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Hero Section */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-8 text-white shadow-xl md:p-14">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
              Student Attendance System
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Manage Student Attendance Easily
            </h1>

            <p className="mt-5 text-base text-blue-100 md:text-lg">
              Keep track of student attendance efficiently with a clean,
              responsive and modern dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-slate-100">
                View Students
              </button>

              <button className="rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-700">
                Attendance Summary
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
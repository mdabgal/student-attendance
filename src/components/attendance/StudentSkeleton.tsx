export default function StudentSkeleton() {
  return (
    <section className="space-y-4">

      {
        Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="
            animate-pulse
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            "
          >

            <div className="flex items-center justify-between">

              <div className="h-5 w-32 rounded bg-slate-200"></div>

              <div className="h-6 w-20 rounded-full bg-slate-200"></div>

            </div>


            <div className="mt-5 space-y-3">

              <div className="h-4 w-40 rounded bg-slate-200"></div>

              <div className="h-4 w-36 rounded bg-slate-200"></div>

              <div className="h-4 w-28 rounded bg-slate-200"></div>

            </div>


            <div className="mt-5 h-10 w-full rounded-xl bg-slate-200"></div>


          </div>
        ))
      }

    </section>
  );
}
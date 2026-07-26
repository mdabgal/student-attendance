import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-8">
        <Hero />
      </div>
    </main>
  );
}
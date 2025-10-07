"use client";
import NavbarComponent from "../compounent/ui/tableleft";

export default function ExplorePage() {
  return (
    <div className="min-h-screen px-4 py-3 bg-black">
      <NavbarComponent />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Explore</h1>
        <p className="text-zinc-400">Discover new music and artists</p>
      </div>

      {/* Content Placeholder */}
      <div className="text-center py-20">
        <h2 className="text-2xl text-white mb-4">Coming Soon</h2>
        <p className="text-zinc-400">Explore page is under development</p>
      </div>
    </div>
  );
}

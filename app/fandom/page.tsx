"use client";
import NavbarComponent from "../compounent/ui/tableleft";

export default function FandomPage() {
  return (
    <div className="min-h-screen px-4 py-3 theme-bg-primary">
      <NavbarComponent />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold theme-text-primary mb-2">Producer</h1>
        {/* <p className="text-zinc-400">
          Connect with your favorite artists and fans
        </p> */}
      </div>

      {/* Content Placeholder */}
      <div className="text-center py-20">
        <h2 className="text-2xl theme-text-primary mb-4">Coming Soon</h2>
        <p className="theme-text-secondary">
          Producer page is under development
        </p>
      </div>
    </div>
  );
}

import { Link } from "@nextui-org/react";
import ProfileDrawerRight from "./drawer-profile";

export default function Navbar() {
  return (
    <div className="flex font-semibold mx-auto gap-4 justify-between w-full items-center pb-2">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img
          src="https://lh3.google.com/u/0/d/1p5pYU4CkMt_icS1f11dNhoRQGK9VbUEl=w542-h406-p-k-nu-iv1"
          alt="Muso Music Logo"
          className="w-10 h-10 rounded-lg object-cover border border-gray-300"
          width={40}
          height={40}
          onError={(e) => {
            // Fallback to a simple "M" logo if image fails to load
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = "flex";
            }
          }}
        />
        {/* Fallback logo - shows if image fails to load */}
        <div
          className="w-10 h-10 rounded-lg bg-green-500 items-center justify-center text-white font-bold text-lg"
          style={{ display: "none" }}
        >
          M
        </div>
      </div>

      <div className="flex gap-6 mx-auto justify-between w-full items-center">
        <Link
          className="theme-text-primary text-sm ml-4"
          href="/"
          underline="active"
        >
          ForYou
        </Link>
        <Link
          className="theme-text-primary text-sm"
          href="/music"
          underline="active"
        >
          Music
        </Link>
        <Link
          className="theme-text-primary text-sm"
          href="/fandom"
          underline="active"
        >
          Producer
        </Link>
      </div>
      <ProfileDrawerRight />
    </div>
  );
}

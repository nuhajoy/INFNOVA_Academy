import { Link, NavLink } from "react-router-dom";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600 font-semibold text-base">
            IN
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">INFNOVA</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">
              Academy
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Courses
          </NavLink>
          <button type="button" className="text-gray-600 hover:text-gray-900">
            About
          </button>
          <button type="button" className="text-gray-600 hover:text-gray-900">
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:brightness-105 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  );
}

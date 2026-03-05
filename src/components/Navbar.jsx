import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/30 shadow-sm px-6 py-4 flex justify-between items-center transition-all duration-300">
      
      <h1 className="text-xl font-bold text-gray-800">
        Cat Gallery Pro
      </h1>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 font-semibold hover:text-blue-600 transition-colors"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 font-semibold hover:text-blue-600 transition-colors"
          }
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}
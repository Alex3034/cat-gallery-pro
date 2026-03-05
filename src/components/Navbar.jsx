import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-6 py-4 flex justify-between items-center 
      transition-all duration-300
      ${
        scrolled
          ? "backdrop-blur-lg bg-white/80 shadow-md border-b border-white/40"
          : "backdrop-blur-md bg-white/60 shadow-sm border-b border-white/30"
      }`}
    >
      <h1
        className={`font-bold text-gray-800 transition-all duration-300 
        ${
          scrolled
            ? "text-lg tracking-tight"
            : "text-xl tracking-normal"
        }`}
      >
        Cat Gallery Pro
      </h1>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold transition-all duration-200 ${
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600 hover:opacity-80"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `font-semibold transition-all duration-200 ${
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600 hover:opacity-80"
            }`
          }
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}
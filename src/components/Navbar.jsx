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
      role="navigation"
      aria-label="Main Navigation"
      className={`sticky top-0 z-50 px-6 flex justify-between items-center 
      transition-all duration-300
      ${scrolled
          ? "py-3 backdrop-blur-lg bg-white/80 shadow-md border-b border-white/40"
          : "py-4 backdrop-blur-md bg-white/60 shadow-sm border-b border-white/30"
        }`}
    >
      <h1
        className={`flex items-center gap-2 font-bold text-gray-800 transition-all duration-300 ${scrolled ? "text-lg tracking-tight" : "text-xl tracking-normal"
          }`}
      >
        <img src="../assets/cat-gallery-pro-icon.svg" alt="Icono de la app" className="w-6 h-6" />

        Cat Gallery Pro
      </h1>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold transition-all duration-200 ${isActive
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600 hover:opacity-80"
            }`
          }
        >
          {({ isActive }) => (
            <span aria-current={isActive ? "page" : undefined}>
              Home
            </span>
          )}
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `font-semibold transition-all duration-200 ${isActive
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600 hover:opacity-80"
            }`
          }
        >
          {({ isActive }) => (
            <span aria-current={isActive ? "page" : undefined}>
              Favorites
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
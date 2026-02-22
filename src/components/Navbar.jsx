import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Cat Gallery Pro</h1>
      <div className="flex gap-4">
        <Link
          to="/"
          className="text-gray-700 font-semibold hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="text-gray-700 font-semibold hover:text-blue-600 transition-colors"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

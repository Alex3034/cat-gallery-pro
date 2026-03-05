import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import CatGallery from "../components/CatGallery";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="flex items-center justify-center px-4 py-20">
          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg w-full text-center transition-all duration-300">

            <div className="text-5xl mb-6">🐱</div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              No favorite cats yet
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              You haven't added any cats to your favorites.
              Start exploring and save the ones you love the most.
            </p>

            <NavLink
              to="/"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl 
            hover:bg-blue-600 transition-all duration-300 
            shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Cats
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <CatGallery cats={favorites} />
    </div>
  );
}
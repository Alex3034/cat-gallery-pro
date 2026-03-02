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

        <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
          <div className="text-6xl mb-4">🐱</div>

          <h2 className="text-2xl font-semibold mb-2">
            No favorite cats yet
          </h2>

          <p className="text-gray-600 max-w-md mb-6">
            You haven't added any cats to your favorites.
            Start exploring and save the ones you love the most.
          </p>

          <NavLink
            to="/"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Explore Cats
          </NavLink>
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
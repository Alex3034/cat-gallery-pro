import Navbar from "../components/Navbar";
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
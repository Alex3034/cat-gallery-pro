import Navbar from "../components/Navbar";
import { useFavorites } from "../context/FavoritesContext";
import CatGallery from "../components/CatGallery";

export default function Favorites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {favorites.length === 0 ? (
        <p className="p-4 text-center text-lg">
          No tienes gatos favoritos aún. 💔
        </p>
      ) : (

        <CatGallery cats={favorites} />
        
      )}
    </div>
  );
}
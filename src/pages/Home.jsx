import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import useCats from "../hooks/useCats";

export default function Home() {
  const { cats, loading, error, handleLoadMore } = useCats();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  const toggleFavorite = (cat) => {
    const isFavorite = favorites.some((fav) => fav.id === cat.id);

    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== cat.id);
    } else {
      updatedFavorites = [...favorites, cat];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (cat) => favorites.some((fav) => fav.id === cat.id);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {loading && (
        <p className="p-4 text-center text-lg">Cargando gatos...</p>
      )}

      {error && (
        <p className="p-4 text-center text-red-500">{error}</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">

        {cats.map((cat) => (
          <div key={cat.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={cat.url}
              alt="Cat"
              className="w-full h-60 object-cover"
            />

            <button
              onClick={() => toggleFavorite(cat)}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
            >
              {isFavorite(cat) ? "💖" : "🤍"}
            </button>

          </div>
        ))}
      </div>

        <button
          onClick={handleLoadMore}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Ver más
        </button>
    </div>
  );
}
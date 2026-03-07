import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import HeartIcon from "./icons/HeartIcon";

export default function CatCard({ cat }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition">

      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}

      <img
        src={cat.url}
        alt="Cat"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-60 object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <button
        onClick={() => toggleFavorite(cat)}
        aria-label="Toggle favorite"
        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:scale-110 transition"
      >
        <HeartIcon filled={isFavorite(cat.id)} />
      </button>

    </div>
  );
}
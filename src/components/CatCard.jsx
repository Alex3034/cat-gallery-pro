import { useFavorites } from "../context/FavoritesContext";

export default function CatCard({ cat }) {
    const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
            <img
                src={cat.url}
                alt="Cat"
                className="w-full h-60 object-cover"
            />

            <button
                onClick={() => toggleFavorite(cat)}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
            >
                {isFavorite(cat.id) ? "💖" : "🤍"}
            </button>
        </div>
    );
}
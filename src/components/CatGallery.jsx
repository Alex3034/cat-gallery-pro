export default function CatGallery({ cats, toggleFavorite, isFavorite }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cats.map((cat) => (
        <div
          key={cat.id}
          className="relative bg-white rounded-lg shadow-md overflow-hidden"
        >
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
  );
}
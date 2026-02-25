import CatCard from "./CatCard";

export default function CatGallery({ cats, toggleFavorite, isFavorite }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          cat={cat}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      ))}
    </div>
  );
}
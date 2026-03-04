import CatCard from "./CatCard";

export default function CatGallery({ cats , loaderRef}) {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
      <div ref={loaderRef} className="h-10"></div>
    </div>
  );
}
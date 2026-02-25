import Navbar from "../components/Navbar";
import useCats from "../hooks/useCats";
import CatGallery from "../components/CatGallery";
import LoadMoreButton from "../components/LoadMoreButton";

export default function Home() {
  const { cats, loading, error, handleLoadMore } = useCats();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {loading && (
        <p className="p-4 text-center text-lg">Cargando gatos...</p>
      )}

      {error && (
        <p className="p-4 text-center text-red-500">{error}</p>
      )}

      <CatGallery
        cats={cats}
      />
      
      <LoadMoreButton onClick={handleLoadMore} loading={loading} />
      
    </div>
  );
}
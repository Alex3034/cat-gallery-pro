import Navbar from "../components/Navbar";
import useCats from "../hooks/useCats";
import CatGallery from "../components/CatGallery";
import Loader from "../components/Loader";

export default function Home() {
  const { cats, loading, error, loaderRef } = useCats();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {error && (
        <p className="p-4 text-center text-red-500">{error}</p>
      )}

      <CatGallery cats={cats} loaderRef={loaderRef} />
            
      {loading && <Loader />}
    </div>
  );
}
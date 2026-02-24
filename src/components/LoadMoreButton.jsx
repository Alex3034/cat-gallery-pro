export default function LoadMoreButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      disabled={loading}
    >
      {loading ? "Cargando..." : "Ver más"}
    </button>
  );
}
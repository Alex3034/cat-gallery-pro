export default function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100/50 z-50">
      <div className="flex flex-col justify-center items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-500 font-medium">Loading...</p>
      </div>
    </div>
  );
}
export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col justify-center items-center py-6">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {text && (
        <p className="mt-3 text-blue-500 font-medium text-sm">
          {text}
        </p>
      )}
    </div>
  );
}
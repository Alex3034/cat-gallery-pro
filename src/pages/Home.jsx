import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h2 className="text-center text-2xl font-bold mt-6">
        Bienvenido a Cat Gallery Pro
      </h2>
      <p className="text-center mt-2 mb-6">
        Explora una galería de gatos adorables y guarda tus favoritos.
      </p>
    </div>
  );
}
import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (cat) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === cat.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== cat.id);
      }
      return [...prev, cat];
    });
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}
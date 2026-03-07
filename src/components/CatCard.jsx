import { useState } from "react";
import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import HeartIcon from "./icons/HeartIcon";

function CatCard({ cat }) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const [loaded, setLoaded] = useState(false);
    const [animate, setAnimate] = useState(false);
    const favorite = isFavorite(cat.id);

    return (
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition">

            {!loaded && (
                <div className="absolute inset-0 h-60 bg-gray-200 animate-pulse"></div>
            )}

            <img
                src={cat.url}
                alt="Cat"
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`w-full h-60 object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            />

            <button
                onClick={() => {
                    toggleFavorite(cat);
                    setAnimate(true);

                    setTimeout(() => {
                        setAnimate(false);
                    }, 500);
                }}
                aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow 
                    transition-all duration-200 hover:scale-110 active:scale-90">

                <div className="relative flex items-center justify-center">
                    <HeartIcon filled={favorite} />

                    {animate && (
                        <>
                            <span className="particle particle1"></span>
                            <span className="particle particle2"></span>
                            <span className="particle particle3"></span>
                            <span className="particle particle4"></span>
                        </>
                    )}
                </div>
            </button>
        </div>
    );
}

export default React.memo(CatCard);
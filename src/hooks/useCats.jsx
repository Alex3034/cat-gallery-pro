import { useEffect, useRef, useState } from "react";

export default function useCats(limit = 9) {
    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loaderRef = useRef(null);

    const fetchCats = async (pageNumber) => {
        if (loading) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${pageNumber}`
            );

            const data = await response.json();
            setCats((prevCats) => [...prevCats, ...data]);
        } catch (err) {
            setError("Failed to load cats.");
        } finally {
            setLoading(false);
        }
    };

    const loadMore = () => {
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        fetchCats(page);
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting && !loading) {
                    loadMore();
                }
            },
            {
                root: null,
                rootMargin: "200px",
                threshold: 0,
            }
        );

        const currentRef = loaderRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [loading]);

    return {
        cats,
        loading,
        error,
        loaderRef,
    };
}
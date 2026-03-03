import { useEffect, useState } from "react";

export default function useCats(limit = 9) {

    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCats = async (pageNumber) => {
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

    useEffect(() => {
        fetchCats(page);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;

            if (scrollTop + windowHeight >= fullHeight - 300 && !loading) {
                handleLoadMore();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, page]);

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchCats(nextPage);
    };

    return {
        cats,
        loading,
        error,
        handleLoadMore,
    };
}
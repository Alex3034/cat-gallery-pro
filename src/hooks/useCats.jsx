import { useEffect, useState } from "react";

export default function useCats() {

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
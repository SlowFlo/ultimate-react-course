import { useEffect, useState } from "react";

const KEY = "bf811763";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // actually could now be an eventHandler attached to the searchBar
  // useEffect only usefull if we want to start searching as soon as the component mount
  useEffect(
    function () {
      // Doesn't work, the solution is to use useCallback (see later in the course)
      // callback?.();
      // => const handleCloseMovie = useCallback(() => setSelectedID(null), []);

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies.");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          if (err.name === "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query],
  );

  return { movies, isLoading, error };
}

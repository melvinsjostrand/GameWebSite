import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";



interface Genre{
    id: number;
    name: string;
}

interface FetchGenres{
    count : number;
    results: Genre[];
}

const useGenres = () => {
  const [isLoading, setLoading] = useState(false);
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGenres>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return {genres, error, isLoading };
}
    export default useGenres;
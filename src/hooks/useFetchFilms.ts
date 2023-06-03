import { allFilms } from "@/services/films";
import { IActorFilm } from "@/types/actorFilm";
import { useState } from "react";

export const useFetchFilms = () => {
  const [isLoading, setLoading] = useState(false);
  const [films, setFilms] = useState<IActorFilm[]>([]);

  const FetchFilms = async (id: string) => {
    setLoading(true);

    const data = await allFilms.getAllFilmography(id);

    const filtered = data?.filmography?.filter(({ status, titleType }) => {
      return status === "released" && titleType === "movie";
    });

    setFilms(filtered);

    setLoading(false);
  };

  return { isLoading, films, FetchFilms };
};

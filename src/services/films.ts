import { singleFilm } from "@/intefaces/interfaces";
import { IActorFilm } from "@/types/actorFilm";
import {
  baseHeaders,
  gatTopRatedMovies,
  getAllFilmography,
  moviesByGenre,
} from "@/utils/constants";
import axios from "axios";

export const allFilms = {
  getAllFilms: async () => {
    const res = await axios.get<singleFilm[]>(gatTopRatedMovies, {
      headers: baseHeaders,
    });
    return res.data;
  },

  getAllFilmography: async (id: string) => {
    const { data } = await axios.get<{ filmography: IActorFilm[] }>(
      getAllFilmography,
      {
        params: {
          nconst: id,
        },
        headers: baseHeaders,
      }
    );
    return data;
  },

  getMoviesByGenre: async (genre: string) => {
    const res = await axios.get<string[]>(moviesByGenre, {
      params: {
        genre: genre.toLowerCase().replaceAll(" ", "-"),
        limit: "30",
      },
      headers: baseHeaders,
    });
    return res.data;
  },
};

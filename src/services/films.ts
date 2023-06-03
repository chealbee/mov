import { singleFilm } from "@/intefaces/interfaces";
import { IActorFilm } from "@/types/actorFilm";
import { APIHOST, APIKEY, moviesByGenre } from "@/utils/constants";
import axios from "axios";

export const allFilms = {
  getAllFilms: async () => {
    const res = await axios.get<singleFilm[]>(
      "https://imdb8.p.rapidapi.com/title/get-top-rated-movies",
      {
        headers: {
          "X-RapidAPI-Key": APIKEY,
          "X-RapidAPI-Host": APIHOST,
        },
      }
    );
    return res.data;
  },

  getAllFilmography: async (id: string) => {
    const { data } = await axios.get<{ filmography: IActorFilm[] }>(
      "https://imdb8.p.rapidapi.com/actors/get-all-filmography",
      {
        params: {
          nconst: id,
        },
        headers: {
          "X-RapidAPI-Key": APIKEY,
          "X-RapidAPI-Host": APIHOST,
        },
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
      headers: {
        "X-RapidAPI-Key": APIKEY,
        "X-RapidAPI-Host": APIHOST,
      },
    });
    return res.data;
  },
};

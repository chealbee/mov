import { APIHOST, APIKEY, moviesByGenre } from "@/utils/constants";
import axios from "axios";

export const getGanres = {
  getMoviesByGenre: async (genre: string) => {
    const res = await axios.get<string[]>(moviesByGenre, {
      params: {
        genre: genre,
        limit: "100",
      },
      headers: {
        "X-RapidAPI-Key": APIKEY,
        "X-RapidAPI-Host": APIHOST,
      },
    });

    return res.data;
  },
};

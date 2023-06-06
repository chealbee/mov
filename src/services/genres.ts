import { baseHeaders, moviesByGenre } from "@/utils/constants";
import axios from "axios";

export const getGanres = {
  getMoviesByGenre: async (genre: string) => {
    const res = await axios.get<string[]>(moviesByGenre, {
      params: {
        genre: genre,
        limit: "100",
      },
      headers: baseHeaders,
    });

    return res.data;
  },
};

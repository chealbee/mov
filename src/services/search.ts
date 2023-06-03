import { IFind } from "@/types/seacrh";
import { APIHOST, APIKEY } from "@/utils/constants";
import axios from "axios";

export const search = {
  searchFilms: async (title: string) => {
    const res = await axios.get<IFind>(
      "https://imdb8.p.rapidapi.com/title/v2/find",
      {
        params: {
          title: title,
          limit: "20",
          sortArg: "moviemeter,asc",
        },
        headers: {
          "X-RapidAPI-Key": APIKEY,
          "X-RapidAPI-Host": APIHOST,
        },
      }
    );

    const results = res.data.results;

    return results;
  },
};

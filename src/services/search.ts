import { IFind } from "@/types/seacrh";
import { baseHeaders, findFilmByName } from "@/utils/constants";
import axios from "axios";

export const search = {
  searchFilms: async (title: string) => {
    const res = await axios.get<IFind>(findFilmByName, {
      params: {
        title: title,
        limit: "20",
        sortArg: "moviemeter,asc",
      },
      headers: baseHeaders,
    });

    return res.data.results;
  },
};

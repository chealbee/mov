import { IFilmInfo } from "@/intefaces/singleFIlm";
import { baseHeaders, getOvervives } from "@/utils/constants";
import axios from "axios";

export const fetchOvervives = {
  getOvevives: async (id: string) => {
    const res = await axios.get<IFilmInfo>(getOvervives, {
      params: { tconst: id },
      headers: baseHeaders,
    });

    return res.data;
  },
};

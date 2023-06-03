import { IActor } from "@/store/singleFilsm";
import { APIHOST, APIKEY, topCredits } from "@/utils/constants";
import axios from "axios";

export const getSingleFim = {
  fetchSingleFim: async (id: string) => {
    const res = await axios.get<{ cast: IActor[] }>(topCredits, {
      params: {
        tconst: id,
      },
      headers: {
        "X-RapidAPI-Key": APIKEY,
        "X-RapidAPI-Host": APIHOST,
      },
    });
    const data = res.data;

    return data;
  },
};

import { IActor } from "@/store/singleFilsm";
import { baseHeaders, topCredits } from "@/utils/constants";
import axios from "axios";

export const getSingleFim = {
  fetchSingleFim: async (id: string) => {
    const res = await axios.get<{ cast: IActor[] }>(topCredits, {
      params: {
        tconst: id,
      },
      headers: baseHeaders,
    });

    return res.data;
  },
};

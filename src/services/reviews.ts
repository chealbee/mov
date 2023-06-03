import { IReview } from "@/types/reviews";
import { APIHOST, APIKEY, getUserReviews } from "@/utils/constants";
import axios from "axios";

export const reviews = {
  getUserReviews: async (id: string) => {
    const res = await axios.get<{ reviews: IReview[] }>(getUserReviews, {
      params: {
        tconst: id,
      },
      headers: {
        "X-RapidAPI-Key": APIKEY,
        "X-RapidAPI-Host": APIHOST,
      },
    });

    return res.data;
  },
};

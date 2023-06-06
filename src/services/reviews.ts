import { IReview } from "@/types/reviews";
import { baseHeaders, getUserReviews } from "@/utils/constants";
import axios from "axios";

export const reviews = {
  getUserReviews: async (id: string) => {
    const res = await axios.get<{ reviews: IReview[] }>(getUserReviews, {
      params: {
        tconst: id,
      },
      headers: baseHeaders,
    });

    return res.data;
  },
};

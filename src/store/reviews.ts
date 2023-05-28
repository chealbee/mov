import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { getUserReviews } from "@/utils/constants";

interface IReview {
  author: { displayName: string; userId: string };
  authorRating: number;
  helpfulnessScore: number;
  languageCode: string;
  reviewText: string;
  reviewTitle: string;
  spoiler: boolean;
  submissionDate: string;
}

interface IuseReviews {
  isLoading: boolean;
  reviews: IReview[];
  getReviewsToFilm: (id: string) => void;
}

export const useReviews = create<IuseReviews>()(
  persist(
    (set) => ({
      isLoading: false,
      reviews: [],
      getReviewsToFilm: async (id: string) => {
        set({ isLoading: true });

        const res = await axios.get<{ reviews: IReview[] }>(getUserReviews, {
          params: {
            tconst: id,
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
          },
        });

        const data = res.data;
        set({ reviews: data.reviews, isLoading: false });
      },
    }),
    {
      name: "review",
    }
  )
);

export default useReviews;

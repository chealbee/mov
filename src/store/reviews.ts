import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IuseReviews } from "@/types/reviews";
import { reviews } from "@/services/reviews";

export const useReviews = create<IuseReviews>()(
  persist(
    (set) => ({
      isLoading: false,
      reviews: [],
      getReviewsToFilm: async (id: string) => {
        set({ isLoading: true });
        const data = await reviews.getUserReviews(id);
        set({ reviews: data.reviews, isLoading: false });
      },
    }),
    {
      name: "review",
    }
  )
);

export default useReviews;

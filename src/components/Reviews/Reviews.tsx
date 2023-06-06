"use client";
import styles from "@/styles/Reviews.module.css";
import { useEffect } from "react";
import Preloader from "../ui/Preloader/Preloader";
import useReviews from "@/store/reviews";
import ReviewsList from "./ReviewsList";

const Reviews = ({ id, iShow }: { id: string; iShow: boolean }) => {
  const isLoading = useReviews((st) => st.isLoading);
  const reviews = useReviews((st) => st.reviews);
  const getReviewsToFilm = useReviews((st) => st.getReviewsToFilm);

  useEffect(() => {
    if (iShow) getReviewsToFilm(id);
  }, [iShow]);

  if (!iShow) return null;

  return (
    <>
      <div className={styles.list}>
        <h2>Reviews</h2>

        {isLoading ? (
          <Preloader />
        ) : reviews?.length ? (
          <ReviewsList reviews={reviews} />
        ) : (
          <div className={styles.results}>No reviews yet</div>
        )}
      </div>
    </>
  );
};

export default Reviews;

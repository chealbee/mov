"use client";
import styles from "@/styles/Reviews.module.css";
import { useEffect } from "react";
import Preloader from "../ui/Preloader";
import useReviews from "@/store/reviews";
import useSingleFilm from "@/store/singleFilsm";
import ReviewsList from "./ReviewsList";

const Reviews = ({ id }: { id: string }) => {
  const isMore = useSingleFilm((st) => st.isMoreInfo);
  const isLoading = useReviews((st) => st.isLoading);
  const reviews = useReviews((st) => st.reviews);
  const getReviewsToFilm = useReviews((st) => st.getReviewsToFilm);

  useEffect(() => {
    if (isMore) getReviewsToFilm(id);
  }, [isMore]);

  return (
    <>
      {isMore ? (
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
      ) : null}
    </>
  );
};

export default Reviews;

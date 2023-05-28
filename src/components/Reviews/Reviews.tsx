"use client";
import styles from "@/styles/Reviews.module.css";
import { useEffect } from "react";
import Preloader from "../Preloader";
import useReviews from "@/store/reviews";
import Text from "./TextReciews";
import useSingleFilm from "@/store/singleFilsm";

const Reviews = ({ id }: { id: string }) => {
  const isLoading = useReviews((st) => st.isLoading);
  const reviews = useReviews((st) => st.reviews);
  const getReviewsToFilm = useReviews((st) => st.getReviewsToFilm);

  const isMore = useSingleFilm((st) => st.isMoreInfo);

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
            <div className={styles.container}>
              <div className={styles.reviews}>
                {reviews.map(
                  ({
                    author: { displayName, userId },
                    authorRating,
                    reviewText,
                    reviewTitle,
                    submissionDate,
                  }) => (
                    <div className={styles.review} key={userId}>
                      <div className={styles.user}>
                        <div className={styles.header}>
                          <div className={styles.author}>{displayName}</div>
                          <div className={styles.date}>{submissionDate}</div>
                        </div>

                        {authorRating && (
                          <div className={styles.rating}>
                            <span>{authorRating}</span> / 10
                          </div>
                        )}
                      </div>

                      <div className={styles.content}>
                        <div className={styles.title}>{reviewTitle}</div>
                        <Text text={reviewText} />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className={styles.results}>No reviews yet</div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Reviews;

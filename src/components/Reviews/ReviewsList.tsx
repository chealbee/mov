import { IReview } from "@/types/reviews";
import React from "react";
import styles from "@/styles/Reviews.module.css";
import Text from "./TextReciews";

const ReviewsList = ({ reviews }: { reviews: IReview[] }) => {
  return (
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
  );
};

export default ReviewsList;

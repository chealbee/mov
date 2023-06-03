export interface IReview {
  author: { displayName: string; userId: string };
  authorRating: number;
  helpfulnessScore: number;
  languageCode: string;
  reviewText: string;
  reviewTitle: string;
  spoiler: boolean;
  submissionDate: string;
}

export interface IuseReviews {
  isLoading: boolean;
  reviews: IReview[];
  getReviewsToFilm: (id: string) => void;
}

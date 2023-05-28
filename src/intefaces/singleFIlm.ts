export interface IFilmProps {
  params: {
    id: string;
  };
}

export interface IFilmInfo {
  id: string;
  title: {
    id: string;
    image: {
      height: number;
      id: string;
      url: string;
      width: number;
    };
    runningTimeInMinutes: number;
    title: string;
    titleType: string;
    year: number;
  };
  ratings: {
    canRate: boolean;
    rating: number;
    ratingCount: number;
    topRank: number;
  };
  genres: string[];
  releaseDate: string;
  plotOutline: {
    id: string;
    text: string;
  };
  plotSummary: {
    author: string;
    id: string;
    text: string;
  };
}

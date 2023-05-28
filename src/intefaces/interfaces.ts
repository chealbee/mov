export interface singleFilm {
  id: string;
  chartRating: number;
}

export interface IUseAllFilms {
  randomsFilms: string[];
  films: singleFilm[];
  isloading: boolean;
  randomFilm: string;
  isComplete: boolean;
  redirectinginHand: boolean;
  curentGanre: string;
  getAllFilms: () => void;
  setREdirected: () => void;
  setRandomFilm: (randomFilm?: string) => void;
  setLoading: () => void;
  getAllFilmsbyGenres: (genre: string) => void;
}

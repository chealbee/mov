export interface singleFilm {
  id: string;
  chartRating: number;
}

export interface IUseAllFilms {
  randomsFilms: string[];
  films: string[];
  filmsByGanre: string[];
  isloading: boolean;
  randomFilm: string;
  curentGanre: string;
  getAllFilms: () => void;
  getAllFilmsbyGenres: (genre: string) => void;
}

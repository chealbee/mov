export interface IGenres {
  filmsByGanre: string[];
  isloading: boolean;
  getAllFilmsbyGenres: (genre: string) => void;
}

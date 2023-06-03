export interface IFilm {
  id: string;
  image: {
    id: string;
    url: string;
    height: number;
    width: number;
  };

  title: string;
  titleType: string;
  year: number;
}

export interface IFind {
  results: IFilm[];
}

export interface IuseSearch {
  isLoading: boolean;
  filmsbySeacrh: IFilm[];
  isShow: boolean;
  searchFilms: (title: string) => void;
  setIsShowSearchTooltip: (isShow?: boolean) => void;
}

import { create } from "zustand";
import axios from "axios";
import { APIHOST, APIKEY } from "@/utils/constants";

interface IFilm {
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

interface IFind {
  results: IFilm[];
}

interface IuseReviews {
  isLoading: boolean;
  filmsbySeacrh: IFilm[];
  isShow: boolean;
  searchFilms: (title: string) => void;
  setIsShowSearchTooltip: (isShow?: boolean) => void;
}

export const useSeacrh = create<IuseReviews>()((set, get) => ({
  isLoading: false,
  isShow: false,
  filmsbySeacrh: [],
  searchFilms: async (title: string) => {
    set({ isLoading: true });

    const res = await axios.get<IFind>(
      "https://imdb8.p.rapidapi.com/title/v2/find",
      {
        params: {
          title: title,
          limit: "20",
          sortArg: "moviemeter,asc",
        },
        headers: {
          "X-RapidAPI-Key": APIKEY,
          "X-RapidAPI-Host": APIHOST,
        },
      }
    );

    const results = res.data.results;
    set({ isLoading: false, filmsbySeacrh: results, isShow: true });
  },
  setIsShowSearchTooltip: (isShow) => {
    if (isShow) {
      set({ isShow: false });
    } else {
      set({ isShow: !get().isShow });
    }
  },
}));

export default useSeacrh;

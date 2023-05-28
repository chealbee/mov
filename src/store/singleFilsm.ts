import { create } from "zustand";
import axios from "axios";
import { APIHOST, APIKEY, topCredits } from "@/utils/constants";

export interface IActor {
  characters: string[];
  id: string;
  image: {
    height: number;
    url: string;
    width: number;
    id: string;
  };
  name: string;
}

interface IuseSingleFilm {
  isloading: boolean;
  isMoreInfo: boolean;
  setShoweMore: (show?: boolean) => void;
  getCasts: (id: string) => void;
  casts: IActor[];
}

export const useSingleFilm = create<IuseSingleFilm>()((set) => ({
  isMoreInfo: false,
  isloading: false,
  casts: [],
  setShoweMore: (show) => {
    if (show) {
      set({ isMoreInfo: false });
    } else {
      set((state) => {
        return { isMoreInfo: !state.isMoreInfo };
      });
    }
  },

  getCasts: async (id: string) => {
    set({ isloading: true });
    const res = await axios.get<{ cast: IActor[] }>(topCredits, {
      params: {
        tconst: id,
      },
      headers: {
        "X-RapidAPI-Key": APIKEY,
        "X-RapidAPI-Host": APIHOST,
      },
    });
    const data = res.data;
    set({ casts: data.cast, isloading: false });
  },
}));

export default useSingleFilm;

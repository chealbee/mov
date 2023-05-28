import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { topCredits } from "@/utils/constants";

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
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
      },
    });
    const data = res.data;
    set({ casts: data.cast, isloading: false });
  },
}));

export default useSingleFilm;

import { create } from "zustand";
import { getSingleFim } from "@/services/getSingleFilm";

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
    const data = await getSingleFim.fetchSingleFim(id);
    set({ casts: data.cast, isloading: false });
  },
}));

export default useSingleFilm;

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
  getCasts: (id: string) => void;
  casts: IActor[];
}

export const useSingleFilm = create<IuseSingleFilm>()((set) => ({
  isloading: false,
  casts: [],

  getCasts: async (id: string) => {
    set({ isloading: true });
    const data = await getSingleFim.fetchSingleFim(id);
    set({ casts: data.cast, isloading: false });
  },
}));

export default useSingleFilm;

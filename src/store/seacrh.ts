import { create } from "zustand";
import { IuseSearch } from "@/types/seacrh";
import { search } from "@/services/search";

export const useSeacrh = create<IuseSearch>()((set, get) => ({
  isLoading: false,
  filmsbySeacrh: [],
  searchFilms: async (title: string) => {
    set({ isLoading: true });
    const results = await search.searchFilms(title);
    set({ isLoading: false, filmsbySeacrh: results });
  },
}));

export default useSeacrh;

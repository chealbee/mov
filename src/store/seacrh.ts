import { create } from "zustand";
import { IuseSearch } from "@/types/seacrh";
import { search } from "@/services/search";

export const useSeacrh = create<IuseSearch>()((set, get) => ({
  isLoading: false,
  isShow: false,
  filmsbySeacrh: [],
  searchFilms: async (title: string) => {
    set({ isLoading: true });
    const results = await search.searchFilms(title);
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

import { create } from "zustand";
import { getGanres } from "@/services/genres";
import { IGenres } from "@/types/genres";

const useGenres = create<IGenres>((set) => ({
  filmsByGanre: [],
  isloading: false,

  getAllFilmsbyGenres: async (genre: string) => {
    set({ isloading: true });
    const data = await getGanres.getMoviesByGenre(genre);
    set({ isloading: false, filmsByGanre: data });
  },
}));

export default useGenres;

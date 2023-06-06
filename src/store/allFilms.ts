import { getRandom } from "@/utils/common";
import { create } from "zustand";
import { IUseAllFilms } from "../intefaces/interfaces";
import { allFilms } from "@/services/films";

const useAllFilms = create<IUseAllFilms>((set, get) => ({
  films: [],
  filmsByGanre: [],
  randomsFilms: [],
  isloading: false,
  randomFilm: "",
  curentGanre: "",
  getAllFilms: async () => {
    set({ isloading: true });

    const data = await allFilms.getAllFilms();
    const fims = data.map((film) => film.id);
    const randomFilm = fims[getRandom(data.length)].split("/")[2];

    set({
      films: fims,
      isloading: false,
      randomFilm: randomFilm,
    });
  },

  getAllFilmsbyGenres: async (genre: string) => {
    set({ isloading: true, curentGanre: genre });

    const data = await allFilms.getMoviesByGenre(genre);

    set({ isloading: false, filmsByGanre: data });
  },
}));
export default useAllFilms;

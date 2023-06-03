import { getRandom } from "@/utils/common";
import { create } from "zustand";
import { IUseAllFilms } from "../intefaces/interfaces";
import { allFilms } from "@/services/films";

const useAllFilms = create<IUseAllFilms>((set, get) => ({
  films: [],
  randomsFilms: [],
  isloading: false,
  randomFilm: "",
  isComplete: false,
  curentGanre: "",
  redirectinginHand: false,

  getAllFilms: async () => {
    set({ isloading: true });
    const data = await allFilms.getAllFilms();
    const randomFilm = data[getRandom(data.length)].id.split("/")[2];
    set({
      films: data,
      isloading: false,
      isComplete: true,
      randomFilm: randomFilm,
    });
  },

  getAllFilmsbyGenres: async (genre: string) => {
    set({ isloading: true, curentGanre: genre });
    const data = await allFilms.getMoviesByGenre(genre);
    const randomFilm = data[getRandom(data.length)].split("/")[2];
    set({ isloading: false, randomFilm: randomFilm, randomsFilms: data });
  },

  setRandomFilm: (newrandomFilm) => {
    const data = get().films;
    const randomData = get().randomsFilms;

    if (randomData.length && !newrandomFilm && !get().isloading) {
      const randomFilm = randomData[getRandom(randomData.length)].split("/")[2];
      set({ randomFilm });
    }

    if (data.length && !randomData.length && !newrandomFilm) {
      const randomFilm = data[getRandom(data.length)].id.split("/")[2];
      set({ randomFilm });
    }

    if (newrandomFilm) {
      set({ randomFilm: newrandomFilm, redirectinginHand: true });
    }
  },

  setLoading: () => {
    set((st) => {
      return { isloading: !st.isloading };
    });
  },
  setREdirected: () => {
    set({ redirectinginHand: false });
  },
}));
export default useAllFilms;

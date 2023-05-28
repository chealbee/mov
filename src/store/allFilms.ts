import { getRandom } from "@/utils/common";
import axios from "axios";
import { create } from "zustand";
import { IUseAllFilms, singleFilm } from "../intefaces/interfaces";
import { APIHOST, APIKEY, moviesByGenre } from "@/utils/constants";

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
    const res = await axios.get<singleFilm[]>(
      "https://imdb8.p.rapidapi.com/title/get-top-rated-movies",
      {
        headers: {
          "X-RapidAPI-Key": APIKEY,
          "X-RapidAPI-Host": APIHOST,
        },
      }
    );
    const data = res.data;
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

    const res = await axios.get<string[]>(moviesByGenre, {
      params: {
        genre: genre.toLowerCase().replaceAll(" ", "-"),
        limit: "30",
      },
      headers: {
        "X-RapidAPI-Key": APIKEY,
        "X-RapidAPI-Host": APIHOST,
      },
    });

    const data = res.data;
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

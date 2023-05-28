import axios from "axios";
import { create } from "zustand";
import { moviesByGenre } from "@/utils/constants";

interface IGenres {
  filmsByGanre: string[];
  isloading: boolean;
  getAllFilmsbyGenres: (genre: string) => void;
}

const useGenres = create<IGenres>((set) => ({
  filmsByGanre: [],
  isloading: false,
  getAllFilmsbyGenres: async (genre: string) => {
    set({ isloading: true });

    const res = await axios.get<string[]>(moviesByGenre, {
      params: {
        genre: genre,
        limit: "100",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
      },
    });

    const data = res.data;
    set({ isloading: false, filmsByGanre: data });
  },
}));
export default useGenres;

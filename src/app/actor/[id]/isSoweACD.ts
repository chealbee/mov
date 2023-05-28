import { create } from "zustand";

interface IGenres {
  setISOpen: () => void;
  ISOpen: boolean;
  filmslimit: number;
  setfilmslimit: () => void;
  clearfilmslimitsandisopen: () => void;
}

const useIsACD = create<IGenres>((set, get) => ({
  ISOpen: false,
  filmslimit: 5,
  setISOpen: () => {
    set((st) => {
      return { ISOpen: !st.ISOpen };
    });
  },
  setfilmslimit: () => {
    set({ filmslimit: get().filmslimit + 5 });
  },
  clearfilmslimitsandisopen: () => {
    set({ ISOpen: false, filmslimit: 5 });
  },
}));
export default useIsACD;

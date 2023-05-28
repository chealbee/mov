"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

import search from "@/images/search.png";
import refresh from "@/images/refresh.png";
import useSeacrh from "@/store/seacrh";
import SeacrhTooltip from "./SeacrhTooltip";

const Search = () => {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const [value, setValue] = useState("");

  const isLoading = useSeacrh((st) => st.isLoading);
  const searchFilms = useSeacrh((st) => st.searchFilms);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isLoading) return;

    setValue(value);
    clearInterval(timer);

    if (value) {
      setTimer(
        setTimeout(() => {
          searchFilms(value);
        }, 700)
      );
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        name="title"
        placeholder="Search a movie..."
        value={value}
        onChange={handleChange}
      />
      <Image
        className={`icon ${isLoading ? "loading" : ""}`}
        src={!isLoading ? search : refresh}
        alt="search icon"
        width={14}
        height={14}
      />
      <SeacrhTooltip />
    </div>
  );
};

export default Search;

"use client";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

import search from "@/images/search.png";
import refresh from "@/images/refresh.png";
import useSeacrh from "@/store/seacrh";
import SeacrhTooltip from "./seacrhTooltip/SeacrhTooltip";
import useDebounce from "@/hooks/useDebounce";
import useOutside from "@/hooks/useOutside";

const AppSearch = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const { isShow, ref, setIsShow } = useOutside<HTMLDivElement>(false);

  const isLoading = useSeacrh((st) => st.isLoading);
  const searchFilms = useSeacrh((st) => st.searchFilms);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isLoading) return;
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length > 2) {
      searchFilms(value);
      setIsShow(true);
    }
  }, [debouncedValue]);

  return (
    <div className="search" ref={ref}>
      <input
        type="text"
        name="title"
        placeholder="Search a movie..."
        value={value}
        onChange={handleChange}
        onFocus={() => setIsShow(true)}
      />
      <Image
        className={`icon ${isLoading ? "loading" : ""}`}
        src={!isLoading ? search : refresh}
        alt="search icon"
        width={14}
        height={14}
      />
      {isShow ? <SeacrhTooltip /> : null}
    </div>
  );
};

export default AppSearch;

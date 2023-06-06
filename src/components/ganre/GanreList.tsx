"use client";

import React, { FC, useEffect, useState } from "react";
import Ganre from "./Ganre";
import useAllFilms from "@/store/allFilms";
import { useRouter } from "next/navigation";
import { getRandomFilm } from "@/utils/common";
import { shallow } from "zustand/shallow";

const GanreList: FC<{ items: string[] }> = ({ items }) => {
  const [isInit, setIsInit] = useState(false);

  const { getAllFilmsbyGenres, curentGanre, filmsByGanre, isloading } =
    useAllFilms(
      (state) => ({
        getAllFilmsbyGenres: state.getAllFilmsbyGenres,
        curentGanre: state.curentGanre,
        filmsByGanre: state.filmsByGanre,
        isloading: state.isloading,
      }),
      shallow
    );

  const router = useRouter();

  const handelClick = (genre: string) => {
    if (!isloading && curentGanre !== genre) getAllFilmsbyGenres(genre);
    if (filmsByGanre.length && !isloading && curentGanre === genre) {
      router.push(`/filmpage/${getRandomFilm(filmsByGanre)}`);
    }
  };

  useEffect(() => {
    if (isInit && !isloading) {
      router.push(`/filmpage/${getRandomFilm(filmsByGanre)}`);
    } else setIsInit(true);
  }, [filmsByGanre]);

  return (
    <>
      {items.map((item) => (
        <Ganre text={item} key={item} onClick={() => handelClick(item)} />
      ))}
    </>
  );
};

export default GanreList;

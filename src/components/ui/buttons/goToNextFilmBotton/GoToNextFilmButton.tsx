"use client";

import useAllFilms from "@/store/allFilms";
import OriginButton from "../originButton/OriginButton";

import { getRandomFilm } from "@/utils/common";
import { useRouter } from "next/navigation";

const GoToNextFilmButton = () => {
  const films = useAllFilms((state) => state.films);
  const isloading = useAllFilms((state) => state.isloading);
  const router = useRouter();

  const handleClick = () => {
    if (films?.length) router.push(`/filmpage/${getRandomFilm(films)}`);
  };

  return (
    <>
      <OriginButton
        onClick={() => handleClick()}
        text="Go next movie"
        disabled={isloading}
      />
    </>
  );
};

export default GoToNextFilmButton;

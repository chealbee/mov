"use client";
import styles from "@/styles/Index.module.css";
import OriginButton from "../originButton/OriginButton";
import updateIcon from "@/images/refresh.png";
import Image from "next/image";
import useAllFilms from "@/store/allFilms";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GetFilmsButton = () => {
  const getAllFilms = useAllFilms((state) => state.getAllFilms);
  const isloading = useAllFilms((state) => state.isloading);
  const randomFilm = useAllFilms((state) => state.randomFilm);

  const router = useRouter();

  const handleClick = () => {
    getAllFilms();
  };

  useEffect(() => {
    if (!isloading && randomFilm) {
      router.push(`/filmpage/${randomFilm}`);
    }
  }, [isloading]);

  return (
    <OriginButton
      text="Get a movie"
      cn={styles.update}
      disabled={isloading}
      leftIcon={
        <Image
          className="icon"
          src={updateIcon}
          alt=""
          width={14}
          height={14}
        />
      }
      onClick={handleClick}
    />
  );
};

export default GetFilmsButton;

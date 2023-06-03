"use client";
import React, { useEffect } from "react";
import styles from "@/styles/Cast.module.css";
import useSingleFilm from "@/store/singleFilsm";
import Preloader from "./ui/Preloader";
import CastsFilms from "./casts/CastsFilms";

const Casts = ({ id }: { id: string }) => {
  const getCasts = useSingleFilm((st) => st.getCasts);
  const casts = useSingleFilm((st) => st.casts);
  const isloading = useSingleFilm((st) => st.isloading);
  const isMoreInfo = useSingleFilm((st) => st.isMoreInfo);

  useEffect(() => {
    if (isMoreInfo) getCasts(id);
  }, [isMoreInfo]);

  return (
    <>
      {isMoreInfo ? (
        <div className={styles.cast}>
          <h2 className={styles.heading}>Cast</h2>
          {isloading ? <Preloader /> : <CastsFilms list={casts} />}
        </div>
      ) : null}
    </>
  );
};

export default Casts;

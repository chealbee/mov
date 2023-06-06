"use client";
import React, { useEffect } from "react";
import styles from "@/styles/Cast.module.css";
import useSingleFilm from "@/store/singleFilsm";
import Preloader from "../ui/Preloader/Preloader";
import CastsFilms from "./CastsFilms";

const Casts = ({ id, iShow }: { id: string; iShow: boolean }) => {
  const getCasts = useSingleFilm((st) => st.getCasts);
  const casts = useSingleFilm((st) => st.casts);
  const isloading = useSingleFilm((st) => st.isloading);

  useEffect(() => {
    if (iShow) getCasts(id);
  }, [iShow]);

  return (
    <>
      {iShow ? (
        <div className={styles.cast}>
          <h2 className={styles.heading}>Cast</h2>
          {isloading ? <Preloader /> : <CastsFilms list={casts} />}
        </div>
      ) : null}
    </>
  );
};

export default Casts;

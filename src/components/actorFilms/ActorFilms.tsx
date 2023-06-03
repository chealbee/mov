"use client";
import React, { useEffect, useState } from "react";

import styles from "@/styles/Film.module.css";
import Preloader from "../ui/Preloader";
import { getIdFromKey } from "@/utils/common";
import useIsACD from "@/app/actor/[id]/isSoweACD";
import useAllFilms from "@/store/allFilms";
import { IActorFilm } from "@/types/actorFilm";
import { useFetchFilms } from "@/hooks/useFetchFilms";
import ActorFilmsList from "./ActorFilmsList";

const ActorFilms = ({ id }: { id: string }) => {
  const [filteredFilms, setFilteredFilms] = useState<IActorFilm[]>([]);

  const { films, isLoading, FetchFilms } = useFetchFilms();

  const filmslimit = useIsACD((st) => st.filmslimit);
  const setRandomFilm = useAllFilms((st) => st.setRandomFilm);
  const setREdirected = useAllFilms((st) => st.setREdirected);

  const handelClik = (to: string) => {
    setRandomFilm(getIdFromKey(to));
    setREdirected();
  };

  useEffect(() => {
    FetchFilms(id);
  }, [id]);

  useEffect(() => {
    setFilteredFilms(films?.filter((_, i) => i < filmslimit));
  }, [filmslimit, isLoading]);

  return (
    <div className={styles.films}>
      <h2>Filmography</h2>

      <div className={styles.list}>
        {isLoading ? (
          <Preloader />
        ) : (
          <ActorFilmsList handelClik={handelClik} films={filteredFilms} />
        )}
      </div>
    </div>
  );
};

export default ActorFilms;

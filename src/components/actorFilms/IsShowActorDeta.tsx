"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Actor.module.css";
import ActorFilms from "@/components/actorFilms/ActorFilms";
import OriginButton from "@/components/ui/buttons/originButton/OriginButton";
import { useFetchAcorFilms } from "@/hooks/fetchingHooks/useFetchAcorFilms";
import { IActorFilm } from "@/types/actorFilm";

const IsShowActorDeta = ({ id }: { id: string }) => {
  const { films, isLoading, FetchFilms } = useFetchAcorFilms();
  const [isOpen, setIsOpen] = useState(false);
  const [filmslimit, setFilmslimit] = useState(5);
  const [filteredFilms, setFilteredFilms] = useState<IActorFilm[]>([]);

  const setfilmslimit = () => {
    setFilmslimit((prev) => prev + 5);
  };

  const showfilms = () => {
    setIsOpen((prev) => !prev);
    if (!films.length && !isLoading) FetchFilms(id);
  };

  useEffect(() => {
    setFilteredFilms(films?.filter((_, i) => i < filmslimit));
  }, [filmslimit, isLoading]);

  return (
    <>
      {isOpen && <ActorFilms isLoading={isLoading} films={filteredFilms} />}

      <div className={styles.butonWraper}>
        <div className={styles.more} onClick={showfilms}>
          {isOpen ? "Hide" : "Show"} filmography
        </div>

        {isOpen && (
          <OriginButton
            className={styles.more + " " + styles.morefilms}
            onClick={() => setfilmslimit()}
            text="Show more films"
          />
        )}
      </div>
    </>
  );
};

export default IsShowActorDeta;

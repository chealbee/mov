"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from "@/styles/Film.module.css";
import Link from "next/link";
import Preloader from "./Preloader";
import { getIdFromKey } from "@/utils/common";
import useIsACD from "@/app/actor/[id]/isSoweACD";
import useAllFilms from "@/store/allFilms";

interface IActorFilm {
  category: string;
  id: string;
  characters: string[];
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  status: string;
  title: string;
  titleType: string;
  year?: 2022;
}

const ActorFilms = ({ id }: { id: string }) => {
  const [films, setFilms] = useState<IActorFilm[]>([]);
  const [filteredFilms, setFilteredFilms] = useState<IActorFilm[]>([]);
  const [isLoading, setLoading] = useState(false);
  const filmslimit = useIsACD((st) => st.filmslimit);
  const setRandomFilm = useAllFilms((st) => st.setRandomFilm);
  const setREdirected = useAllFilms((st) => st.setREdirected);

  const handelClik = (to: string) => {
    setRandomFilm(getIdFromKey(to));
    setREdirected();
  };

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);

      const { data } = await axios.get<{ filmography: IActorFilm[] }>(
        "https://imdb8.p.rapidapi.com/actors/get-all-filmography",
        {
          params: {
            nconst: id,
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
          },
        }
      );

      const filtered = data?.filmography?.filter(({ status, titleType }) => {
        return status === "released" && titleType === "movie";
      });

      setFilms(filtered);
      setLoading(false);
    };

    fetchFilms();
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
          filteredFilms.map(({ characters, id, image, title, year }) => (
            <Link
              href={`/filmpage/${getIdFromKey(id)}`}
              key={id}
              onClick={() => handelClik(id)}
              className={styles.item}
            >
              {image?.url ? (
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${image?.url})` }}
                />
              ) : (
                <div className={styles.image} />
              )}

              <div className={styles.info}>
                <div className={styles.title}>{title}</div>

                {characters?.length && (
                  <div className={styles.character}>
                    <span>as </span> {characters[0]}
                  </div>
                )}

                <div className={styles.year}>{year}</div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ActorFilms;

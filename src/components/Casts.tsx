"use client";
import React, { useEffect } from "react";
import styles from "@/styles/Cast.module.css";
import Link from "next/link";
import { getIdFromKey } from "@/utils/common";
import useSingleFilm from "@/store/singleFilsm";
import Preloader from "./Preloader";

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
          {isloading ? (
            <Preloader />
          ) : (
            <div className={styles.list}>
              {casts.map(({ characters, id, image, name }) => (
                <Link href={`./actor/${getIdFromKey(id)}`} key={id}>
                  <span className={styles.item}>
                    <span
                      className={styles.image}
                      style={{ backgroundImage: `url(${image?.url})` }}
                    />

                    <span className={styles.info}>
                      <div className={styles.name}>{name}</div>

                      {characters?.length ? (
                        <span className={styles.character}>
                          {characters[0]}
                        </span>
                      ) : null}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Casts;

"use client";
import React, { useEffect } from "react";
import useIsACD from "./isSoweACD";
import styles from "@/styles/Actor.module.css";
import ActorFilms from "@/components/ActorFilms";

const IsShowActorDeta = ({ id }: { id: string }) => {
  const isOpen = useIsACD((st) => st.ISOpen);
  const setISOpen = useIsACD((st) => st.setISOpen);
  const setfilmslimit = useIsACD((st) => st.setfilmslimit);
  const clearfilmslimitsandisopen = useIsACD(
    (st) => st.clearfilmslimitsandisopen
  );

  useEffect(() => {
    return () => {
      clearfilmslimitsandisopen();
    };
  }, []);

  return (
    <>
      {isOpen && <ActorFilms id={id} />}
      <div className={styles.butonWraper}>
        <div className={styles.more} onClick={() => setISOpen()}>
          {isOpen ? "Hide" : "Show"} filmography
        </div>
        {isOpen && (
          <div
            className={styles.more + " " + styles.morefilms}
            onClick={() => setfilmslimit()}
          >
            Show more films
          </div>
        )}
      </div>
    </>
  );
};

export default IsShowActorDeta;

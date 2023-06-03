import { IActor } from "@/store/singleFilsm";
import styles from "@/styles/Cast.module.css";
import { getIdFromKey } from "@/utils/common";
import Link from "next/link";
import React from "react";

const CastsFilms = ({ list }: { list: IActor[] }) => {
  return (
    <div className={styles.list}>
      {list.map(({ characters, id, image, name }) => (
        <Link href={`./actor/${getIdFromKey(id)}`} key={id}>
          <span className={styles.item}>
            <span
              className={styles.image}
              style={{ backgroundImage: `url(${image?.url})` }}
            />

            <span className={styles.info}>
              <div className={styles.name}>{name}</div>

              {characters?.length ? (
                <span className={styles.character}>{characters[0]}</span>
              ) : null}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CastsFilms;

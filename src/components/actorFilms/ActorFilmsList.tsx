import Link from "next/link";
import styles from "@/styles/Film.module.css";
import { IActorFilm } from "@/types/actorFilm";
import { getIdFromKey } from "@/utils/common";

const ActorFilmsList = ({ films }: { films: IActorFilm[] }) => {
  return (
    <>
      {films.map(({ characters, id, image, title, year }) => (
        <Link
          href={`/filmpage/${getIdFromKey(id)}`}
          key={id}
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
      ))}
    </>
  );
};

export default ActorFilmsList;

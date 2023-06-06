import styles from "@/styles/Film.module.css";
import Preloader from "../ui/Preloader/Preloader";
import ActorFilmsList from "./ActorFilmsList";
import { IActorFilm } from "@/types/actorFilm";

const ActorFilms = ({
  isLoading,
  films,
}: {
  isLoading: boolean;
  films: IActorFilm[];
}) => {
  return (
    <div className={styles.films}>
      <h2>Filmography</h2>
      <div className={styles.list}>
        {isLoading ? <Preloader /> : <ActorFilmsList films={films} />}
      </div>
    </div>
  );
};

export default ActorFilms;

"use client";
import useAllFilms from "@/store/allFilms";

import styles from "@/styles/Movie.module.css";

const Genres = ({ genres }: { genres: string[] }) => {
  const setRandomFilm = useAllFilms((st) => st.setRandomFilm);
  const getAllFilmsbyGenres = useAllFilms((st) => st.getAllFilmsbyGenres);
  const curentGanre = useAllFilms((st) => st.curentGanre);
  const randomsFilms = useAllFilms((st) => st.randomsFilms);
  const isloading = useAllFilms((st) => st.isloading);
  const setREdirected = useAllFilms((st) => st.setREdirected);

  const getByGenreFilms = (genre: string) => {
    if (curentGanre !== genre) {
      getAllFilmsbyGenres(genre);
    }

    if (randomsFilms && !isloading) {
      setRandomFilm();
    }
    setREdirected();
  };

  return (
    <>
      {genres.map((genre) => (
        <div
          key={genre}
          className={styles.genre}
          onClick={() => getByGenreFilms(genre)}
        >
          {genre}
        </div>
      ))}
    </>
  );
};

export default Genres;

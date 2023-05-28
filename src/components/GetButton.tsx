"use client";

import update from "@/images/refresh.png";
import useAllFilms from "@/store/allFilms";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Search from "./AppSearch";

const GetButton = ({
  text = "Get a movie",
  cn = "",
  id,
}: {
  id: string;
  cn?: string;
  text?: string;
}) => {
  const {
    isloading,
    getAllFilms,
    randomFilm,
    isComplete,
    setRandomFilm,
    redirectinginHand,
    setREdirected,
  } = useAllFilms((state) => state);

  const router = useRouter();

  const HadleClik = () => {
    if (!isComplete) {
      getAllFilms();
    }
    if (isComplete) {
      setRandomFilm();
    }
  };

  useEffect(() => {
    if (isComplete && !isloading && !redirectinginHand) {
      setREdirected();
      router.push(`/filmpage/${randomFilm}`);
    }
  }, [randomFilm, isloading]);

  return (
    <div className="actions">
      <button
        className={`update ${cn} ${isloading ? "disabled" : ""}`}
        onClick={HadleClik}
        disabled={isloading}
      >
        {id == "/" ? (
          <Image className="icon" src={update} alt="" width={14} height={14} />
        ) : null}

        <span>{text}</span>
      </button>
      {id !== "/" ? <Search /> : null}
    </div>
  );
};

export default GetButton;

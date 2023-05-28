"use client";

import useSeacrh from "@/store/seacrh";
import Image from "next/image";
import "../styles/tooltip.css";
import { getIdFromKey } from "@/utils/common";
import useAllFilms from "@/store/allFilms";
import { useEffect } from "react";
import Link from "next/link";

const SeacrhTooltip = () => {
  const filmsbySeacrh = useSeacrh((st) => st.filmsbySeacrh);
  const isLoading = useSeacrh((st) => st.isLoading);
  const isShow = useSeacrh((st) => st.isShow);
  const setIsShowSearchTooltip = useSeacrh((st) => st.setIsShowSearchTooltip);
  const setRandomFilm = useAllFilms((st) => st.setRandomFilm);
  const setREdirected = useAllFilms((st) => st.setREdirected);

  const handelClik = (to: string) => {
    setIsShowSearchTooltip();
    setRandomFilm(getIdFromKey(to));
    setREdirected();
  };
  useEffect(() => {
    return () => {
      setIsShowSearchTooltip(true);
    };
  }, []);

  return (
    <>
      {filmsbySeacrh?.length && !isLoading && isShow ? (
        <div className="tooltipContainer">
          {filmsbySeacrh?.map((ell) => {
            return (
              <Link
                href={`/filmpage/${getIdFromKey(ell.id)}`}
                onClick={() => handelClik(ell.id)}
              >
                <div className="seacrhTooltip">
                  {ell?.image?.url ? (
                    <Image
                      width={50}
                      height={50}
                      src={ell.image.url}
                      alt={ell.title}
                    />
                  ) : null}

                  <div>
                    <div className="seacrhTooltip__name">{ell.title}</div>
                    <div className="seacrhTooltip__title">{ell.titleType}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default SeacrhTooltip;

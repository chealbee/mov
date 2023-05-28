"use client";
import useSingleFilm from "@/store/singleFilsm";
import React, { useEffect } from "react";

const ShowMoreButton = ({ styles }: { styles: any }) => {
  const setShoweMore = useSingleFilm((st) => st.setShoweMore);
  const isOpen = useSingleFilm((st) => st.isMoreInfo);
  useEffect(() => {
    return () => {
      setShoweMore(true);
    };
  }, []);

  return (
    <div className={styles} onClick={() => setShoweMore()}>
      {isOpen ? "Hide info" : "View more info"}
    </div>
  );
};

export default ShowMoreButton;

"use client";

import Casts from "@/components/casts/Casts";
import Reviews from "@/components/Reviews/Reviews";
import OriginButton from "@/components/ui/buttons/originButton/OriginButton";
import { useState } from "react";
import styles from "@/styles/Movie.module.css";

const MoreInfo = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const setShoweMore = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Casts id={id} iShow={isOpen} />
      <Reviews id={id} iShow={isOpen} />

      <OriginButton className={styles.more} onClick={() => setShoweMore()}>
        {isOpen ? "Hide info" : "View more info"}
      </OriginButton>
    </>
  );
};

export default MoreInfo;

"use client";

import useSeacrh from "@/store/seacrh";
import SeacrhTooltipList from "./SeacrhTooltipList";

const SeacrhTooltip = () => {
  const filmsbySeacrh = useSeacrh((st) => st.filmsbySeacrh);
  const isLoading = useSeacrh((st) => st.isLoading);

  return (
    <>
      {filmsbySeacrh?.length && !isLoading ? (
        <SeacrhTooltipList list={filmsbySeacrh} />
      ) : null}
    </>
  );
};

export default SeacrhTooltip;

import { IFilm } from "@/types/seacrh";
import { getIdFromKey } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import "@/styles/tooltip.css";

const SeacrhTooltipList = ({ list }: { list: IFilm[] }) => {
  return (
    <div className="tooltipContainer">
      {list?.map((ell) => {
        return (
          <Link href={`/filmpage/${getIdFromKey(ell.id)}`}>
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
  );
};

export default SeacrhTooltipList;

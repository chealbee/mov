import styles from "@/styles/Movie.module.css";
import Image from "next/image";
import movieImg from "@/images/default-movie.jpg";
import axios from "axios";
import { convertDuration } from "@/utils/common";
import { IFilmInfo, IFilmProps } from "./infaces";
import GetButton from "@/components/GetButton";
import ShowMoreButton from "@/components/ShowMoreButton";
import Genres from "./genres";
import MoreInfo from "./MoreInfo";
import { getOvervives } from "@/utils/constants";

const getFilmDeteils = async (id: string) => {
  const res = await axios.get<IFilmInfo>(getOvervives, {
    params: { tconst: id },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  });

  return res.data;
};

const page = async ({ params }: IFilmProps) => {
  const data = await getFilmDeteils(params.id);
  const { genres, title, ratings, plotSummary, plotOutline, id } = data;

  return (
    <>
      <GetButton text="Get next movie" id={params.id} />
      <div className={styles.movie}>
        <div className={styles.title}>
          <h1 className={styles.h1}>{title?.title}</h1>
          {ratings && (
            <div className={styles.rating}>
              <span>IMDb</span> {ratings.rating}
            </div>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              src={title?.image.url ? title?.image.url : movieImg}
              alt={title.title}
              width={title.image.width ? title.image.width : "300"}
              height={title.image.height ? title.image.height : "300"}
              quality="0.5"
            />
          </div>

          <div className={styles.info}>
            <div className={styles.about}>
              {title.year && <div className={styles.year}>{title.year}</div>}
              {title.runningTimeInMinutes && (
                <div className={styles.duration}>
                  {convertDuration(title.runningTimeInMinutes)}
                </div>
              )}
            </div>

            <div className={styles.plot}>
              {plotSummary ? plotSummary?.text : null}
              {plotOutline ? plotOutline?.text : null}
            </div>

            <div className={styles.genres}>
              <Genres genres={genres} />
            </div>
          </div>
        </div>
        <MoreInfo id={`${params.id}`} />
        <ShowMoreButton styles={styles.more} />
      </div>
    </>
  );
};

export default page;

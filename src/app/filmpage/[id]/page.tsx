import styles from "@/styles/Movie.module.css";
import Image from "next/image";
import movieImg from "@/images/default-movie.jpg";
import { convertDuration } from "@/utils/common";
import GanreList from "@/components/ganre/GanreList";
import MoreInfo from "./MoreInfo";
import { fetchOvervives } from "@/services/getOvetvives";
import GoToNextFilmButton from "@/components/ui/buttons/goToNextFilmBotton/GoToNextFilmButton";
import AppSearch from "@/components/AppSearch";

const getFilmDeteils = async (id: string) => {
  const data = await fetchOvervives.getOvevives(id);
  return data;
};

type IFilmProps = {
  params: {
    id: string;
  };
};

const page = async ({ params }: IFilmProps) => {
  const data = await getFilmDeteils(params.id);
  const { genres, title, ratings, plotSummary, plotOutline, id } = data;

  return (
    <>
      <div className="actions">
        <GoToNextFilmButton />
        <AppSearch />
      </div>
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
              alt={title?.title}
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
              <GanreList items={genres} />
            </div>
          </div>
        </div>
        <MoreInfo id={`${params.id}`} />
      </div>
    </>
  );
};

export default page;

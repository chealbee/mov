import styles from "@/styles/Actor.module.css";
import axios from "axios";
import { IFilmProps } from "@/intefaces/singleFIlm";
import IsShowActorDeta from "./IsShowActorDeta";
import BackButtobn from "@/components/BackButtobn";
import { APIHOST, APIKEY } from "@/utils/constants";
import { ICtor } from "./actoreInterfaces";

const getFilmDeteils = async (id: string) => {
  const res = await axios.get<ICtor>(
    "https://imdb8.p.rapidapi.com/actors/get-bio",
    {
      params: {
        nconst: id,
      },
      headers: {
        "X-RapidAPI-Key": APIKEY,
        "X-RapidAPI-Host": APIHOST,
      },
    }
  );

  return res.data;
};

const ActorItem = async ({ params }: IFilmProps) => {
  const data = await getFilmDeteils(params.id);
  const { birthDate, birthPlace, image, name, realName, miniBios } = data;

  return (
    <div className={styles.wrap}>
      <BackButtobn text="Back" />
      <div className={styles.actor}>
        <div className={styles.names}>
          <div className={styles.name}>{name}</div>
          <div className={styles.realName}>{realName}</div>
        </div>
        <div className={styles.info}>
          {image?.url ? (
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image.url})` }}
            />
          ) : (
            <div className={styles.image} />
          )}

          <div className={styles.content}>
            <div className={styles.dates}>
              {birthDate && (
                <div className={styles.birthday}>
                  {new Date(birthDate).getFullYear()}
                </div>
              )}
              <div className={styles.place}>{birthPlace}</div>
            </div>

            {miniBios?.length && (
              <div className={styles.bio}>{miniBios[0].text}</div>
            )}
          </div>
        </div>
        <IsShowActorDeta id={params.id} />
      </div>
    </div>
  );
};

export default ActorItem;

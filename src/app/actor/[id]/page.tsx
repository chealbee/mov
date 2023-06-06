import styles from "@/styles/Actor.module.css";
import { IFilmProps } from "@/intefaces/singleFIlm";
import IsShowActorDeta from "../../../components/actorFilms/IsShowActorDeta";
import BackButton from "@/components/ui/buttons/backButton/BackButton";
import { ActorBio } from "@/services/actorBio";

const getActorBio = async (id: string) => {
  const data = ActorBio.getActorBio(id);
  return data;
};

const ActorItem = async ({ params }: IFilmProps) => {
  const data = await getActorBio(params.id);
  const { birthDate, birthPlace, image, name, realName, miniBios } = data;

  return (
    <div className={styles.wrap}>
      <BackButton text="Back" />

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

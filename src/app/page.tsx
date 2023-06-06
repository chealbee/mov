import GetFilmsButton from "@/components/ui/buttons/getFilmsButton/GetFilmsButton";
import styles from "@/styles/Index.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.image} />
        <h1 className={styles.title}>Welcome to Movie App</h1>
        <div className={styles.subtitle}>
          The best movie app of the Galaxy to help you find a movie tonight
        </div>
        <GetFilmsButton />
      </div>
    </>
  );
}

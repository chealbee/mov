import styles from "@/styles/Movie.module.css";
import { FC, HTMLAttributes } from "react";

interface IGanreProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Ganre: FC<IGanreProps> = ({ text, ...remainProps }) => {
  return (
    <div className={styles.genre} {...remainProps}>
      {text}
    </div>
  );
};

export default Ganre;

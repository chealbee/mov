"use import";
import styles from "@/styles/Reviews.module.css";
import { useState } from "react";

const Text = ({ text }: { text: string }) => {
  const isFull = text.length < 300;
  const fullText = !isFull ? `${text.slice(0, 300)}...` : text;
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(!isOpen);

  return (
    <>
      <div className={styles.text}>
        {fullText}

        {!isFull && (
          <div className={styles.more} onClick={handleClick}>
            Read more...
          </div>
        )}
      </div>

      {isOpen && (
        <>
          <div className={styles.modal}>
            <span onClick={handleClick}>x</span>
            <p>{text}</p>
          </div>

          <div onClick={handleClick} className={styles.overlay} />
        </>
      )}
    </>
  );
};

export default Text;

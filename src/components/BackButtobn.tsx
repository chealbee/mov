"use client";
import { useRouter } from "next/navigation";

const BackButtobn = ({
  text = "go back",
  cn = "",
}: {
  cn?: string;
  text?: string;
}) => {
  const router = useRouter();
  return (
    <div className="actions">
      <button className={`update ${cn}`} onClick={() => router.back()}>
        <span>{text}</span>
      </button>
    </div>
  );
};

export default BackButtobn;

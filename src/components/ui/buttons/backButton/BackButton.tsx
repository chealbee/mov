"use client";
import { useRouter } from "next/navigation";
import OriginButton from "../originButton/OriginButton";
import { FC } from "react";
interface IBackButtobnProps {
  cn?: string;
  text?: string;
}
const BackButton: FC<IBackButtobnProps> = ({ text = "Go back", cn }) => {
  const router = useRouter();
  return (
    <div className="actions">
      <OriginButton
        className={`update ${cn}`}
        onClick={() => router.back()}
        text={text}
      />
    </div>
  );
};

export default BackButton;

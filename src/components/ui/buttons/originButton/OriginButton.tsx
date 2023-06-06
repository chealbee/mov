import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IMyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  cn?: string;
  leftIcon?: ReactNode;
}

const OriginButton: FC<IMyButton> = ({
  text,
  cn,
  leftIcon,
  disabled,
  children,
  ...remainProps
}) => {
  return (
    <button
      className={`update ${cn} ${disabled ? "disabled" : ""}`}
      {...remainProps}
    >
      {children}
      {leftIcon}
      <span>{text}</span>
    </button>
  );
};

export default OriginButton;

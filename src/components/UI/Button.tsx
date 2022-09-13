import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  variants?:
    | "primary"
    | "secondary"
  children: any;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  variants = "primary",
  children,
  className = "",
}) => {
  const classes = classNames({
    "outline-none inline-block cursor-pointer transition-all duration-300 disabled:cursor-not-allowed":
      true,

    "rounded bg-greenButton-primary cursor-pointer text-white hover:bg-greenButton-secondary transition-all duration-300 ease-linear w-full h-[48px]":
      variants === "primary",
  });
  return (
    <button
      aria-label="Button"
      className={`${classes} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

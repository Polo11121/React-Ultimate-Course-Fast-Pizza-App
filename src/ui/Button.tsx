import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ className, to, onClick, ...props }: ButtonProps) => {
  const navigate = useNavigate();

  const clickHandler = to ? () => navigate(to) : onClick;

  return (
    <button
      {...props}
      onClick={clickHandler}
      className={twMerge(
        "inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed md:px-6 md:py-4",
        className,
      )}
    />
  );
};

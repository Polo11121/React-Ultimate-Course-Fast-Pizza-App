import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Input = ({
  type,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  if (type === "checkbox") {
    return (
      <input
        {...props}
        type={type}
        className={twMerge(
          "h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1",
          className,
        )}
      />
    );
  }

  return (
    <input
      {...props}
      className={twMerge(
        "rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3",
        className,
      )}
    />
  );
};

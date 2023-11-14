import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type LinkButtonProps = {
  className?: string;
  to: string;
  children: ReactNode;
};

export const LinkButton = ({ className, to, children }: LinkButtonProps) => {
  const navigate = useNavigate();

  const goBackHandler = () => navigate(-1);

  if (to === "-1") {
    return (
      <button
        onClick={goBackHandler}
        className={twMerge(
          "text-sm text-blue-500 hover:text-blue-600 hover:underline",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={to}
      className={twMerge(
        "text-sm text-blue-500 hover:text-blue-600 hover:underline",
        className,
      )}
    >
      {children}
    </Link>
  );
};

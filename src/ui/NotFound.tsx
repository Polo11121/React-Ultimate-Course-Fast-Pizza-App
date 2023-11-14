import { useRouteError } from "react-router-dom";
import { LinkButton } from "@/ui";

export const NotFound = () => {
  const error = useRouteError() as { data: string; message: string };

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

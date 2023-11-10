import { useNavigate, useRouteError } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const error = useRouteError() as { data: string; message: string };

  const goBackHandler = () => navigate(-1);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={goBackHandler}>&larr; Go back</button>
    </div>
  );
};

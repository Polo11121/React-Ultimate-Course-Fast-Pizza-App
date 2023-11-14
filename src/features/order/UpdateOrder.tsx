import { Button } from "@/ui";
import { useFetcher } from "react-router-dom";

export const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="submit">Make priority</Button>;
    </fetcher.Form>
  );
};

import { useLoaderData } from "react-router-dom";
import { MenuItem } from "@/features/menu";
import { Pizza } from "@/utils/types";

export const Menu = () => {
  const menu = useLoaderData() as Pizza[];

  return (
    <ul>
      {menu.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
};

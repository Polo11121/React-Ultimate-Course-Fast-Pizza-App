import { useLoaderData } from "react-router-dom";
import { MenuItem } from "@/features/menu";
import { Pizza } from "@/utils/types";

export const Menu = () => {
  const menu = useLoaderData() as Pizza[];

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
};

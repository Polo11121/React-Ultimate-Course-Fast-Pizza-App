import { Button } from "@/ui";
import { formatCurrency } from "@/utils/helpers";
import { twMerge } from "tailwind-merge";

type MenuItemProps = {
  pizza: {
    id: number;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
  };
};

export const MenuItem = ({ pizza }: MenuItemProps) => {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        className={twMerge("w-24", soldOut && "opacity-70 grayscale")}
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-1 flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-end justify-between">
          <p className="text-sm font-medium uppercase text-stone-500">
            {!soldOut ? formatCurrency(unitPrice) : "Sold out"}
          </p>
          <Button className="px-4 text-xs md:px-5 md:py-2.5">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

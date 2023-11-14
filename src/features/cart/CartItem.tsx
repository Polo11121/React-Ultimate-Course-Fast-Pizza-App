import { Button } from "@/ui";
import { formatCurrency } from "@/utils/helpers";

type CartItemProps = {
  item: {
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  };
};

export const CartItem = ({ item }: CartItemProps) => {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button className="px-4 text-xs md:px-5 md:py-2.5">Remove</Button>
      </div>
    </li>
  );
};

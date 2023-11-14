import { useAppSelector } from "@/store";
import { DeleteItem, UpdateItemQuantity } from "@/ui";
import { formatCurrency } from "@/utils/helpers";
import { getPizzaQuantity } from "@/features/cart/cartSlice";

type CartItemProps = {
  item: {
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  };
};

export const CartItem = ({ item }: CartItemProps) => {
  const { name, quantity, totalPrice, pizzaId } = item;
  const currentQuantity = useAppSelector(getPizzaQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

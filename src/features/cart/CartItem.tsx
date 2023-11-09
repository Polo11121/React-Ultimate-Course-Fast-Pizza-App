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
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};
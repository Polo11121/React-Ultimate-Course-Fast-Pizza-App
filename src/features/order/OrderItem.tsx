import { formatCurrency } from "@/utils/helpers";

type OrderItemProps = {
  item: {
    quantity: number;
    name: string;
    totalPrice: number;
  };
  isLoadingIngredients: boolean;
  ingredients: string[];
};

export const OrderItem = ({
  item,
}: // isLoadingIngredients,
// ingredients,
OrderItemProps) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;

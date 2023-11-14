import { useAppDispatch } from "@/store";
import { Button } from "@/ui";
import { removeFromCart } from "@/features/cart/cartSlice";

type DeleteItemProps = {
  pizzaId: number;
};

export const DeleteItem = ({ pizzaId }: DeleteItemProps) => {
  const dispatch = useAppDispatch();

  const removeFromCartHandler = () => dispatch(removeFromCart({ pizzaId }));

  return (
    <Button
      onClick={removeFromCartHandler}
      className="px-4 text-xs md:px-5 md:py-2.5"
    >
      Remove
    </Button>
  );
};

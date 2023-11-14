import { decreaseQuantity, increaseQuantity } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/store";
import { Button } from "@/ui";

type UpdateItemQuantityProps = {
  pizzaId: number;
  currentQuantity: number;
};

export const UpdateItemQuantity = ({
  pizzaId,
  currentQuantity,
}: UpdateItemQuantityProps) => {
  const dispatch = useAppDispatch();

  const decreaseQuantityHandler = () => dispatch(decreaseQuantity({ pizzaId }));
  const increaseQuantityHandler = () => dispatch(increaseQuantity({ pizzaId }));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        className="rounded-full px-2.5 py-1 text-sm md:px-3.5 md:py-2"
        onClick={decreaseQuantityHandler}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        className="rounded-full px-2.5 py-1 text-sm md:px-3.5 md:py-2"
        onClick={increaseQuantityHandler}
      >
        +
      </Button>
    </div>
  );
};

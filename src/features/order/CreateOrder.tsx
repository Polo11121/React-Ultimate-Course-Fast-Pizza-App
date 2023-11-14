import { useState, MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { Button, Input } from "@/ui";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { getCart, getTotalCartPrice } from "@/features/cart/cartSlice";
import { EmptyCart } from "@/features/cart";
import { formatCurrency } from "@/utils/helpers";
import { fetchAddress } from "@/features/user/userSlice";

export const CreateOrder = () => {
  const [withPriority, setWithPriority] = useState(false);
  const { username, address, position, status, error } = useAppSelector(
    (state) => state.user,
  );
  const { state } = useNavigation();
  const formErrors = useActionData() as Record<string, string>;
  const cart = useAppSelector(getCart);
  const totalCartPrice = useAppSelector(getTotalCartPrice);
  const dispatch = useAppDispatch();

  const priorityPrice = withPriority ? totalCartPrice * 0.25 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const isSubmitting = state === "submitting";
  const isLoading = status === "loading";

  const changePriorityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithPriority(e.target.checked);
  };

  const getMyPositionHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(fetchAddress());
  };

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <Input
            defaultValue={username}
            className="flex-1"
            type="text"
            name="customer"
            required
          />
        </div>
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="flex-1">
            <Input className="w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="text-sm text-red-500">{formErrors.phone}</p>
            )}
          </div>
        </div>
        <div className=" mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="relative flex-1">
            <Input
              className="w-full"
              type="text"
              name="address"
              defaultValue={address}
              required
              disabled={isLoading}
            />
            {!position && (
              <Button
                className="absolute right-0 px-4 py-3 text-xs md:px-5 md:py-4"
                disabled={isLoading}
                onClick={getMyPositionHandler}
              >
                Get my position
              </Button>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        </div>
        <div className="mb-12 flex items-center gap-5">
          <Input
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={changePriorityHandler}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position ? `${position?.latitude}, ${position?.longitude}` : ""
            }
          />

          <Button disabled={isSubmitting || isLoading}>
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
};

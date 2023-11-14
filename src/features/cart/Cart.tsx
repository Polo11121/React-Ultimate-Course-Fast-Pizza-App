import { Button, LinkButton } from "@/ui";
import { CartItem, EmptyCart } from "@/features/cart";
import { useAppDispatch, useAppSelector } from "@/store";
import { clearCart, getCart } from "@/features/cart/cartSlice";

export const Cart = () => {
  const username = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(getCart);

  const clearCartHandler = () => dispatch(clearCart());

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-3">
      <LinkButton
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        to="/menu"
      >
        &larr; Back to menu
      </LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new">Order pizzas</Button>
        <Button
          onClick={clearCartHandler}
          className="border-2 border-stone-200 bg-transparent py-2.5 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:ring-stone-200 md:py-3.5"
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
};

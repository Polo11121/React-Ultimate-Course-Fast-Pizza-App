import { Button, LinkButton } from "@/ui";
import { CartItem } from "@/features/cart";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export const Cart = () => {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        to="/menu"
      >
        &larr; Back to menu
      </LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new">Order pizzas</Button>
        <Button className="border-2 border-stone-200 bg-transparent py-2.5 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:ring-stone-200 md:py-3.5">
          Clear cart
        </Button>
      </div>
    </div>
  );
};

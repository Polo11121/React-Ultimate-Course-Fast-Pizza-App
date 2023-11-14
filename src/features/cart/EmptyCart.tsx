import { LinkButton } from "@/ui";

export const EmptyCart = () => (
  <div className="px-4 py-3">
    <LinkButton to="/menu">&larr; Back to menu</LinkButton>
    <p className="mt-7 font-semibold">
      Your cart is empty. Start adding some pizzas :)
    </p>
  </div>
);

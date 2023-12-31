import { useAppSelector } from "@/store";
import { Link } from "react-router-dom";
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "@/features/cart/cartSlice";

export const CartOverview = () => {
  const totalPrice = useAppSelector(getTotalCartPrice);
  const totalQuantity = useAppSelector(getTotalCartQuantity);

  return totalQuantity ? (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  ) : null;
};

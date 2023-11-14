import { useEffect } from "react";
import { calcMinutesLeft, formatCurrency, formatDate } from "@/utils/helpers";
import { Order as OrderType, Pizza } from "@/utils/types";
import { useFetcher, useLoaderData } from "react-router-dom";
import { OrderItem, UpdateOrder } from "@/features/order";

export const Order = () => {
  const order = useLoaderData() as OrderType;
  const {
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    id,
    status,
    cart,
  } = order;
  const fetcher = useFetcher<Pizza[]>();
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>
        <div className="space-x-2">
          {priority && (
            <span className="text-semibold rounded-full bg-red-500 px-3 py-1 text-sm uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="text-semibold rounded-full bg-green-500 px-3 py-1 text-sm uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="font-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher.data?.find((pizza) => pizza.id === item.pizzaId)
                ?.ingredients || []
            }
            isLoadingIngredients={fetcher.state === "loading" || !fetcher.data}
          />
        ))}
      </ul>
      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
};

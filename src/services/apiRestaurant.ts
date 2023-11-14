import { clearCart } from "@/features/cart/cartSlice";
import { store } from "@/store";
import { isValidPhone } from "@/utils/helpers";
import { Order, Pizza, NewOrder } from "@/utils/types";
import { Params, redirect } from "react-router-dom";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export const getMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) {
    throw Error("Failed getting menu");
  }

  const { data }: { data: Pizza[] } = await res.json();

  return data;
};

export const getOrder = async (id: string) => {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) {
    throw Error(`Couldn't find order #${id}`);
  }

  const { data }: { data: Order } = await res.json();

  return data;
};

export const createOrder = async (newOrder: NewOrder) => {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw Error();
    }

    const { data } = await res.json();

    return data;
  } catch {
    throw Error("Failed creating your order");
  }
};

export const updateOrder = async (id: string, updateObj: Order) => {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw Error();
    }
  } catch (err) {
    throw Error("Failed updating your order");
  }
};

export const newOrderAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as Record<string, string>;

  const orderData = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  } as NewOrder;

  const errors: Record<string, string> = {};

  if (!isValidPhone(orderData.phone)) {
    errors["phone"] = "Invalid phone number";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const newOrder = await createOrder(orderData);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
};

export const updateOrderAction = async ({ params }: { params: Params }) => {
  const data = { priority: true } as Order;

  await updateOrder(params.orderId as string, data);

  return null;
};

export const menuLoader = async () => {
  const menu = await getMenu();

  return menu;
};

export const orderLoader = async ({
  params: { orderId },
}: {
  params: { orderId?: string };
}) => {
  if (orderId) {
    const order = await getOrder(orderId);

    return order;
  }
};

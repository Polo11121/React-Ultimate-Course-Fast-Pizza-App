import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout, Home, NotFound } from "@/ui";
import { Menu } from "@/features/menu";
import { Cart } from "@/features/cart";
import { CreateOrder, Order } from "@/features/order";
import { menuLoader, orderLoader, newOrderAction } from "@/services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<NotFound />}>
      <Route path="" element={<Home />} />
      <Route
        path="menu"
        element={<Menu />}
        errorElement={<NotFound />}
        loader={menuLoader}
      />
      <Route path="cart" element={<Cart />} />
      <Route
        path="order/new"
        element={<CreateOrder />}
        action={newOrderAction}
      />
      <Route path="order/:orderId" element={<Order />} loader={orderLoader} />
    </Route>
  )
);

export const App = () => <RouterProvider router={router} />;

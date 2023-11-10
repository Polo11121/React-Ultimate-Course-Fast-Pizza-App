import { Outlet, useNavigation } from "react-router-dom";
import { CartOverview } from "@/features/cart";
import { Header, Loader } from "@/ui";

export const AppLayout = () => {
  const { state } = useNavigation();

  return state === "loading" ? (
    <Loader />
  ) : (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

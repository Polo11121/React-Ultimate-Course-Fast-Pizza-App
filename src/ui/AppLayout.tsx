import { Outlet, useNavigation } from "react-router-dom";
import { CartOverview } from "@/features/cart";
import { Header, Loader } from "@/ui";

export const AppLayout = () => {
  const { state } = useNavigation();

  return state === "loading" ? (
    <Loader />
  ) : (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-y-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

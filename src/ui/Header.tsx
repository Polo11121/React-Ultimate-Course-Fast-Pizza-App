import { Link } from "react-router-dom";
import { SearchOrder } from "@/features/order";
import { Username } from "@/features/user";

export const Header = () => (
  <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
    <Link to="/" className="tracking-widest">
      Fast React Pizza
    </Link>
    <SearchOrder />
    <Username />
  </header>
);

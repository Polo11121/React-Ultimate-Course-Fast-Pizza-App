import { Link } from "react-router-dom";
import { SearchOrder } from "@/features/order";

export const Header = () => (
  <header>
    <Link to="/">Fast React Pizza</Link>
    <SearchOrder />
  </header>
);

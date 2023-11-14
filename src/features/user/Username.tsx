import { useAppSelector } from "@/store";

export const Username = () => {
  const username = useAppSelector((state) => state.user.username);

  return username ? (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  ) : null;
};

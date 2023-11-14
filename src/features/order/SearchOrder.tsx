import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const SearchOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchTerm) return;

    navigate(`/order/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search order #"
        value={searchTerm}
        onChange={changeHandler}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};

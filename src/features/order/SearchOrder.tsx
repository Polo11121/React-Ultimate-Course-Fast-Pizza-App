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
      />
    </form>
  );
};

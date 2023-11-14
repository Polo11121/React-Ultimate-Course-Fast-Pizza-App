import { useState, FormEvent } from "react";
import { Button, Input } from "@/ui";

export const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <Input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-8 w-72"
      />
      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
};

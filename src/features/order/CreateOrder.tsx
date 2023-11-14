import { Button, Input } from "@/ui";
import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export const CreateOrder = () => {
  const [withPriority, setWithPriority] = useState(false);
  const { state } = useNavigation();
  const formErrors = useActionData() as Record<string, string>;
  const cart = fakeCart;
  const isSubmitting = state === "submitting";

  const changePriorityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithPriority(e.target.checked);
  };

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <Input className="flex-1" type="text" name="customer" required />
        </div>
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="flex-1">
            <Input className="w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="text-sm text-red-500">{formErrors.phone}</p>
            )}
          </div>
        </div>
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="flex-1">
            <Input className="w-full" type="text" name="address" required />
          </div>
        </div>
        <div className="mb-12 flex items-center gap-5">
          <Input
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={changePriorityHandler}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

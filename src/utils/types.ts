export type Cart = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type NewOrder = {
  cart: Cart[];
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
};

export type Order = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: Cart[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
};

export type Pizza = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

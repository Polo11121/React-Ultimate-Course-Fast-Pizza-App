import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

type Pizza = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};
type InitialState = {
  pizzas: Pizza[];
};

const initialState: InitialState = {
  pizzas: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const { pizzaId, name, unitPrice } = action.payload;
      const existingCartItem = state.pizzas.find(
        (item) => item.pizzaId === pizzaId,
      );

      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.totalPrice += unitPrice;
      } else {
        state.pizzas.push({
          pizzaId,
          name,
          quantity: 1,
          unitPrice,
          totalPrice: unitPrice,
        });
      }
    },
    removeFromCart: (state, action) => {
      const { pizzaId } = action.payload;
      const existingCartItem = state.pizzas.find(
        (item) => item.pizzaId === pizzaId,
      );

      if (existingCartItem) {
        state.pizzas = state.pizzas.filter((item) => item.pizzaId !== pizzaId);
      }
    },
    increaseQuantity: (state, action) => {
      const { pizzaId } = action.payload;
      const existingCartItem = state.pizzas.find(
        (item) => item.pizzaId === pizzaId,
      );

      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.totalPrice += existingCartItem.unitPrice;
      }
    },
    decreaseQuantity: (state, action) => {
      const { pizzaId } = action.payload;
      const existingCartItem = state.pizzas.find(
        (item) => item.pizzaId === pizzaId,
      );

      if (existingCartItem) {
        existingCartItem.quantity--;
        existingCartItem.totalPrice -= existingCartItem.unitPrice;

        if (existingCartItem.quantity === 0) {
          state.pizzas = state.pizzas.filter(
            (item) => item.pizzaId !== pizzaId,
          );
        }
      }
    },
    clearCart: (state) => {
      state.pizzas = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.pizzas;

export const getTotalCartPrice = (state: RootState) =>
  state.cart.pizzas.reduce((total, pizza) => total + pizza.totalPrice, 0);

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.pizzas.reduce((total, pizza) => total + pizza.quantity, 0);

export const getPizzaQuantity = (pizzaId: number) => (state: RootState) =>
  state.cart.pizzas.find((pizza) => pizza.pizzaId === pizzaId)?.quantity ?? 0;

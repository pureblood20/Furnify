import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getLocalStorage =
  JSON.parse(localStorage.getItem("cart")) || defaultState;

const cartSlice = createSlice({
  name: "cart",
  initialState: getLocalStorage,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item successfully added to cart");
    },
    clearItem: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { product } = action.payload;
      const removeItem = state.cartItems.find(
        (i) => i.cartID === product.cartID
      );
      if (removeItem) {
        state.cartItems.pop(removeItem);
      }
      if (!state.numItemsInCart <= 0) {
        state.numItemsInCart -= product.amount;
      } else {
        console.log("Error in num items is in minus");
      }

      state.cartTotal -= product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed");
    },
    editItem: (state, action) => {
      const { product } = action.payload;
      console.log(product);
      const editItem = state.cartItems.find((i) => i.cartID === product.cartID);
      state.numItemsInCart += product.amount - editItem.amount;
      state.cartTotal += editItem.price * (product.amount - editItem.amount);
      editItem.amount = product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart Updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, clearItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;

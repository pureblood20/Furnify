import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/cartSlice";

export default configureStore({
  reducer: {
    cartState: cartReducer,
  },
});

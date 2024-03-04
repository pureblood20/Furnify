import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/cartSlice";
import userReducer from "./Features/User/userSlice";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});

export default store;

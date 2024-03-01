import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  forest: "forest",
  valentine: "valentine",
};

const getThemeFromLocal = () => {
  const theme = localStorage.getItem("theme") || "valentine";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "shiv" },
  theme: getThemeFromLocal(),
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    toggleTheme: (state) => {
      const { forest, valentine } = themes;
      state.theme = state.theme === valentine ? forest : valentine;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

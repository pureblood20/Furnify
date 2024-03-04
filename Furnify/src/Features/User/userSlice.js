import { createSlice } from "@reduxjs/toolkit";

const themes = {
  forest: "forest",
  valentine: "valentine",
};

const getUserFromLocal = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const getThemeFromLocal = () => {
  const theme = localStorage.getItem("theme") || "valentine";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getUserFromLocal(),
  theme: getThemeFromLocal(),
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      console.log(user);
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
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

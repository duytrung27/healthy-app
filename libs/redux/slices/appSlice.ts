import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  loggedIn: boolean;
  tokens: {
    accessToken: string | null;
    refreshToken: string | null;
  };
}
const initialState: AppState = {
  loggedIn: !!Cookies.get("API_TOKEN") && !!Cookies.get("REFRESH_TOKEN"),
  tokens: {
    accessToken: Cookies.get("API_TOKEN") ?? null,
    refreshToken: Cookies.get("REFRESH_TOKEN") ?? null,
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    setAPITokenCookie: (state, action) => {
      Cookies.set("API_TOKEN", action.payload.accessToken, {
        expires: action.payload.expiresInSecond,
      });
      Cookies.set("REFRESH_TOKEN", action.payload.refreshToken);
      Cookies.set("ROLE", JSON.stringify(action.payload.role));
      return {
        ...state,
        role: action.payload.role,
        ...{
          tokens: {
            ...state.tokens,
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken,
          },
        },
      };
    },
    logout: () => {
      Cookies.remove("API_TOKEN");
      Cookies.remove("REFRESH_TOKEN");
      Cookies.remove("ROLE");
      return {
        ...initialState,
        loggedIn: false,
        tokens: {
          accessToken: null,
          refreshToken: null,
          idToken: null,
        },
      };
    },
  },
});
export const { login, logout, setAPITokenCookie } = appSlice.actions;

export default appSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      app: appReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;

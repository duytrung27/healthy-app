import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboardSlice";
import ownRecordReducer from "./slices/ownRecordSlice";
import columnListReducer from "./slices/columnListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      dashboard: dashboardReducer,
      ownRecord: ownRecordReducer,
      columnList: columnListReducer,
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

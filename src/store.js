import { configureStore } from "@reduxjs/toolkit";
import medicalReducer from "./features/medicalSlice";

export const store = configureStore({
  reducer: {
    heartRatePrediction: medicalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

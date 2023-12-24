import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// function to configure store .. check redux documentation
export const store = configureStore({
  //reducres have access to the current state
  reducer: {
    authReducer,
  },
});

//
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

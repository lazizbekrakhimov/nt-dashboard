import { configureStore } from "@reduxjs/toolkit"
import debtReducer from "./debtSlice"

export const store = configureStore({
  reducer: {
    debt: debtReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

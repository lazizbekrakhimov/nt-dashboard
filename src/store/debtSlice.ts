import { DebtState, StudentType } from "@/@types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: DebtState = {
  debtStudents: [],
}

const debtSlice = createSlice({
  name: "debt",
  initialState,
  reducers: {
    addToDebt: (state, action: PayloadAction<StudentType>) => {
      const exists = state.debtStudents.find((item) => item.id === action.payload.id)
      if (!exists) {
        state.debtStudents.push(action.payload)
      }
    },
    removeToDebt: (state, action: PayloadAction<number>) => {
      state.debtStudents = state.debtStudents.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToDebt, removeToDebt } = debtSlice.actions
export default debtSlice.reducer

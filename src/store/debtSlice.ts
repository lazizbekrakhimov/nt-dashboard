import { StudentType } from "@/@types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DebtState {
  debtStudents: StudentType[]
}

const initialState: DebtState = {
  debtStudents: [],
}

const debtSlice = createSlice({
  name: "debt",
  initialState,
  reducers: {
    addDebtStudent: (state, action: PayloadAction<StudentType>) => {
      const exists = state.debtStudents.find((s) => s.id === action.payload.id)
      if (!exists) {
        state.debtStudents.push(action.payload)
      }
    },
    removeDebtStudent: (state, action: PayloadAction<number>) => {
      state.debtStudents = state.debtStudents.filter((s) => s.id !== action.payload)
    },
  },
})

export const { addDebtStudent, removeDebtStudent } = debtSlice.actions
export default debtSlice.reducer

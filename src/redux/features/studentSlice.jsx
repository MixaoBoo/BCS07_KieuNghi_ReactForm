import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.findIndex(
        (item) => item.maSoSV === action.payload.maSoSV
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeStudent: (state, action) => {
      return state.filter((item) => item.maSoSV !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, removeStudent } =
  studentSlice.actions;
export default studentSlice.reducer;

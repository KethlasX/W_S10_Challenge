import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 size: "All",
}

export const pizzaSlice = createSlice({
 name: 'size',
 initialState,
 reducers: {
  updateDisplaySize(state, action) {
   state.size = action.payload
  }
 }
})

export const {
 updateDisplaySize
} = pizzaSlice.actions

export default pizzaSlice.reducer
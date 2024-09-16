import { createSlice } from "@reduxjs/toolkit";

const initialFormState = { // suggested
 fullName: '',
 size: '',
 '1': false,
 '2': false,
 '3': false,
 '4': false,
 '5': false,
}

export const formSlice = createSlice({
 name: 'form',
 initialFormState,
 reducers: {
  setName(state, action) {
   state.fullName = action.payload
  }
 }
})

export const {
 setName,
} = formSlice.actions

export default formSlice.reducer
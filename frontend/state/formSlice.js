import { createSlice } from "@reduxjs/toolkit";

const initialState = { // suggested
 fullName: '',
 size: '',
 '1': false,
 '2': false,
 '3': false,
 '4': false,
 '5': false,
}

const formSlice = createSlice({
 name: 'form',
 initialState,
 reducers: {
  changeInput(state, action) {
   const {name, value} = action.payload
   // return {...state, [name]: value}
   state[name] = value
  }, 
  resetForm() {
   return initialState
  }

 }
})

export const {
 changeInput,
 resetForm,
} = formSlice.actions

export default formSlice.reducer
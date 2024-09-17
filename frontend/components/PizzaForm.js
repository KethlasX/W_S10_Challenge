import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateOrderMutation } from '../state/reallyPizzaApi'
import {
  changeInput,
  resetForm,
} from '../state/formSlice'

const initialState = { // suggested
  fullName: '',
  size: '',
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
 }

const reducer = (state, action) => {
  console.log(state, reducer, "checking state and reducer")
  switch(action.type){
    case "CHANGE_INPUT" : {
      const {name, value} = action.payload
      return {...state, [name]: value}
    }
    case "RESET_FORM" : 
      return initialState
      default:
        return state
  }
}


export default function PizzaForm() {
  const [createOrder, {isLoading, error}] = useCreateOrderMutation()
  const dispatch = useDispatch()
  const form = useSelector(st => st.formState)

  const handleChange = (evt) => {
    let {name, value, type, checked} = evt.target
    let valueToUse = type === 'checkbox' ? checked : value
    dispatch(changeInput({name, value: valueToUse}))
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    let {fullName, size, ...toppingsSelection} = form
    let toppings = []
    for (let key in toppingsSelection){
      if (toppingsSelection[key]) toppings.push(key)
    }
    let requestBody = {fullName, size, toppings}
    createOrder(requestBody)
    .unwrap()
    .then(() => {
      dispatch(changeInput({name: "", value: ""}))
      console.log('here??')
    })
    .then(() => {
      dispatch(resetForm())
    })
    .catch(() => {})

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pizza Form</h2>
      {isLoading && <div className='pending'>Order in progress</div>}
      {error && <div className='failure'>Order failed: {error.data.message}</div>}
      {/* attach these to  */}

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            data-testid="fullNameInput"
            id="fullName"
            name="fullName"
            placeholder="Type full name"
            type="text"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select
            data-testid="sizeSelect"
            id="size"
            name="size"
            value={form.size}
            onChange={handleChange}>
            <option value="">----Choose size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input data-testid="checkPepperoni" checked={form['1']} onChange={handleChange} name="1" type="checkbox" />
          Pepperoni<br /></label>
        <label>
          <input data-testid="checkGreenpeppers" checked={form['2']} onChange={handleChange} name="2" type="checkbox" />
          Green Peppers<br /></label>
        <label>
          <input data-testid="checkPineapple" checked={form['3']} onChange={handleChange} name="3" type="checkbox" />
          Pineapple<br /></label>
        <label>
          <input data-testid="checkMushrooms" checked={form['4']} onChange={handleChange} name="4" type="checkbox" />
          Mushrooms<br /></label>
        <label>
          <input data-testid="checkHam" name="5" checked={form['5']} onChange={handleChange} type="checkbox" />
          Ham<br /></label>
      </div>
      <input data-testid="submit" type="submit" />
    </form>
  )
}

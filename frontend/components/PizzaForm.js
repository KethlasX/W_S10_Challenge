import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateOrderMutation } from '../state/reallyPizzaApi'
import {
  setName,
} from '../state/formSlice'

// reducer to handle the changes to initialState

export default function PizzaForm() {
  // create a form slice, put in reducer, plug into store, bring allat in here

  // need to bring in the useCreateOrderMutation here
  // make onsubmit for array of topping
  const dispatch = useDispatch()

  return (
    <form>
      <h2>Pizza Form</h2>
      {true && <div className='pending'>Order in progress...</div>}
      {true && <div className='failure'>Order failed: fullName is required</div>}
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
            onChange={(evt) => dispatch(setName(evt.target.value))}
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select data-testid="sizeSelect" id="size" name="size">
            <option value="">----Choose size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input data-testid="checkPepperoni" name="1" type="checkbox" />
          Pepperoni<br /></label>
        <label>
          <input data-testid="checkGreenpeppers" name="2" type="checkbox" />
          Green Peppers<br /></label>
        <label>
          <input data-testid="checkPineapple" name="3" type="checkbox" />
          Pineapple<br /></label>
        <label>
          <input data-testid="checkMushrooms" name="4" type="checkbox" />
          Mushrooms<br /></label>
        <label>
          <input data-testid="checkHam" name="5" type="checkbox" />
          Ham<br /></label>
      </div>
      <input data-testid="submit" type="submit" />
    </form>
  )
}

import { configureStore } from '@reduxjs/toolkit'
import { pizzaApi } from './reallyPizzaApi'
import pizzaReducer from './pizzaSlice'
import formReducer from './formSlice'

export const resetStore = () => configureStore({
  reducer: {
    pizzaState: pizzaReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    formState: formReducer,
  },
  middleware: getDefault => getDefault().concat(
    pizzaApi.middleware,
  ),
})

export const store = resetStore()

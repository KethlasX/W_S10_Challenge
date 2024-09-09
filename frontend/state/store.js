import { configureStore } from '@reduxjs/toolkit'
import { pizzaApi } from './reallyPizzaApi'
import pizzaReducer from './pizzaSlice'

export const resetStore = () => configureStore({
  reducer: {
    pizzaState: pizzaReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: getDefault => getDefault().concat(
    pizzaApi.middleware,
  ),
})

export const store = resetStore()

import { configureStore } from '@reduxjs/toolkit'
import { pizzaApi } from './reallyPizzaApi'

export const resetStore = () => configureStore({
  reducer: {
    // add your reducer(s) here
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: getDefault => getDefault().concat(
    pizzaApi.middleware,
  ),
})

export const store = resetStore()

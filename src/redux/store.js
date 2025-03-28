import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './citiesSlice.js'
import { citiesReducer } from './counterSlice.js'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cities: citiesReducer,
  },
})
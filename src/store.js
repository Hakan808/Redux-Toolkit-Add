import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/cars/carsSlice'

export default configureStore({
  reducer: {
    cars: counterReducer,
  },
})

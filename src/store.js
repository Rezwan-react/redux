import { configureStore } from '@reduxjs/toolkit'
import CounteSlice from './slices/counteSlice'

export default configureStore({
  reducer: {
    counter: CounteSlice,
  },
})
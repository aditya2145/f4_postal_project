import { configureStore } from '@reduxjs/toolkit'
import pincodeReducer from '../features/PincodeLookup/pincodeSlice'

export default configureStore({
    reducer: {
        pincodeLookup: pincodeReducer,
    },
})
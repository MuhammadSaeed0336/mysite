import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from "../feature/darkModeSlice" 

export const store = configureStore({
    reducer:{
        darkMode: darkModeReducer
    }
})
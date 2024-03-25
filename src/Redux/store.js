import { configureStore } from '@reduxjs/toolkit'
import slice from './slice'

const store = configureStore({
    reducer: {
        pokemonData: slice
    }
})

export default store;
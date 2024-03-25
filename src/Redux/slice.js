import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'mySlice',
    initialState: {
        value: []
    },
    reducers: {
        getAllData: (state, action) => {
            if (state.value.some(e => e.id === action.payload.id)) {
                return;
            }
            else {
                state.value = [...state.value, action.payload]
            }
        },
        deleteData: (state, action) => {
            state.value = state.value.filter(e => e.id !== action.payload.id)
        },
        addData: (state, action) => {
            let id = state.value.length + 1
            let obj = {
                id: id, ...action.payload
            }
            state.value = [...state.value, obj]
        },
        updateData: (state, action) => {
            state.value = state.value.map(e => e.id === action.payload.id ? { ...e, name: action.payload.name, abilities: action.payload.abilities, types: action.payload.types, sprites: action.payload.sprites, breed: action.payload.breed, description: action.payload.description } : e)
        }
    }
})

export const { getAllData, deleteData, addData, updateData } = slice.actions;
export default slice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: ""
}

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        result: (state, action) => {
            state.data = action.payload.data
        },
    }})


export const { result } = resultSlice.actions


export default resultSlice.reducer
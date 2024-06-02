import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
    numberOfIceCream: 20,
};

const iceCreamslice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCream--;
        },
        restocked: (state, action) => {
            state.numberOfIceCream += action.payload;
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIceCream--;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numberOfIceCream--;
        })
    }
});

export default iceCreamslice.reducer;
export const { ordered, restocked } = iceCreamslice.actions;
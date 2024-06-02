const { cakeAction } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

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
        builder.addCase(cakeAction.ordered, (state) => {
            state.numberOfIceCream--;
        })
    }
});

module.exports = iceCreamslice.reducer;
module.exports.iceCreamActions = iceCreamslice.actions;
const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    }
})

module.exports = cakeSlice.reducer;
module.exports.cakeAction = cakeSlice.actions


//createSlice automatically  creates action creators as the same name of the reducer function we have writen

/**
 * Slice takes care of following things:
 * 1: defining action constants
 * 2: Creating action creators & object
 * 3: switch statements in the reducer & handling the immutable updates in the reducers
 */
 
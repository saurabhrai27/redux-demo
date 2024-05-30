const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreaters = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// Action
// action creator function
function orderCake() {
    // action object
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIceCream() {
    // action object
    return {
        type: ICECREAM_ORDERED,
        payload: 1,
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

// Action is an object with the type property.
// Action creator is an function which returns an object.


// Reducer => (prevState, action) => newState

const initialCakeState = {
    numberOfCakes: 10,
};

const initialIceCreamState = {
    numberOfIceCream: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload,
            }

        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfIceCream - 1,
            }

        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfIceCream + action.payload,
            }

        default:
            return state;
    }
}

// STORE
// One store for the entire application

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreams: iceCreamReducer,
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State',store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreaters({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);


unsubscribe();


/**
 * ACTION : Defines what happend
 * REDUCERS: Defines how the applications state changes
 */
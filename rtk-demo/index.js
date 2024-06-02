const store = require('./app/store');
const cakeAction = require('./features/cake/cakeSlice').cakeAction;
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions;
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe( () => {})

store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.restocked(3))

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(3));

unsubscribe();
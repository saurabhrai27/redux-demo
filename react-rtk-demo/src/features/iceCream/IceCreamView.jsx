import React from'react';
import { useSelector, useDispatch} from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';

export const IceCreamView = () => {
    const numOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream);
    const dispatch = useDispatch();
    return (
        <>
            <h2>Number of ice creams - {numOfIceCream}</h2>
            <button onClick={ () => dispatch(ordered())}>Order ice creams</button>
            <button onClick={ () => dispatch(restocked(5))}>Restock ice creams</button>
        </>
    )
}
import React from 'react';
import { useSelector } from 'react-redux';
import { CounterButton } from '../Components/CounterButton';

export const CounterPage = () => {

    const counter = useSelector(state => state.Counter); //hace referencia al reducer Counter:CounterReducer que esta en el store

    return (
        <div>
            <h3>Incrementa el numero</h3>
            <p>{ counter }</p>
            <CounterButton />
        </div>
    )
}

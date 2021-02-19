import React from 'react';
import { useDispatch } from 'react-redux';
import { Dicrement, Increment } from '../Acctions/Increment';

export const CounterButton = () => {

    //tienes que hacer dispatch a los reducer son userDispath
    const dispatch = useDispatch();

    return (
      <>
        <button onClick={ () => dispatch( Increment()) }>+</button>
        <button onClick={ () => dispatch( Dicrement()) }>-</button>
      </>
    )
}

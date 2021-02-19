import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { CounterPage } from './Views/CounterPage';

export const App = () => {

    return (
        <Provider store={ store }>
            <CounterPage />
        </Provider>
    )
}

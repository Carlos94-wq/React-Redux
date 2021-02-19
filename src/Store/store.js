import { combineReducers, createStore } from 'redux';
import { CounterReducer } from '../Reducers/CounterReducer';
import { loginReducer } from '../Reducers/loginReducer';

const allReducers = combineReducers({
    Counter: CounterReducer,
    Auth: loginReducer
})

 export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



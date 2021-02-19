export const CounterReducer=( state = 0, action )=>{
    switch (action.type) {
        case 'INCREMENT':
            
            return state + 1;
    
        case 'DICREMENT':
        
            return state - 1;
        default :
            return state;
    }
}
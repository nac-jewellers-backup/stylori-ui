import React from 'react';
import { reducer } from './reducers';


const initialState = {
    episodes: [],
    favourites: []
};

export const Store = React.createContext(initialState);

// TODO: Check functionality
// TODO: Implement Asynchronisity
export function StoreProvider(props){

    const [ state, dispatch ] = React.useReducer(reducer, initialState);

    return(
        <Store.Provider value={{ state, dispatch }} >
            {props.children}
        </Store.Provider>
    )
}
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
//initail State

const initialState = {
    transection: []
}

//Create Context 

export const GlobalContext = createContext(initialState);

//Provider Componets

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Action 
    const deleteTransectin = (id) => {
        dispatch({
            type: 'DELETE_TRANSECTION',
            payload: id
        })
    }    
    const addTransectin = (transaction) => {
        dispatch({
            type: 'ADD_TRANSECTION',
            payload: transaction
        })
    }    
    return (
        <GlobalContext.Provider value={{
            transection: state.transection,
            deleteTransectin,
            addTransectin
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
import React , { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
    products: []
};

// Context cung cấp phương pháp truyền data xuyên suốt component tree mà không cần phải truyền props một cách thủ công qua từng level.

export const GlobalContext = createContext(initialState);

export const GlobalProvider =  ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

 //action
    const removeProduct = (id) => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: id
        })
    }

    const addProduct = (product) => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }

    const editProduct = (product) => {
        dispatch({
            type:'EDIT_PRODUCT',
            payload: product
        })
    }

     return (
         <GlobalContext.Provider value = {{
             products: state.products,
             removeProduct,
             addProduct,
             editProduct
         }}>
             {children}  
         </GlobalContext.Provider>
     )
}

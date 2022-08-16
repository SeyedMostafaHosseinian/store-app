import React, { useReducer ,createContext } from 'react';


export const cartContext = createContext()

const CartContextProvider = ({children}) => {
    const initialState = {
        selecteditems : [2]
    }
    const cartReducer = (state,action) => {
        switch(action.type) {

        }
    }
    const[cart,dispatch] = useReducer(cartReducer,initialState)
    return (
        <cartContext.Provider value={cart}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;
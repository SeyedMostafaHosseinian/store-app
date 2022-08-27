import React, { useReducer , createContext, useContext } from 'react';

//products
import { ProductDataContext } from './ProductsDataContextProvider';

export const cartContext = createContext()


const CartContextProvider = ({children}) => {
    const products = useContext(ProductDataContext)

    const initialState = {
        selectedItems : [],
        total:0,
        totalPrice:0,
        checkout:false,
    }
    
    const cartReducer = (state,action) => {
        switch(action.type) {
        
            case"ADD_TO_CART":
                const newSelectedItem = products.find(item => item.id === action.id)
                state.selectedItems.push({
                ...newSelectedItem,
                quantity:1
                })
                state.total = state.selectedItems.reduce((acc,cur)  => acc + cur.quantity,0 )
                state.totalPrice = state.selectedItems.reduce((acc,cur) => acc + (cur.quantity * cur.price) , 0)
                console.log(newSelectedItem)
                return {
                ...state,
                selectedItems:[...state.selectedItems],
                total:state.total,
                totalPrice:state.totalPrice,
                checkout:false
            } 
            case"UP_QUANTITY" :
                const uItem = state.selectedItems.find(item => item.id === action.id)
                uItem.quantity ++; 
                state.total = state.selectedItems.reduce((acc,cur)  => acc + cur.quantity,0 )
                state.totalPrice = state.selectedItems.reduce((acc,cur) => acc + (cur.quantity * cur.price) , 0)
            return {
                ...state,
                selectedItems:[...state.selectedItems],
                total:state.total,
                totalPrice:state.totalPrice,
                checkout:false

            }
            case"DOWN_QUANTITY" :
            
               const dItem = state.selectedItems.find(item => item.id === action.id)
               dItem.quantity --; 
               state.total = state.selectedItems.reduce((acc,cur)  => acc + cur.quantity,0 )
               state.totalPrice = state.selectedItems.reduce((acc,cur) => acc + (cur.quantity * cur.price) , 0)
               
            return {
                ...state,
                selectedItems:[...state.selectedItems],
                total:state.total,
                totalPrice:state.totalPrice,
                checkout:false

            }      
            case"CLEAR_ITEM":
                 
               state.selectedItems = state.selectedItems.filter(item => item.id !== action.id )
               state.total = state.selectedItems.reduce((acc,cur)  => acc + cur.quantity,0 )
               state.totalPrice = state.selectedItems.reduce((acc,cur) => acc + (cur.quantity * cur.price) , 0)
             
            return {
                 ...state,
                 selectedItems:[...state.selectedItems],
                 total:state.total,
                 totalPrice:state.totalPrice,
                 checkout:false

  
            }
            case"CHECKOUT":
                
            return {
                selectedItems : [],
                total:0,
                totalPrice:0,
                checkout:true,

            }
            case"CLAER_CART":

            return {
                selectedItems : [],
                total:0,
                totalPrice:0,
                checkout:false,
            }
            default:
            return state
        }
    }

    const[cart,dispatch] = useReducer(cartReducer,initialState)
    return (
        <cartContext.Provider value={{cart,dispatch}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;
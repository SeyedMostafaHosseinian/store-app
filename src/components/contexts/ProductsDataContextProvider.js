import React, { createContext, useEffect, useState } from 'react';


//API
import { getProducts } from '../../services/api';


//context core
export const ProductDataContext = createContext()


const ProductsDataContextProvider = ({children}) => {
    
    const [products,setProducts] = useState([])


    useEffect(() => {
        const fetchAPI = async() => {
            setProducts(await getProducts())
        }
        fetchAPI()
    },[])

    return (
        <ProductDataContext.Provider value={products}>
            {children}
        </ProductDataContext.Provider>
    );
};

export default ProductsDataContextProvider;
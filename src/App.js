import React from 'react';
import { Switch , Route , Redirect } from "react-router-dom";


//context components
import CartContextProvider from './components/contexts/CartContextProvider';
import ProductsDataContextProvide from './components/contexts/ProductsDataContextProvider';
import BlogDataContextProvider from './components/contexts/BlogDataContextProvider';

//components
import Navbar from './components/shared/Navbar';
import Landing from './components/Landing';
import Cart from './components/Cart';
import Footer from './components/shared/Footer';
import Shop from './components/Shop';

const App = () => {
  return (

  <ProductsDataContextProvide>
    <BlogDataContextProvider>
      <CartContextProvider>
         <Navbar />
          <Switch>
            <Route path="/cart"  component={Cart} />
            <Route path="/shop"  component={Shop} />
            <Route path="/"  component={Landing} />
          </Switch>
         <Footer />
      </CartContextProvider>
    </BlogDataContextProvider>
  </ProductsDataContextProvide>  
   
  );
};

export default App;
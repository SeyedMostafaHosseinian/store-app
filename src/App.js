import React from 'react';
import { Switch , Route , Redirect } from "react-router-dom";


//context components
import CartContextProvider from './components/contexts/CartContextProvider';
import ProductsDataContextProvide from './components/contexts/ProductsDataContextProvider';

//components
import Navbar from './components/shared/Navbar';
import Landing from './components/Landing';
import Footer from './components/shared/Footer';

const App = () => {
  return (
  <ProductsDataContextProvide>
   <CartContextProvider>
      <Navbar />
      <Switch>
        <Route path="/"  component={Landing} />
      </Switch>
      {/* <Footer /> */}
   </CartContextProvider>
  </ProductsDataContextProvide>  
   
  );
};

export default App;
import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import uuid from 'uuid';

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./contexts/CartContext";


function App() {

   const newData = data.map(item => {
    item.uuid = "";
    return item;
  })

  const [products] = useState(newData);
  const [cart, setCart] = useState([]);
  const [localCart, setLocalCart] = useLocalStorage("cart", [])

  const addItem = item => {
    setCart([...cart, {...item, uuid: uuid()}]);
    setLocalCart([...cart, {...item, uuid: uuid()}]);
    console.log(localCart)
  };

  const removeItem = idToRemove => {
    setCart(cart.filter(item => item.uuid !== idToRemove));
    setLocalCart(cart.filter(item => item.uuid !== idToRemove));
  }

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, setCart, localCart, setLocalCart, removeItem}}>
          <Navigation/>

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

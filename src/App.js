import React from "react";
import "./App.css";
import productData from "./data/productData";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allProducts: productData,
      selectedProduct: "",
      cart: [],
    };
  }

  render() {
    const allProducts = this.state.allProducts.map((product) => {
      return (
        <Products 
        key={product.id}
        product={product}
        />
      )
    })
   
    return (
      <div className="app">
        <h2>My Garage Sale</h2>
        <div>{allProducts}</div>
        <Cart />
        <Checkout />
      </div>
    );
  }
}

export default App;

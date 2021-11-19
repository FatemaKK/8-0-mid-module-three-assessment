import { Component } from "react";
import productData from "../data/productData";

class Cart extends Component {
  constructor() {
    super();
    this.setState({
    //   allProducts: productData,
      subTotal: 0,
      tax: 0,
      total: 0,
    });
  }
  render() {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    // const allProducts = this.state.allProducts.map((product) => {
    //   return (
    //     <li key={product.name}>
    //       {product.name} + '' + {formatter.format(product.price)}
    //     </li>
    //   );
    // });

    return (
      <div className="shoppingCart">
        <h2>Cart</h2>
        <ul>
          <li></li>
        </ul>
        <h3>Subtotal: $</h3>
        <h3>Tax: $</h3>
        <h3>Total: $</h3>
      </div>
    );
  }
}

export default Cart;

import { Component } from "react";

class Cart extends Component {
  constructor() {
    super();
    this.setState({
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
   

    return (
      <div className="shoppingCart">
        <h2>Cart</h2>
        <ul>
          <li>product.name product price $</li>
        </ul>
        <h3>Subtotal: $</h3>
        <h3>Tax: $</h3>
        <h3>Total: $</h3>
      </div>
    );
  }
}

export default Cart;

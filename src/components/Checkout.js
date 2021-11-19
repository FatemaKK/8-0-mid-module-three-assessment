import { Component } from "react";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        creditCard: 0,
        zipCode: 0,
    }
  }
  
  handleFirstName = (event) => {
    this.setState({firstName: event.target.value})
}
  handleLastName = (event) => {
    this.setState({lastName: event.target.value})
}
  handleEmail = (event) => {
    this.setState({email: event.target.value})
}
  handleCCN = (event) => {
    this.setState({creditCard: event.target.value})
}
  handleZC = (event) => {
    this.setState({zipCode: event.target.value})
}

  render() {

    return (
      <form id="checkout" onSubmit={this.handleSubmit}>
        <h3>Checkout</h3>
        <label htmlFor={"first-name"}>First Name: </label>
        <input type="text" id="first-name" name="first-name" value={this.state.firstName}
        onChange={this.handleFirstName}
        required
         />
        <br />
        <label htmlFor={"last-name"}>Last Name: </label>
        <input type="text" id="last-name" name="last-name" value={this.state.lastName}
        onChange={this.handleLastName}
        required
        />
        <br />
        <label htmlFor={"email"}>Email: </label>
        <input type="email" id="email" name="email" value={this.state.email}
        onChange={this.handleEmail}
        required
        />
        <br />
        <label htmlFor={"credit-card"}>Credit Card: </label>
        <input type="tel" inputMode='numeric' id="credit-card" name="credit-card" value={this.state.creditCard}
        onChange={this.handleCCN}
        required
        />
        <br />
        <label htmlFor={"zip-code"}>Zip Code: </label>
        <input type="tel" inputMode='numeric' id="zip-code" name="zip-code" value={this.state.zipCode}
        onChange={this.handleZC}
        required
        />
        <br />
        <button>Buy Now</button>
      </form>
    );
  }
}

export default Checkout;



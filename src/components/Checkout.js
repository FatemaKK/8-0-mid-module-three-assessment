import { Component } from "react";

class Checkout extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <form id='checkout'>
                <h3>Checkout</h3>
                <label htmlFor={'first-name'}>First Name: </label>
                <input
                type='text'
                id='first-name'
                name='first-name'
                value=''
                />
                <br/>
                <label htmlFor={'last-name'}>Last Name: </label>
                <input
                type='text'
                id='last-name'
                name='last-name'
                value=''
                />
                <br/>
                <label htmlFor={'email'}>Email: </label>
                <input
                type='text'
                id='email'
                name='email'
                value=''
                />
                <br/>
                <label htmlFor={'credit-card'}>Credit Card: </label>
                <input
                type='number'
                id='credit-card'
                name='credit-card'
                value=''
                />
                <br/>
                <label htmlFor={'zip-code'}>Zip Code: </label>
                <input
                type='number'
                id='zip-code'
                name='zip-code'
                value=''
                />
                <br/>
                <button>Buy Now</button>
            </form>
        )
    }
}

export default Checkout;
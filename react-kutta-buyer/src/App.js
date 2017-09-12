import React, { Component } from 'react';
import dogDB from './data.json';
import "./css/style.css"

import Header from "./components/header"
import Gallery from "./components/gallery"
import Cart from "./components/cart"

let dogDatabase = dogDB; //.splice(0,5);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0,
    };
  }

  onUpdate(state) {
    this.setState(state);
  }

  addToCart(idx, event) {
    // console.log("This is added to cart. = " + idx);
    let found = false;
    let currCartState = this.state.cart;
    for (var i = 0; i < currCartState.length; i++) {
      if (currCartState[i].id === idx) {
        found = true;
        currCartState[i].quantity += 1;
      }
    }
    if (!found) {
      currCartState.push({
        id: idx,
        name: dogDatabase[idx].name,
        quantity: 1,
      });
    }
    this.setState({
      cart : currCartState,
      total: this.state.total + 999
    });

  }
  incrementQuantityOfCartItem(index, event) {
    let currCartState = this.state.cart;
    currCartState[index].quantity += 1;
    this.setState({
      cart : currCartState,
      total: this.state.total + 999
    });

  }

  decrementQuantityOfCartItem(index, event) {
    let currCartState = this.state.cart;
    let qty = currCartState[index].quantity;
    if (qty === 1) {
      currCartState.splice(index, 1);
    } else if (qty > 0) {
      currCartState[index].quantity -= 1;
    }
    this.setState({
      cart : currCartState,
      total: this.state.total - 999
    });
  }


  isInViewport(offset = 0) {
    console.log('isInViewport function executed');
    if (!this.yourElement) return false;
    const top = this.yourElement.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }
  dopetest() {
    console.log(this);
  }


  render() {
    return (
      // <div onScroll={this.isInViewport.bind(this)}>
      <div >
        <Header/>
        <div className="main" onScroll={this.dopetest.bind(this)}>
          <Gallery
            dogDatabase={dogDatabase}
            addToCart={this.addToCart.bind(this)}
          />
          <Cart
            dogDatabase={dogDatabase}
            appstate={this.state}
            incrementQuantityOfCartItem={this.incrementQuantityOfCartItem.bind(this)}
            decrementQuantityOfCartItem={this.decrementQuantityOfCartItem.bind(this)}
          />
        </div>
        <div className="more" ref={(el) => this.yourElement = el}></div>
      </div>
    );
  }
}

export default App;

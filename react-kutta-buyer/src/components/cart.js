import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

class Cart extends Component {
  render() {
    let appstate = this.props.appstate;

    let renderTotal = undefined;
    if (appstate.cart.length) {
      renderTotal = (
        <div>Total: <strong>₹{appstate.total}</strong></div>
      )
    } else {
      renderTotal = <div className="empty-cart">No items in the cart.</div>

    }

    return (
      <div className="cart">
        <h1>Cart</h1>
        <CSSTransitionGroup
          transitionName="add-cart-item"
          component="ul"
          transitionEnterTimeout={500}
          transitionLeave={false}
          >
            {appstate.cart.map((item, index) => (
              <li className="cart-item" key={item.id}>
                <div className="item-title">
                  { item.name }
                </div>
                <div className="item-price">
                  <span className="item-qty">
                    ₹999 x {item.quantity}
                  </span>
                  <button className="btn" onClick={this.props.incrementQuantityOfCartItem.bind(null, index)}>+</button>
                  <button className="btn" onClick={this.props.decrementQuantityOfCartItem.bind(null, index)}>-</button>
                </div>
              </li>
            ))}
          </CSSTransitionGroup>
          <div>
            {renderTotal}
          </div>

        </div>
      );
    }
  }

  export default Cart;

import React, { Component } from 'react';


class Gallery extends Component {
  render() {
    return (
      <div className="products">
        {this.props.dogDatabase.map((item, index) => (
          <div className="product" key={index}>
            <div key="image">
              <div className="product-image">
                <img src={item.imglink} alt={item.name + " breed dog"} />
              </div>
            </div>
            <div key="info">
              <h4 className='product-title'>{ item.name }</h4>
              <p>
                Price: <strong>₹999</strong>
              </p>
              <button className="add-to-cart btn" onClick={this.props.addToCart.bind(null,index)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    );

  }
}

export default Gallery;

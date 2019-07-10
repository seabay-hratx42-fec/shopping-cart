import React from 'react';
import Cart from './Cart.jsx';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      cart: [
        { id: 0, name: 'Laptop', price: 100, picture: 'https://lnv.gy/2JrZglM' },
        { id: 1, name: 'Headphones', price: 30, picture: 'https://bit.ly/32c0loE' },
      ],
      display: false,
    };

    this.toggleProductsMenu = this.toggleProductsMenu.bind(this);
  }

  testOnClick () {
    console.log('clicked');
    const event = new CustomEvent('addItemToCart', { detail: { id: 5 }});
    document.dispatchEvent(event);
  }

  componentDidMount () {
    document.addEventListener('addItemToCart', () => console.log('item added'));
  }

  toggleProductsMenu () {
    this.setState({ display: !this.state.display });
  }

  render () {
    return (
      <nav>
        <div className="container">
          <ul className="navbar-left">
            <li><a href="#">Hi! Sign in or Register</a></li>
            <li><a href="#">Daily Deals</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
          <ul className="navbar-right">
            <li><a href="#">Sell</a></li>
            <li><a href="#">My eBay</a></li>
            <li><a href="#">Notifications</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
      </nav>
      // <Cart
      //   cart={this.state.cart}
      //   display={this.state.display}
      //   onClick={this.toggleProductsMenu}
      // />
    );
  }
}

export default App;
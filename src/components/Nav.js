import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Nav.css';
import { ReactComponent as Logo } from '../media/logo.svg';
import { ReactComponent as CartIcon } from '../media/cart-fill.svg';
import { ReactComponent as HeartIcon } from '../media/suit-heart-fill.svg';
import { ReactComponent as ProfileIcon } from '../media/person-circle.svg';

export const TopNav = (props) => {
  const [wishlistLength, setWishlistLength] = useState(
    props.currentWishlist.length
  );

  const styles = {
    wishCounter: {
      position: 'relative',
      backgroundColor: 'red',
      width: '14px',
      height: '14px',
    },
  };

  const wishCounter = () => {
    const count = props.currentWishlist.length;
    if (count > 0) {
      return <div className="wish-counter">{count}</div>;
    }
  };

  const cartCounter = () => {
    const count = props.currentCart.length;
    if (count > 0) {
      return <div className="cart-counter">{count}</div>;
    }
  };

  return (
    <div id="TopNav">
      <Link className="logo" id="link" to="/">
        <Logo className="svg" />
        <p>Compassion</p>
      </Link>
      <Link className="shoplink" id="link" to="/shop">
        Shop
      </Link>
      <div className="account">
        <div className="profile">
          <ProfileIcon className="nav-icon" />
        </div>
        <Link className="wish-link" id="link" to="/wishlist">
          <HeartIcon className="nav-icon wishlist wish-count" />
          {wishCounter()}
        </Link>
        <Link id="link" to="/cart">
          <CartIcon className="nav-icon shopping-cart" />
          {cartCounter()}
        </Link>
      </div>
    </div>
  );
};

export const NavBar = () => {
  return <div id="NavBar"></div>;
};

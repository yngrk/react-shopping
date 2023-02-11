import { Link } from 'react-router-dom';
import './Nav.css';
import { ReactComponent as Logo } from '../media/logo.svg';
import { ReactComponent as CartIcon } from '../media/cart-fill.svg';
import { ReactComponent as HeartIcon } from '../media/suit-heart-fill.svg';
import { ReactComponent as ProfileIcon } from '../media/person-circle.svg';

export const TopNav = () => {
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
        <div className="wishlist">
          <Link id="link" to="/wishlist">
            <HeartIcon className="nav-icon" />
          </Link>
        </div>
        <div className="shopping-cart">
          <CartIcon className="nav-icon" />
        </div>
      </div>
    </div>
  );
};

export const NavBar = () => {
  return <div id="NavBar"></div>;
};

import './WishList.css';
import { Link } from 'react-router-dom';

const WishList = (props) => {
  let itemDelay = -1;

  const onClickRemove = (name) => {
    if (props.wishlist.includes(name)) {
      const newList = [...props.wishlist];
      const idx = newList.findIndex((item) => item === name);
      newList.splice(idx, 1);
      props.setWishlist(newList);
    }
  };

  if (props.wishlist.length === 0) {
    return (
      <div id="wishlist">
        <h1>My Wishlist</h1>
        <h2>{'No Items in your Wishlist :('}</h2>
        <h3>Take a look in our</h3>
        <Link id="link" className="shoplink" to="/shop">
          Online Shop
        </Link>
      </div>
    );
  } else
    return (
      <div id="wishlist">
        <h1>My Wishlist</h1>
        {props.wishlist.map((item) => {
          itemDelay += 1;
          return (
            <WishListItem
              name={item}
              key={itemDelay}
              animDelay={itemDelay}
              onClickRemove={onClickRemove}
            />
          );
        })}
      </div>
    );
};

const WishListItem = (props) => {
  return (
    <div
      className={`wishlist-item animate__animated animate__fadeInUp animate__delay-${props.animDelay}s`}
    >
      <div className="item">
        <div className="name">{props.name}</div>
        <div className="separator"></div>
        <div className="controls">
          <div className="to-cart">To Cart</div>
          <div
            className="remove"
            onClick={() => {
              props.onClickRemove(props.name);
            }}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;

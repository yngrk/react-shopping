import './WishList.css';
import { Link } from 'react-router-dom';

const WishList = (props) => {
  const handleRemoveFromCart = (title) => {
    const newList = [...props.currentCart];
    const idx = newList.findIndex((item) => item.title === title);
    newList.splice(idx, 1);
    props.setCart(newList);
  };

  const handleRemoveFromWishlist = (title) => {
    const newList = [...props.currentWishlist];
    const idx = newList.findIndex((item) => item.title === title);
    newList.splice(idx, 1);
    props.setWishlist(newList);
  };

  if (props.currentWishlist.length === 0) {
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
  } else {
    let itemDelay = -1;
    return (
      <div id="wishlist">
        <h1>My Wishlist</h1>
        {props.currentWishlist.map((item) => {
          itemDelay += 1;
          return (
            <WishListItem
              product={item}
              currentCart={props.currentCart}
              currentWishlist={props.currentWishlist}
              setCart={props.setCart}
              setWishlist={props.setWishlist}
              key={itemDelay}
              animDelay={itemDelay}
              onRemoveFromCart={(product) => {
                handleRemoveFromCart(product);
              }}
              onRemoveFromWishlist={(product) => {
                handleRemoveFromWishlist(product);
              }}
            />
          );
        })}
      </div>
    );
  }
};

const WishListItem = (props) => {
  const onAddToCart = () => {
    const newList = [...props.currentCart];
    newList.push(props.product);
    props.setCart(newList);
  };

  let isInCart = false;
  props.currentCart.forEach((item) => {
    if (item.title === props.product.title) isInCart = true;
    return;
  });
  if (isInCart)
    return (
      <div
        className={`wishlist-item animate__animated animate__fadeInUp animate__delay-${props.animDelay}s`}
      >
        <div className="item">
          <div className="name">{props.product.title}</div>
          <div className="separator"></div>
          <div className="controls">
            <div
              className="in-cart"
              onClick={() => {
                props.onRemoveFromCart(props.product.title);
              }}
            >
              Remove from cart
            </div>
            <div
              className="remove"
              onClick={() => {
                props.onRemoveFromWishlist(props.product.title);
              }}
            >
              Remove from wishlist
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className={`wishlist-item animate__animated animate__fadeInUp animate__delay-${props.animDelay}s`}
      >
        <div className="item">
          <div className="name">{props.product.title}</div>
          <div className="separator"></div>
          <div className="controls">
            <div className="to-cart" onClick={onAddToCart}>
              Add to Cart
            </div>
            <div
              className="remove"
              onClick={() => {
                props.onRemoveFromWishlist(props.product.title);
              }}
            >
              Remove from wishlist
            </div>
          </div>
        </div>
      </div>
    );
};

export default WishList;

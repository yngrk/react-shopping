import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = (props) => {
  const [total, setTotal] = useState(
    props.currentCart.reduce((acc, curr) => {
      return acc + curr.count * parseFloat(curr.price).toFixed(2);
    }, 0)
  );

  const handleIncreaseCount = (count, title) => {
    const newList = [...props.currentCart];
    const idx = newList.findIndex((item) => item.title === title);
    newList[idx].count = count + 1;
    setTotal(
      props.currentCart.reduce((acc, curr) => {
        return acc + curr.count * parseFloat(curr.price).toFixed(2);
      }, 0)
    );
  };

  const handleDecreaseCount = (count, title) => {
    if (count <= 0) return;
    const newList = [...props.currentCart];
    const idx = newList.findIndex((item) => item.title === title);

    newList[idx].count = count - 1;
    setTotal(
      props.currentCart.reduce((acc, curr) => {
        return acc + curr.count * parseFloat(curr.price).toFixed(2);
      }, 0)
    );

    if (count === 1) {
      newList.splice(idx, 1);
      props.setCart(newList);
    }
  };

  let id = 0;
  if (props.currentCart.length < 1)
    return (
      <div id="cart">
        <h1>Shopping Cart</h1>
        <h2>Your shopping cart is empty :{'('}</h2>
        <Link id="link" to="/shop" className="shop-link">
          Go To Shop
        </Link>
      </div>
    );
  return (
    <div id="cart">
      <h1>Shopping Cart</h1>
      {props.currentCart.map((item) => {
        id += 1;
        return (
          <CartItem
            increaseCount={(count, title) => {
              handleIncreaseCount(count, title);
            }}
            decreaseCount={(count, title) => {
              handleDecreaseCount(count, title);
            }}
            product={item}
            key={id}
          />
        );
      })}
      <div className="end-frame">
        <div className="total">
          Total: <span className="price">{total.toFixed(2)}€</span>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="name">{props.product.title}</div>

      <div className="data">
        <div className="count">
          <button
            onClick={() => {
              props.increaseCount(props.product.count, props.product.title);
            }}
            className="btn"
          >
            +
          </button>
          {props.product.count}
          <button
            onClick={() => {
              props.decreaseCount(props.product.count, props.product.title);
            }}
            className="btn"
          >
            -
          </button>
        </div>
        |
        <div className="price">
          {(props.product.price * props.product.count).toFixed(2)} €
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

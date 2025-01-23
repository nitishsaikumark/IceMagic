import React from "react";
import classes from './CartButton.module.css';
import icon from '../../assets/cartIcon.png';
import { useSelector } from "react-redux";

function CartButton(props) {

  const cartCount = useSelector(state => state.items.length);
  return <button className={classes.cart_butt} onClick={props.onCLICK}>
      <img src={icon} alt="cart icon"></img>
      <span className={classes.itemCount}>{cartCount}</span>
  </button>;
}

export default CartButton;

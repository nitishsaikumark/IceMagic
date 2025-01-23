import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, RemoveItem } from "../Actions/Action";
import Checkout from "../Checkout";
import classes from "./Modal.module.css";

function Modal(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit,setDidSubmit] = useState(false);

  const currentState = useSelector((state) => state);

  const dispatch = useDispatch();

  function AddCartHandler(item) {
    console.log(" item amount increased");
    dispatch(AddItem(item));
  }

  function RemoveCartHandler(item) {
    console.log(" item amount decreased");
    dispatch(RemoveItem(item));
  }

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const submitOrderHandler = async (userData) =>{

    // setIsSubmitting(true);
    // await fetch('https://delicious-food-e7053-default-rtdb.firebaseio.com/orders.json', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     user: userData,
    //     orderedItems: cartCtx.items
    //   })
    // });
    // setIsSubmitting(false);
    // setDidSubmit(true);
    // cartCtx.clearCart();
    setDidSubmit(true);
  }

  const cartItems = currentState.items.map((item) => (
    // <ul>{item.name}</ul>
    <div>
      <div className={classes.m}>
        <div className={classes.m_left}>
          <div className={classes.itemName}>{item.name}</div>
          <div className={classes.desc}>
            <div className={classes.desc_price}>&#x20b9;{item.price}</div>
            <div className={classes.desc_amount}>x {item.amount}</div>
          </div>
        </div>
        <div className={classes.m_right}>
          <div className={classes.two_button}>
            <button
              className={classes.remove_button}
              onClick={RemoveCartHandler.bind(null, item)}
            >
              -
            </button>
            1
            <button
              className={classes.add_button}
              onClick={AddCartHandler.bind(null, item)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className={classes.boundary}></div>
    </div>
  ));

  const orderConfirmed = <><h2>Order sent:) &nbsp;&nbsp;Thank you for ordering....</h2>
  <button className={classes.close_button} onClick={props.onClose} style={{"float":"right"}}>
            Close
          </button>
  </>
  // onClick={props.onClose}
  const status = <><h2>Total Amount</h2>&#x20b9;{currentState.totalAmount}</>
  return (
    <div className={classes.back_drop}>
      <div className={classes.modal}>
        {!isCheckout &&  <div className={classes.modal_content}>{cartItems}</div>}
        {!didSubmit && <div className={classes.summary}>
         {currentState.totalAmount === 0  && <h2>Your cart is empty</h2>} 
         {currentState.totalAmount !== 0 && status}
        </div>}
        {!isCheckout &&<div className={classes.cart_buttons}>
          <button className={classes.close_button} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.order_button} onClick={orderHandler}>Order</button>
        </div>}
        {isCheckout && !didSubmit && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
        {isCheckout && didSubmit && orderConfirmed}
      </div>
    </div>
  );
}

export default Modal;

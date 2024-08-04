// import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from "react-redux";
import { dummyProfileSelector } from "../../store/selectors";

import React from "react";
import "./styles.css";
import { Card } from "@mui/material";

const Cart = ({ cartItems = [{}], totalAmount }) => {
  const cartData = useSelector(
    dummyProfileSelector.getCartData(),
    shallowEqual
  );
  const handleCheckout = () => {
    // Handle checkout logic here (e.g., redirect to payment page)
    // alert('Proceeding to checkout...');

    console.log("--- cartData ----", cartData);
  };

  return (
    <div className="checkout-container">
      <h2 style={{textAlign: 'center'}}>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >
          {/* <div
          style={{
            padding: 30,
            backgroundColor: 'red'
          }}
          > */}
          <Card sx={{padding: 15}}>
            <ul className="cart-items">
              {cartData.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="item-details">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                      style={{ height: 200, width: 200 }}
                    />
                    <div className="item-info">
                      <h4>{"item.name"}</h4>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-amount">
              <h3>Total Amount: ${totalAmount?.toFixed(2)}</h3>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
            </Card>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Cart;

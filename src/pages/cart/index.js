// import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { dummyProfileSelector } from "../../store/selectors";

import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button, Card } from "@mui/material";
import { removeCartData, setCartData } from "../../store/slice";

const Cart = ({ cartItems = [{}] }) => {
  const cartData = useSelector(
    dummyProfileSelector.getCartData(),
    shallowEqual
  );
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0)
  const handleCheckout = () => {
    // Handle checkout logic here (e.g., redirect to payment page)
    // alert('Proceeding to checkout...');

    console.log("--- cartData ----", cartData);
  };


  useEffect(() => {
    setProductData(cartData)

    let ans  = 0;
    cartData.forEach((val) => {
      ans = ans + val.price
    })
    setTotalAmount(ans)
  },[])



  const handleCount = (from, index, data) => {
    let temp = productData.map((product) => ({ ...product }));

    console.log('index', index)
    console.log('temp', temp)
    // let card = [...cartData];

    if (from === "decrement") {
      if (temp[index].count > 0) {
        temp[index].count -= 1;
       temp.pop();
        dispatch(removeCartData(temp));
      }
    } else {
      if (temp[index]?.count) {
        temp[index].count += 1;
      } else {
        temp[index].count = 1;
      }
      // dispatch(setCartData(temp[index]));
    }

    let ans  = 0;
    temp.forEach((val) => {
      ans = ans + val.price
    })
    setTotalAmount(ans)

    setProductData(temp);
  };

  return (
    <div className="checkout-container">
      <h2 style={{ textAlign: "center" }}>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <div
          style={{
            padding: 30,
            backgroundColor: 'red'
          }}
          > */}
          <Card sx={{ padding: 15 }}>
            <ul className="cart-items">
              {productData.map((item, index) => (
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
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleCount("decrement", index)}
                    sx={{
                      backgroundColor: "#3f51b5",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#303f9f",
                      },
                      padding: "6px 12px",
                    }}
                  >
                    -
                  </Button>
                  <p style={{ margin: "0 10px" }}>{item?.count}</p>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleCount("increment", index)}
                    sx={{
                      backgroundColor: "#3f51b5",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#303f9f",
                      },
                      padding: "6px 12px",
                    }}
                  >
                    +
                  </Button>
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

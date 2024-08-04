import React from "react";
import ProductComponet from "../product";
import FilterComponet from "../filter";
import "./styles.css";
import { shallowEqual, useSelector } from "react-redux";
import { dummyProfileSelector } from "../../store/selectors";

function Home() {
  const cartData = useSelector(
    dummyProfileSelector.getDummyApiListData(),
    shallowEqual
  );
  return (
    <div>
      <div>
        <p>{"HomeOnline Fashion Store"}</p>
      </div>
      <div>
        <p>Online Fashion Store - {cartData?.length}items</p>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        {/* <div className="filteMainIcon">
          <FilterComponet />
        </div> */}
        <div>
          <ProductComponet />
        </div>
      </div>
    </div>
  );
}

export default Home;

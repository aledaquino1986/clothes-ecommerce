import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./cart-dropdown.scss";

const Cartdropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default Cartdropdown;

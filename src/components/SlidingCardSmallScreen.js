import React from "react";
import styleing from "./SlidingCardSmallScreen.module.css";
function SlidingCardSmallScreen(props) {
  return (
    <div className={styleing.SlidingCardDiv}>
      <span className={styleing.SlidingMargin + " " + styleing.FontBold}>
        {props.mydata.Price};
      </span>
      <button className={styleing.CartButton}>Add to Cart</button>
      <div className={styleing.ContainerOfButtons}>
        <button className={styleing.ButtonU}>share</button>
        <button className={styleing.ButtonU}>Gift this Course</button>
        <button className={styleing.ButtonU}>Apply Coupon</button>
      </div>
    </div>
  );
}

export default SlidingCardSmallScreen;

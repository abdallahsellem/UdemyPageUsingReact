import React, { useState } from "react";
import stylieng from "./ReadMore.module.css";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={stylieng.text}>
      {isReadMore ? text.slice(0, 200) : text}
      <span onClick={toggleReadMore} className={stylieng.ReadOrHide}>
        <span
          style={{ fontSize: "20px" }}
          className="material-symbols-outlined"
        >
          expand_more
        </span>
        {isReadMore ? "...Show more" : " Show less"}
      </span>
    </p>
  );
};
export default ReadMore;

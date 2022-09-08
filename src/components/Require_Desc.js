import React from "react";
import styleing from "./Require_Desc.module.css";
import ReadMore from "./ReadMore";
function Require_Desc(props) {
  return (
    <>
      <div className={styleing.ReqDiv}>
        <h4>Requirements</h4>
        {props.mydata.Requirements.map((x) => {
          return <li> {x}</li>;
        })}
      </div>
      <div className={styleing.ReqDiv}>
        <h4>Description</h4>
        <ReadMore>{props.mydata.Description}</ReadMore>
      </div>
    </>
  );
}

export default Require_Desc;

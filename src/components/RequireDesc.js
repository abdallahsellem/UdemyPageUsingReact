import React from "react";
import styleing from "./RequireDesc.module.css";
import ReadMore from "./ReadMore";
function RequireDesc(props) {
  return (
    <>
      <div className={styleing.ReqDiv}>
        <h4>Requirements</h4>
        {props.CoursesDataa.Requirements.map((x) => {
          return <li key={x + 444}> {x}</li>;
        })}
      </div>
      <div className={styleing.ReqDiv}>
        <h4>Description</h4>
        <ReadMore>{props.CoursesDataa.Description}</ReadMore>
      </div>
    </>
  );
}

export default RequireDesc;

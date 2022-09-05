import React from "react";

function Require_Desc(props) {
  return (
    <div>
      <h4>Requirements</h4>
      {props.mydata[0].Requirements.map((x) => {
        return <li> {x}</li>;
      })}
    </div>
  );
}

export default Require_Desc;

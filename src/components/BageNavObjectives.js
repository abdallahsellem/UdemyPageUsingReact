import React from "react";
import styleing from "./MiddlePage.module.css";
function BageNavObjectives(props) {
  return (
    <div>
      <div>
        <div className={styleing.DivOfNavButtons}>
          <button className={styleing.BageNavButton}>Overview</button>
          <button className={styleing.BageNavButton}>Curriculum</button>
          <button className={styleing.BageNavButton}>Instructor</button>
          <button className={styleing.BageNavButton}>Reviews</button>
        </div>
        <div style={{ width: "80%" }}>
          <div className={"row" + " " + styleing.LeariningObjectives}>
            <h3>What you'll learn</h3>
            {props.mydata[0].LeariningObjectives.map((x, idx) => {
              return (
                <div key={idx} className="col-md-6 col-sm-12">
                  <span className="material-symbols-outlined">done</span>
                  <span>{x}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BageNavObjectives;

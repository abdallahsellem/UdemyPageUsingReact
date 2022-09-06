import React from "react";
import stylieng from "./StarRatinSection.module.css";
function StarRatinSection(props) {
  return (
    <>
      <div className={stylieng.StarRatingDiv}>
        <div>
          <div className={stylieng.RatingText} style={{ fontSize: "4rem" }}>
            {props.mydata[0].Stars}
          </div>
          <div>
            <span className={"fa fa-star" + " " + stylieng.checked}></span>
            <span className={"fa fa-star" + " " + stylieng.checked}></span>
            <span className={"fa fa-star" + " " + stylieng.checked}></span>
            <span className="fa fa-star"></span>
          </div>
          <div className={stylieng.RatingText}>Course Rating</div>
        </div>
        <div style={{ width: "50%" }}>
          <div>
            <div className={"progress" + " " + stylieng.ProgressDiv}>
              <span
                className={"progress-bar" + " " + stylieng.StarsColor}
                role="progressbar"
                style={{ width: props.mydata[0].Stars * 20 + "%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></span>
            </div>
            <span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
            </span>
            <span style={{ marginLeft: "10px" }}>
              {props.mydata[0].Stars * 20 + "%"}
            </span>
          </div>
          <div>
            <div className={"progress" + " " + stylieng.ProgressDiv}>
              <div
                className={"progress-bar" + " " + stylieng.StarsColor}
                role="progressbar"
                style={{ width: props.mydata[0].Stars * 15 + "%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
            </span>
            <span style={{ marginLeft: "10px" }}>
              {props.mydata[0].Stars * 15 + "%"}
            </span>
          </div>
          <div>
            <div className={"progress" + " " + stylieng.ProgressDiv}>
              <div
                className={"progress-bar" + " " + stylieng.StarsColor}
                role="progressbar"
                style={{ width: props.mydata[0].Stars * 13 + "%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
            </span>
            <span style={{ marginLeft: "10px" }}>
              {props.mydata[0].Stars * 13 + "%"}
            </span>
          </div>
          <div>
            <div className={"progress" + " " + stylieng.ProgressDiv}>
              <div
                className={"progress-bar" + " " + stylieng.StarsColor}
                role="progressbar"
                style={{ width: props.mydata[0].Stars * 5 + "%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
              <span className={"fa fa-star" + " " + stylieng.checked}></span>
            </span>
            <span style={{ marginLeft: "10px" }}>
              {props.mydata[0].Stars * 5 + "%"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default StarRatinSection;

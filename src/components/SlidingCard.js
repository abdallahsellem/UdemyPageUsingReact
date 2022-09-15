import React from "react";
import styleing from "./SlidingCard.module.css";
function SlidingCard(props) {
  return (
    <>
      <div className={styleing.SlidingCard}>
        <div style={{ border: "solid 1px black", display: "flex" }}>
          <img
            className={styleing.SlidingImage}
            src={props.CoursesDataa.Image}
          ></img>
          <span
            className={"material-symbols-outlined" + " " + styleing.IconPlay}
          >
            play_circle
          </span>
        </div>
        CoursesDataa
        <div>
          <span className={styleing.SlidingMargin + " " + styleing.FontBold}>
            {props.CoursesDataa.Price};
          </span>
          <span className={styleing.SlidingMargin + " " + styleing.FontHashing}>
            {props.CoursesDataa.Price};
          </span>
          <button className={styleing.CartButton}>Add to Cart</button>
          <button className={styleing.BuyButton}>Buy Now</button>
          <div>
            <h5 style={{ margin: "20px", fontSize: "15px" }}>
              this course include:
            </h5>
            <div>
              <span
                className={"material-symbols-outlined" + " " + styleing.IconTv}
              >
                smart_display
              </span>
              <span style={{ fontSize: "13px" }}>14 hours</span>
            </div>
            <div>
              <span
                className={"material-symbols-outlined" + " " + styleing.IconTv}
              >
                draft
              </span>
              <span style={{ fontSize: "13px" }}>1 article</span>
            </div>
            <div>
              <span
                className={"material-symbols-outlined" + " " + styleing.IconTv}
              >
                drive_folder_upload
              </span>
              <span style={{ fontSize: "13px" }}>3 downloable resources</span>
            </div>
            <div>
              <span
                className={"material-symbols-outlined" + " " + styleing.IconTv}
              >
                all_inclusive
              </span>
              <span style={{ fontSize: "13px" }}>Full time</span>
            </div>
            <button className={styleing.ButtonU}>share</button>
            <button className={styleing.ButtonU}>Gift this Course</button>
            <button className={styleing.ButtonU}>Apply Coupon</button>
          </div>
          <div className={styleing.ContainerD}>
            <h3 style={{ marginLeft: "20px", fontSize: "1.2rem" }}>
              training 5 or more Pepole ?
            </h3>
            <p style={{ marginLeft: "20px", fontSize: "13px" }}>
              Get your Team access to 17,000 top Udemy Courses
            </p>
            <button className={styleing.ButtonB}> Try Udemy Busniess</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlidingCard;

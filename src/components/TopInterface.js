import React, { useState } from "react";
import styleing from "./TopInterface.module.css";
import SlidingCard from "./SlidingCard";
import SlidingCardSmallScreen from "./SlidingCardSmallScreen";
function TopInterface(props) {
  return (
    <>
      <div className={styleing.TopInterfaceStyle}>
        <div className={styleing.InterfaceMargin}>
          <div>
            <a className={styleing.InterfaceTaps}>Development</a>
            <span
              className={
                "material-symbols-outlined" +
                " " +
                styleing.InterfaceFont +
                " " +
                styleing.FontSize
              }
            >
              arrow_forward_ios
            </span>
            <a className={styleing.InterfaceTaps}>Programming language</a>
            <span
              className={
                "material-symbols-outlined" +
                " " +
                styleing.InterfaceFont +
                " " +
                styleing.FontSize
              }
            >
              arrow_forward_ios
            </span>
            <a className={styleing.InterfaceTaps}>Python</a>
          </div>
          <div>
            <h1 className={styleing.InterfaceFont}>{props.mydata.Title}</h1>
          </div>
          <div>
            <h3 style={{ width: "50%" }} className={styleing.InterfaceFont}>
              {props.mydata.Paragraph}
            </h3>
          </div>
          <div>
            <div className={styleing.InterfaceFont + " " + styleing.BestSeller}>
              Bestseller
            </div>
            <div className={styleing.DivOfStars}>
              <span className={"fa fa-star" + " " + styleing.checked}></span>
              <span className={"fa fa-star" + " " + styleing.checked}></span>
              <span className={"fa fa-star" + " " + styleing.checked}></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <span
              className={
                styleing.InterfaceFont + " " + styleing.InterfaceItemMargin
              }
            >
              {"(" + props.mydata.Rating + ")"}
            </span>
            <span
              className={
                styleing.InterfaceFont + " " + styleing.InterfaceItemMargin
              }
            >
              {props.mydata.Students + " Students"}
            </span>
          </div>
          <span
            className={
              styleing.InterfaceFont + " " + styleing.InterfaceItemMargin
            }
          >
            Created by
            <span style={{ color: "blueviolet", textDecoration: "underline" }}>
              {" " + props.mydata.Author}
            </span>
          </span>
          <div className={styleing.ItemsMarginTop}>
            <span
              className={
                "material-symbols-outlined" +
                " " +
                styleing.InterfaceFont +
                " " +
                styleing.FontSize
              }
            >
              error
            </span>
            <span
              className={
                styleing.InterfaceFont + " " + styleing.InterfaceItemMarginRight
              }
            >
              {props.mydata.LastUpdate}
            </span>
            <span
              className={
                "material-symbols-outlined" +
                " " +
                styleing.InterfaceFont +
                " " +
                styleing.FontSize
              }
            >
              language
            </span>
            <span
              className={
                styleing.InterfaceFont + " " + styleing.InterfaceItemMarginRight
              }
            >
              {props.mydata.Languange}
            </span>
            <span
              className={
                "material-symbols-outlined" +
                " " +
                styleing.InterfaceFont +
                " " +
                styleing.FontSize
              }
            >
              subtitles
            </span>
            <span className={styleing.InterfaceFont}>
              {" "}
              {props.mydata.Languange} [Auto]
            </span>
          </div>
        </div>
        <SlidingCardSmallScreen mydata={props.mydata}></SlidingCardSmallScreen>
      </div>
      <SlidingCard mydata={props.mydata}></SlidingCard>
    </>
  );
}

export default TopInterface;

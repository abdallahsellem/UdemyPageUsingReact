import React, { useState } from "react";
import listStyles2 from "./StyleButton.module.css";
import Card from "./CoursesCard.js";
import listStyles from "./StyleCard.module.css";
import { Link } from "react-router-dom";
const CoursesContainer = (props) => {
  let xx = -1;
  const setnum = (flagg) => {
    xx = flagg;
    console.log(flagg);
    console.log(props.desired);
    if (props.desired == "search for anything") {
      xx = 0;
    }
  };
  return (
    <div className="container2">
      <h3 style={{ marginLeft: "20px" }}>
        Expand your Career opportunities with Python
      </h3>
      <p style={{ marginLeft: "20px" }}>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language.
      </p>
      <p style={{ marginLeft: "20px" }}>
        Its simple syntax and readability makes Python perfect for Flask,
        Django, data science, and machine learning.
      </p>
      <p style={{ marginLeft: "20px" }}>
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <br />
      <section>
        <div className={listStyles2.Con2Button}>
          <a className={listStyles2.Con2Button_tag} href="">
            Explore Python
          </a>
        </div>
      </section>
      <div className={listStyles.CoursesSection}>
        {props.mydata.map((x, ind) => (
          <>
            {setnum(x.title.toLowerCase().indexOf(props.desired.toLowerCase()))}
            {xx === -1 ? (
              <></>
            ) : (
              <Link style={{ color: "black" }} to={`/pythoncourse/${x.id}`}>
                <Card key={ind} {...x}></Card>
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default CoursesContainer;

import React from "react";
import listStyles2 from "./StyleCuorsel.module.css";
import Card from "./Card.js";
import listStyles from "./StyleCard.module.css";
import data from "./courses.json";
let DataArray = data.courses_python;
let IsDesk;
let Data = Object.keys(DataArray).map(function (key) {
  return DataArray[key];
});
const CoursesContainer = (props) => {
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
        {Data.map((x, ind) => (
          <Card key={ind} {...x}></Card>
        ))}
      </div>
    </div>
  );
};
export default CoursesContainer;

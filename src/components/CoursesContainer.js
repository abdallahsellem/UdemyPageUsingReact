import React from "react";
import listStyles from "./StyleCard.module.css";
import listStyles2 from "./StyleCuorsel.module.css";
import Card from "./Card.js";
const data = require("./courses.json");
const CoursesContainer = (props) => {
  return (
    <div className="container2">
      <h3>Expand your Career opportunities with Python</h3>
      <p>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language.
      </p>
      <p>
        Its simple syntax and readability makes Python perfect for Flask,
        Django, data science, and machine learning.
      </p>
      <p>
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <br />
      <section>
        <div className={listStyles2.Con2Button}>
          <a className={listStyles2.Con2Button_tag}>Explore Python</a>
        </div>
      </section>
      <div className="Courses_Section">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className={listStyles.CardWarp}>
              <Card {...data.courses_python[1]}></Card>
              <Card {...data.courses_python[2]}></Card>
              <Card {...data.courses_python[3]}></Card>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className={
                "carousel-control-prev-icon" +
                " " +
                listStyles2.carousel_control_prev
              }
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className={
                "carousel-control-next-icon" +
                " " +
                listStyles2.carousel_control_next
              }
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoursesContainer;

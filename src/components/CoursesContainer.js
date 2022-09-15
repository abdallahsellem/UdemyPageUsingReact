import React, { useEffect } from "react";
import listStyles2 from "./StyleButton.module.css";
import Card from "./CoursesCard.js";
import listStyles from "./StyleCard.module.css";
import { Link, useSearchParams } from "react-router-dom";
const CoursesContainer = (props) => {
  const [searchParam, SetsearchParam] = useSearchParams();
  let found = -1;
  const setnum = (data) => {
    const searchedCourse = searchParam.get("filter");
    if (searchedCourse === null) {
      found = 1;
    } else if (
      data.toLowerCase().indexOf(searchedCourse) !== -1 ||
      searchedCourse === "search for anything"
    ) {
      found = 1;
    } else {
      found = -1;
    }
  };
  useEffect(() => {
    const searchedCourse = searchParam.get("filter");
    if (searchedCourse !== null) {
      SetsearchParam({ filter: searchedCourse });
    } else SetsearchParam({ filter: props.desired });
  }, [props.desired]);
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
          <a className={listStyles2.Con2Button_tag}>Explore Python</a>
        </div>
      </section>
      <div className={listStyles.CoursesSection}>
        {props.CoursesDataa.map((coursedata, ind) => (
          <div key={coursedata.id * 100}>
            {setnum(coursedata.title)}
            {found === -1 ? (
              <></>
            ) : (
              <Link
                style={{ color: "black" }}
                to={`/pythoncourse/${coursedata.id}`}
              >
                <Card {...coursedata}></Card>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CoursesContainer;

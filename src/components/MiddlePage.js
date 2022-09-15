import React from "react";
import BageNavObjectives from "./BageNavObjectives";
import CourseContent from "./CourseContent";
import RequireDesc from "./RequireDesc";
import Instructor from "./Instructor";
import StarRatinSection from "./StarRatinSection";
import ReviewsSection from "./ReviewsSection";
function MiddlePage(props) {
  return (
    <div>
      <BageNavObjectives CoursesDataa={props.CoursesDataa}></BageNavObjectives>
      <CourseContent CoursesDataa={props.CoursesDataa}></CourseContent>
      <RequireDesc CoursesDataa={props.CoursesDataa}></RequireDesc>
      <div>
        <h4 style={{ marginLeft: "15%" }}>Instructor</h4>
        {props.CoursesDataa.Instructors.map((x, idx) => {
          return <Instructor key={idx} CoursesDataa={x}></Instructor>;
        })}
      </div>
      <StarRatinSection CoursesDataa={props.CoursesDataa}></StarRatinSection>
      <ReviewsSection CoursesDataa={props.CoursesDataa}></ReviewsSection>
    </div>
  );
}

export default MiddlePage;

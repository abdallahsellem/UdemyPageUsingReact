import React from "react";
import BageNavObjectives from "./BageNavObjectives";
import CourseContent from "./CourseContent";
import Require_Desc from "./Require_Desc";
import Instructor from "./Instructor";
import StarRatinSection from "./StarRatinSection";
import ReviewsSection from "./ReviewsSection";
function MiddlePage(props) {
  return (
    <div>
      <BageNavObjectives mydata={props.mydata}></BageNavObjectives>
      <CourseContent mydata={props.mydata}></CourseContent>
      <Require_Desc mydata={props.mydata}></Require_Desc>
      <div>
        <h4 style={{ marginLeft: "15%" }}>Instructor</h4>
        {props.mydata.Instructors.map((x, idx) => {
          return <Instructor key={idx} mydata={x}></Instructor>;
        })}
      </div>
      <StarRatinSection mydata={props.mydata}></StarRatinSection>
      <ReviewsSection mydata={props.mydata}></ReviewsSection>
    </div>
  );
}

export default MiddlePage;

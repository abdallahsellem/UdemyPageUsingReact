import React from "react";
import BageNavObjectives from "./BageNavObjectives";
import CourseContent from "./CourseContent";
import Require_Desc from "./Require_Desc";
function MiddlePage(props) {
  return (
    <div>
      <BageNavObjectives mydata={props.mydata}></BageNavObjectives>
      <CourseContent mydata={props.mydata}></CourseContent>
      <Require_Desc mydata={props.mydata}></Require_Desc>
    </div>
  );
}

export default MiddlePage;

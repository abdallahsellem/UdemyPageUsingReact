import React from "react";
import HeaderOfHomePage from "./HeaderOfHomePage";
import CoursesContainer from "./CoursesContainer";
function HomeBage(props) {
  return (
    <>
      <HeaderOfHomePage></HeaderOfHomePage>
      <CoursesContainer
        desired={props.desired}
        mydata={props.mydata}
      ></CoursesContainer>
    </>
  );
}

export default HomeBage;

import React, { useEffect } from "react";
import HeaderOfHomePage from "./HeaderOfHomePage";
import CoursesContainer from "./CoursesContainer";
import { useSearchParams } from "react-router-dom";
function HomeBage(props) {
  return (
    <>
      <HeaderOfHomePage></HeaderOfHomePage>
      <CoursesContainer
        desired={props.desired}
        CoursesDataa={props.CoursesDataa}
      ></CoursesContainer>
    </>
  );
}

export default HomeBage;

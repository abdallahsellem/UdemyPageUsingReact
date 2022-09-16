import React from "react";
import TopInterface from "./TopInterface";
import MiddlePage from "./MiddlePage";
function CoursePage(props) {
  return (
    <>
      <TopInterface CoursesDataa={props.CoursesDataa}></TopInterface>
      <MiddlePage CoursesDataa={props.CoursesDataa}></MiddlePage>
    </>
  );
}

export default CoursePage;

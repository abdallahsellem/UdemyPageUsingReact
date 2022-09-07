import React from "react";
import TopInterface from "./TopInterface";
import MiddlePage from "./MiddlePage";
function CoursePage(props) {
  return (
    <>
      <TopInterface mydata={props.mydata}></TopInterface>
      <MiddlePage mydata={props.mydata}></MiddlePage>
    </>
  );
}

export default CoursePage;

import React from "react";
import styleing from "./Instructor.module.css";
import ReadMore from "./ReadMore";
function Instructor(props) {
  return (
    <div className={styleing.BigDiv}>
      <h5>{props.mydata.Name}</h5>
      <p>{props.mydata.Job}</p>
      <div className={styleing.InstractorImgDiv}>
        <img
          className={styleing.InstractorImg}
          src={props.mydata.InstractorImage}
        ></img>
        <ul>
          <div style={{ display: "flex" }}>
            <span className="material-symbols-outlined">star</span>
            <li style={{ listStyleType: "none", marginLeft: "10px" }}>
              {props.mydata.InstractorRating + " Instractor Rating"}
            </li>
          </div>
          <div style={{ display: "flex" }}>
            <span className="material-symbols-outlined">workspace_premium</span>
            <li style={{ listStyleType: "none", marginLeft: "10px" }}>
              {props.mydata.InstractorReview + " Reviews"}
            </li>
          </div>
          <div style={{ display: "flex" }}>
            <span className="material-symbols-outlined">group</span>
            <li style={{ listStyleType: "none", marginLeft: "10px" }}>
              {props.mydata.InstractorStudents + " Students"}
            </li>
          </div>
          <div style={{ display: "flex" }}>
            <span className="material-symbols-outlined">play_circle</span>
            <li style={{ listStyleType: "none", marginLeft: "10px" }}>
              {props.mydata.InstractorCourses + " Courses"}
            </li>
          </div>
        </ul>
      </div>
      <ReadMore>{props.mydata.InstractorCv}</ReadMore>
    </div>
  );
}

export default Instructor;

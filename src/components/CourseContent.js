import React from "react";
import styleing from "./CourseContent.module.css";
function CourseContent(props) {
  const ButtonDis = (e) => {
    e.currentTarget.style.display = "none";
  };
  let AdditionalCourses = [];
  return (
    <>
      <div className={styleing.CourseContainer}>
        <div className={styleing.HeaderDiv}>
          <h2>Course Content</h2>
          <span> 15 sections • 110 lectures • 21h 5m total length </span>
        </div>
        {props.CoursesDataasDataasDataasDataa.CourseContent.map(
          (coursedata, idx) => {
            return (
              <div key={idx + 222}>
                {idx > 5 ? (
                  AdditionalCourses.push(
                    <div key={idx + 500}>
                      <span>
                        <a
                          className={
                            "btn btn-primary" + " " + styleing.ButtonsOfDropOut2
                          }
                          data-bs-toggle="collapse"
                          href={"#collapseExample" + idx}
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <div>
                            <span
                              style={{ fontSize: "20px" }}
                              className="material-symbols-outlined"
                            >
                              expand_more
                            </span>
                            <span
                              style={{
                                fontWeight: "bold",
                                margin: "0px !important",
                              }}
                            >
                              {coursedata.title}
                            </span>
                          </div>
                          <span>
                            {coursedata.ArrContent.length} lectures{" "}
                            {28 * (idx + 1)} Minutes
                          </span>
                        </a>
                      </span>
                      <div
                        className={"collapse" + " " + styleing.DropOutCollapse}
                        id={"collapseExample" + idx}
                      >
                        <div className="card card-body">
                          {coursedata.ArrContent.map((dat, idx) => {
                            return (
                              <div key={idx + 444}>
                                <span
                                  style={{
                                    fontSize: "19px",
                                    marginRight: "7px",
                                  }}
                                  className="material-symbols-outlined"
                                >
                                  play_circle
                                </span>
                                <span>{dat}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div>
                    <div>
                      <a
                        className={
                          "btn btn-primary" + " " + styleing.ButtonsOfDropOut
                        }
                        data-bs-toggle="collapse"
                        href={"#collapseExample" + idx}
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <div>
                          <span
                            style={{ fontSize: "20px" }}
                            className="material-symbols-outlined"
                          >
                            expand_more
                          </span>
                          <span
                            style={{
                              fontWeight: "bold",
                              margin: "0px !important",
                            }}
                          >
                            {coursedata.title}
                          </span>
                        </div>
                        <span>
                          {coursedata.ArrContent.length} lectures{" "}
                          {28 * (idx + 1)} Minutes
                        </span>
                      </a>
                    </div>
                    <div
                      className={"collapse" + " " + styleing.DropOutCollapse}
                      id={"collapseExample" + idx}
                    >
                      <div className="card card-body">
                        {coursedata.ArrContent.map((dat, idx) => {
                          return (
                            <div key={idx + 202}>
                              <span
                                style={{ fontSize: "19px", marginRight: "7px" }}
                                className="material-symbols-outlined"
                              >
                                play_circle
                              </span>
                              <span>{dat}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }
        )}
        {props.CoursesDataa.CourseContent.length > 5 ? (
          <div>
            <p onClick={ButtonDis}>
              <a
                className={"btn btn-primary" + " " + styleing.ReadMoreButton}
                data-bs-toggle="collapse"
                href={"#collapseExample"}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span>
                  {props.CoursesDataa.CourseContent.length -
                    5 -
                    1 +
                    " More Sections"}
                </span>
              </a>
            </p>
            <div
              className={"collapse" + " " + styleing.DropOutCollapse}
              id={"collapseExample"}
            >
              <div style={{ border: "none" }} className="card card-body">
                {AdditionalCourses}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default CourseContent;

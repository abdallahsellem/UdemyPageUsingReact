import React from "react";
import styleing from "./CourseContent.module.css";
function CourseContent(props) {
  return (
    <>
      <div className={styleing.HeaderDiv}>
        <h2>Course Content</h2>
        <span> 15 sections • 110 lectures • 21h 5m total length </span>
      </div>
      <div>
        {props.mydata[0].CourseContent.map((x, idx) => {
          if (idx > 5) {
            return <></>;
          }
          return (
            <>
              <p>
                <a
                  className={
                    "btn btn-primary" + " " + styleing.ButtonsOfDropOut
                  }
                  data-bs-toggle="collapse"
                  href={"#collapseExample" + idx}
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  key={idx}
                >
                  <div>
                    <span
                      style={{ fontSize: "20px" }}
                      class="material-symbols-outlined"
                    >
                      expand_more
                    </span>
                    <span
                      style={{ fontWeight: "bold", margin: "0px !important" }}
                    >
                      {x.title}
                    </span>
                  </div>
                  <span>
                    {x.ArrContent.length} lectures {28 * (idx + 1)} Minutes
                  </span>
                </a>
              </p>
              <div
                className={"collapse" + " " + styleing.DropOutCollapse}
                id={"collapseExample" + idx}
              >
                <div className="card card-body">
                  {x.ArrContent.map((dat) => {
                    return (
                      <div>
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
            </>
          );
        })}
        {props.mydata[0].CourseContent.length > 5 ? (
          <div>
            <p>
              <a
                className={"btn btn-primary" + " " + styleing.ReadMoreButton}
                data-bs-toggle="collapse"
                href={"#collapseExample"}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span>
                  {props.mydata[0].CourseContent.length - 5 + " More Sections"}
                </span>
              </a>
            </p>
            <div
              className={"collapse" + " " + styleing.DropOutCollapse}
              id={"collapseExample"}
            >
              <div className="card card-body">
                {props.mydata[0].CourseContent.map((x, idx) => {
                  if (idx > 5) {
                    return (
                      <>
                        <p>
                          <a
                            className={
                              "btn btn-primary" +
                              " " +
                              styleing.ButtonsOfDropOut2
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
                                class="material-symbols-outlined"
                              >
                                expand_more
                              </span>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  margin: "0px !important",
                                }}
                              >
                                {x.title}
                              </span>
                            </div>
                            <span>
                              {x.ArrContent.length} lectures {28 * (idx + 1)}{" "}
                              Minutes
                            </span>
                          </a>
                        </p>
                        <div
                          className={
                            "collapse" + " " + styleing.DropOutCollapse
                          }
                          id={"collapseExample" + idx}
                        >
                          <div className="card card-body">
                            {x.ArrContent.map((dat) => {
                              return (
                                <div>
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
                      </>
                    );
                  }
                })}
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

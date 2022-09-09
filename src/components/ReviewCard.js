import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styleing from "./ReviewCard.module.css";
function ReviewCard(props) {
  let componentss = [];
  const ChangeLikedState = (e) => {
    e.currentTarget.isclicked = !e.currentTarget.isclicked;
    if (e.currentTarget.isclicked === true) {
      e.target.style.color = "white";
      e.currentTarget.style.backgroundColor = "black";
    } else {
      e.target.style.color = "black";
      e.currentTarget.style.backgroundColor = "white";
    }
  };
  function generateData(x) {
    componentss = [];
    for (let i = 0; i < x; i++) {
      componentss.push(
        <span className={"fa fa-star" + " " + styleing.StarsColor}></span>
      );
    }
  }
  function getrate(x) {
    if (x === "Five Star") {
      return 5;
    } else if (x === "Four Star") {
      return 4;
    } else if (x === "Three Star") {
      return 3;
    }
  }
  return (
    <div style={{ marginTop: "20px" }}>
      <Card className={styleing.CardStyle}>
        <ListGroup variant="flush">
          {props.mydata.map((data, idx) => {
            let flagg = props.reviewrating === "All ratings";
            if (flagg || getrate(props.reviewrating) == data.PersonRating) {
              generateData(data.NumberOfStars);
              return (
                <div key={idx + 777}>
                  <ListGroup.Item>
                    <div style={{ display: "flex" }}>
                      <div className={styleing.PersonAvatarDiv}>
                        <div className={styleing.PersonAvatar}>
                          {data.PersonName[0]}
                        </div>
                      </div>
                      <div>
                        <h4>{data.PersonName}</h4>
                        <div>{componentss}</div>
                        <p>{data.PersonReview}</p>
                        <div style={{ display: "flex" }}>
                          <button
                            className={styleing.LikeButton}
                            onClick={ChangeLikedState}
                            isclicked={false}
                          >
                            <span className="material-symbols-outlined">
                              thumb_up
                            </span>
                          </button>
                          <button
                            className={styleing.LikeButton}
                            onClick={ChangeLikedState}
                          >
                            <span className="material-symbols-outlined">
                              thumb_down
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </ListGroup.Item>
                </div>
              );
            }
          })}
        </ListGroup>
      </Card>
    </div>
  );
}

export default ReviewCard;

import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styleing from "./ReviewCard.module.css";
function ReviewCard(props) {
  let componentss = [];
  const ChangeLikedState = (e) => {
    e.target.style.color = "white";
    e.target.style.backgroundColor = "black";
    e.currentTarget.style.backgroundColor = "black";
  };
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
      <Card style={{ width: "40rem" }}>
        <ListGroup variant="flush">
          {props.mydata.map((data) => {
            let flagg = props.reviewrating === "All ratings";
            if (flagg || getrate(props.reviewrating) == data.PersonRating) {
              componentss = [];
              for (let i = 0; i < data.NumberOfStars; i++) {
                componentss.push(
                  <span
                    className={"fa fa-star" + " " + styleing.StarsColor}
                  ></span>
                );
              }
              return (
                <>
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
                          >
                            <span class="material-symbols-outlined">
                              thumb_up
                            </span>
                          </button>
                          <button
                            className={styleing.LikeButton}
                            onClick={ChangeLikedState}
                          >
                            <span class="material-symbols-outlined">
                              thumb_down
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </ListGroup.Item>
                </>
              );
            }
          })}
        </ListGroup>
      </Card>
    </div>
  );
}

export default ReviewCard;

import React, { useState } from "react";
import styleing from "./ReviewsSection.module.css";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
function ReviewsSection() {
  const [TypeOfRating, SetRating] = useState("All ratings");
  const handleSelect = (e) => {
    SetRating(e);
    console.log(e);
  };
  return (
    <div className={styleing.ReviewDiv}>
      <h3>Reviews</h3>
      <div style={{ display: "flex" }}>
        <form style={{ width: "44%" }}>
          <input
            placeholder={"search reviews"}
            className={styleing.SearchInput}
          ></input>
          <button className={styleing.SearchButton}>
            <span
              style={{ color: "white", backgroundColor: "black" }}
              class="material-symbols-outlined"
            >
              search
            </span>
          </button>
        </form>
        <div>
          <DropdownButton
            alignRight
            title={TypeOfRating}
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
            bsPrefix="bg-white btn-md w-50 h-100"
            style={{ marginTop: "3px", height: "40px", width: "350px" }}
          >
            <Dropdown.Item eventKey="All ratings">All ratings</Dropdown.Item>
            <Dropdown.Item eventKey="Five Star">Five Star</Dropdown.Item>
            <Dropdown.Item eventKey="Four Star">Four Star</Dropdown.Item>
            <Dropdown.Item eventKey="Three Star">Three Star</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ReviewsSection;

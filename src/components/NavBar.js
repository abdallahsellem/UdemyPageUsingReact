import React, { useState } from "react";
import styleing from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
function NavBar(props) {
  const navigate = useNavigate();
  const changeinput = (e) => {
    navigate("/");
    props.myfunc(e.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <nav className={styleing.NavBar}>
        <div className={styleing.IconHeaderSm}>
          <li className={styleing.icon1}>
            <span className="material-symbols-outlined"> menu</span>
          </li>
          <li className={styleing.BigHeader}>
            <Link style={{ color: " black", textDecoration: "none" }} to="/">
              <h1 style={{ color: " black", textDecoration: "none" }}>Udemy</h1>
            </Link>
          </li>
        </div>
        <li className={styleing.name2 + " " + styleing.BigScreen}>
          <a>Catogaries</a>
        </li>
        <li className={styleing.SearchBar + " " + styleing.SchBar}>
          <form className={styleing.form1}>
            <section>
              <input
                type="text"
                placeholder="search for anything"
                name="search"
                className={styleing.InputOfSearch}
                id="Input_ID"
                onChange={changeinput}
              />
              <span
                className={"material-symbols-outlined" + " " + styleing.icon2}
                style={{
                  margin: " 5px",
                  position: "absolute",
                  top: "19px",
                  padding: "0",
                }}
              >
                search
              </span>
            </section>
          </form>
        </li>
        <li className={styleing.BigScreen}>
          <a>Udemy busnises</a>
        </li>
        <li className={styleing.BigScreen}>
          <a>Tech in Udemy</a>
        </li>
        <li className={styleing.CartIcon}>
          <span className="material-symbols-outlined"> shopping_cart </span>
        </li>
        <li className={styleing.login + " " + styleing.BigScreen}>
          <a>login</a>
        </li>
        <li className={styleing.signup + " " + styleing.BigScreen}>
          <a>sgin up</a>
        </li>
        <li className={styleing.EarthIcon}>
          <div className={styleing.EarthIcon_Div}>
            <span className="material-symbols-outlined"> public </span>
          </div>
        </li>
      </nav>
    </div>
  );
}

export default NavBar;

import React from "react";
import styleing from "./HeaderOfHomePage.module.css";
function HeaderOfHomePage() {
  return (
    <div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
        ></img>
        <div className={styleing.TitleOnImge}>
          <h2>Learning that gets you</h2>
          <span>
            Skills for your present (and your future). Get started with us.
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderOfHomePage;

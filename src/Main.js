import React from "react";
import './Main.css'
import img1 from "./Image/illustration-hero.svg";
import img2 from "./Image/pattern-background-desktop.svg";
import img3 from "./Image/pattern-background-mobile.svg";
const Main = () => {
  return (
    <div>
      {" "}
      <img src={img1} alt="" className="image" />
    </div>
  );
};

export default Main;

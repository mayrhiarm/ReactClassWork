import React from "react";
import "./Navbar";
import img from "./Image/icon-music.svg";

const Navbar = () => {
  return (
    <div className="got">
      <h1 className="see">Order Summary</h1>

      <p className="free">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="first">
        <img src={img} alt="" />
        <div className="second">
          <h3>Annual Plan</h3> <p>$59.99/year</p>
        </div>
        <a className="name" href="">
          change
        </a>
      </div>
      <button className="btn">Proceed to Payment</button>
      <p className="cancel">Cancel Order</p>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Main.css";
var p = process.env.PUBLIC_URL;
export const Main = () => {
  return (
    <div>
      <div className="container-xxl rectangle1">
        <span className="data">
          <p>
            Support your favourite creator by sharing their #TweetsFromHome wall
            with your loved ones and grow their community.
          </p>
          <form
            style={{ margin: "10px", borderWidth: "0 0 2px 0" }}
            className="sform"
          >
            <button type="submit" className="sico">
              <i
                style={{ fontSize: "20px", color: "grey" }}
                className="bi bi-search"
              ></i>
            </button>
            <input
              type="text"
              className=""
              placeholder="Search your favourite creator"
              aria-label="Creator"
            />
          </form>
          <button type="button" className="btn buttonf btn-lg">
            <b>View Tweets from Home</b>
          </button>
        </span>
      </div>
      <div
        style={{
          backgroundImage: "url(/Rectangle 112.png})",
        }}
        className="container-xxl rectangle2"
      >
        <span className="data">
          <p>CREATORS SHAPE CULTURE.</p>
          <br />
          <br />
          <br />
          <br />
          <div>
            <span style={{ backgroundColor: "#D1F7C4" }}>#everydays</span>
            <span style={{ backgroundColor: "#ffdce5" }}>#HiArmy</span>
            <br />
            <span style={{ backgroundColor: "#72DDC3" }}>#BTS</span>
            <span style={{ backgroundColor: "#FEE2D5" }}>#teamtrees</span>
            <br />
            <span style={{ backgroundColor: "#9CC7FF" }}>#botarmy</span>
          </div>
        </span>
      </div>
      <div className="container-xxl text1">
        <span className="t1">Creators </span>
        <span className="t2">are Powerful</span>
      </div>
    </div>
  );
};
export default Main;

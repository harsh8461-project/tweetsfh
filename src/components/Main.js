import React from "react";
var p = process.env.PUBLIC_URL;
export const Main = () => {
  return (
    <div>
      <div className="rectangle1">
      <div>
            <img alt="tablet component" className="image1" src={p + "/Component 27.png"} />
        </div>
        <span className="data">
          <p className="cm">
            Support your favourite creator by sharing their #TweetsFromHome wall
            with your loved ones and grow their community.
          </p>
          <span>
          <form id="comp" className="sform">
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
          </span>
          <span>
          <button id="s1" type="button" className="btn buttonf btn-lg">
            <b className="cm">View Tweets from Home</b>
            <b className="mc">Login with Twitter</b>
          </button>
          </span>
        </span>
      </div>
      <div className="rectangle2">
          <div className="text1">
            <span className="t1">Creators </span>
            <span className="t2">are Powerful</span>
          </div>
            <div className="row">
              <div id="one" className="col-4">
                <img alt="profile component" className="image2" src={p + "/Component 14.png"} />
              </div >
              <span id="two" className="data col">
                <div>
                <p>CREATORS SHAPE CULTURE.</p>
                <p className="mc">2 in 3 twitter users agree that creators change and shape culture </p>
                </div>
                <br className="cm"/>
                <br className="cm" />
                <br className="cm" />
                <br className="cm" />
                <div className="colortags">
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
      </div>
    </div>
  );
};
export default Main;

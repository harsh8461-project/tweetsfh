import React from 'react'
import "./Main.css";
var p = process.env.PUBLIC_URL;

export const header = () => {
    return (
        <div>
            <div className="header">
        <img
          src={p + "/Group 2.svg"}
          alt="Tweets from Home"
          height="100px"
          width="200px"
        />
        <button type="button" className="shadow-lg btn buttonh buttonh-l btn-lg ">
          <b>Home</b>
        </button>
        <button type="button" className="btn buttonh buttonh-t btn-lg">
          <b>Sign In</b>
        </button>
      </div>
        </div>
    )
}
export default header;
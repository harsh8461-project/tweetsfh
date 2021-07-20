import React from 'react'
import {
    Link
  } from "react-router-dom";
var p = process.env.PUBLIC_URL;
export const footer = () => {
    return (
        <div className="ft1">
            <div  className="container-xxl">
                <p className="f1">With #TweetsFromHome, express your love<br/>for your favourite creator.</p>
                <p className="f2"> 
                    Choose the top tweets that you absolutely admire to create your version of their #TweetsFromHome wall and simply share on Twitter. 
                </p>
                <form className="sform">
                        <button type="submit" className="sico"><i style={{fontSize: "20px", color: "grey"}} className="bi bi-search"></i></button>
                        <input type="text" className="" placeholder="Search your favourite creator" aria-label="Creator"/>
                </form>
                <button type="button" className="btn buttonf btn-lg"><b>Sign In to Continue</b></button>
            </div>
            <div style={{marginTop:"15vh"}} className="container-xxl">
                <div className="row">
                <div className="col">
                    <span className="f-left">
                        <img src={p + "/icons8-twitter 3.svg"} 
                            alt="Tweets from Home"
                            height="50px"
                            width="50px"/>
                    </span>
                    <span className="f-left">
                        <img  src={p + "/My Twitter ewind.svg"} 
                            alt="Tweets from Home"
                            height="30px"
                            width="150px"/><br />
                        <img  src={p + "/breadcrum.svg"} 
                            alt="Tweets from Home"
                            height="20px"
                            width="150px"/>
                    </span>
                    <br/>
                    <span style={{clear:"left", paddingLeft:"10%"}} className="f-left">
                        <Link to=""> <img  src={p + "/web.svg"} 
                            alt="mailme"/></Link>
                            <Link to=""> <img  src={p + "/icons8-twitter 3.svg"} 
                            alt="mailme"/></Link>
                            <Link to=""> <img  src={p + "/insta.svg"} 
                            alt="mailme"/></Link>
                            <Link to=""> <img  src={p + "/mail-icon.png"} 
                            alt="mailme"/></Link>
                    </span>
                    </div>
                    <div className="col">
                        <Link to="" className="colf2">Get early access for Bread<i className="bi bi-arrow-right"></i></Link>
                    </div>
                    <div className="col">
                    <Link to="" className="colf3 f-right" ><i className="bi bi-file-earmark"></i>Privacy Policy</Link><br />
                    <Link to="" className="colf3 f-right"><i className="bi bi-file-earmark"></i>Terms of Use</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default footer;
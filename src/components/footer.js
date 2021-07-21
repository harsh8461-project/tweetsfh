import React from 'react'
import {
    Link
  } from "react-router-dom";
var p = process.env.PUBLIC_URL;
export const footer = () => {
    return (
        <div className="ft1">
            <div>
                <p className="ftext1">With #TweetsFromHome, express your love<br className="cm"/> for your favourite creator.</p>
                <p className="ftext2"> 
                    <b className="cm">Choose the top tweets that you absolutely admire to create your version of their #TweetsFromHome wall and simply share on Twitter. </b>
                    <b className="mc">Choose the top tweets that you absolutely admire to create a wall and simply share on Twitter. </b>
                </p>
                <form className="sform">
                        <button type="submit" className="sico"><i style={{fontSize: "20px", color: "grey"}} className="bi bi-search"></i></button>
                        <input type="text" placeholder="Search your favourite creator" aria-label="Creator"/>
                </form>
                <button type="button" className="btn buttonf btn-lg"><b>Sign In to Continue</b></button>
            </div>
                <hr className="mc" />
            <div id="lowerfooter" >
                <div className="row">
                    <div className="col">
                        <span className="f-left">
                            <img className="footimg1" src={p + "/icons8-twitter 3.svg"} alt="Tweets from Home"/>
                        </span>
                        <span className="f-left">
                            <img className="footimg2" src={p + "/My Twitter ewind.svg"} alt="Tweets from Home"/><br />
                            <img className="footimg3" src={p + "/breadcrum.svg"} alt="Tweets from Home"/>
                        </span>
                        <br/>
                        <span style={{clear:"left", paddingLeft:"10%"}} className="f-left">
                            <Link to=""> <img className="footico" src={p + "/web.svg"} 
                                alt="mailme"/></Link>
                            <Link to=""> <img className="footico" src={p + "/icons8-twitter 3.svg"} 
                            alt="mailme"/></Link>
                            <Link to=""> <img className="footico" src={p + "/insta.svg"} 
                            alt="mailme"/></Link>
                            <Link to=""> <img className="footico" src={p + "/mail-icon.png"} 
                            alt="mailme"/></Link>
                        </span>
                    </div>
                    <div className="cm col">
                        <Link to="" className="colf2">Get early access for Bread<i className="bi bi-arrow-right"></i></Link>
                    </div>
                    <div className="col">
                        <Link to="" className="colf3 f-right" ><i className="bi bi-file-earmark"></i>Privacy Policy</Link><br />
                        <Link to="" className="colf3 f-right"><i className="bi bi-file-earmark"></i>Terms of Use</Link>
                        <Link to="" className="mc colf2">Get early access for Bread</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default footer;
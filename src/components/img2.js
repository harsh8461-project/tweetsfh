import React from 'react'
var p = process.env.PUBLIC_URL;
export const img2 = () => {
    return (
        <div>
            <div className="container-xxl">
                <img alt="profile component" className="c2" src={p + "/Component 14.png"} />
            </div>
        </div>
    )
}
export default img2;
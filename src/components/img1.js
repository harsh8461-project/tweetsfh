import React from 'react'
var p = process.env.PUBLIC_URL;
export const img1 = () => {
    return (
        <div className="container-xxl">
            <img alt="tablet component" className="c1" src={p + "/Component 27.png"} />
        </div>
    )
}
export default img1;
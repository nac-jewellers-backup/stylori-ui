import React from "react";
const SVG = ({ width, height, className }) => (
    <svg
        // fill={fill} 
        width={width}
        height={height}
        viewBox={"0 0 83 83"}
        x="0px" y="0px"
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g>
            <g>
            <path d="M81,36.166H2c-1.104,0-2,0.896-2,2v6.668c0,1.104,0.896,2,2,2h79c1.104,0,2-0.896,2-2v-6.668
		C83,37.062,82.104,36.166,81,36.166z"/>
            </g> </g>
    </svg>
);
export default SVG;

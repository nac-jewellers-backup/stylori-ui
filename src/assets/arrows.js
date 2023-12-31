import React from "react";
const SVG = ({width, height, className}) => (
  <svg
    // fill={fill} 
    width={width}
    height={height} 
    viewBox={"0 0 490.661 490.661"}
    x="0px" y="0px"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
    <path d="M453.352,236.091L48.019,1.424c-3.285-1.899-7.36-1.899-10.688,0c-3.285,1.899-5.333,5.419-5.333,9.237v469.333
			c0,3.819,2.048,7.339,5.333,9.237c1.643,0.939,3.499,1.429,5.333,1.429c1.856,0,3.691-0.469,5.355-1.429l405.333-234.667
			c3.285-1.92,5.312-5.44,5.312-9.237S456.637,237.989,453.352,236.091z"/>
            </g>
	 </svg>
);
export default SVG;
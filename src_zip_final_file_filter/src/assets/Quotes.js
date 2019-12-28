import React from "react";
const SVG = ({width, height, className}) => (
  <svg
    // fill={fill} 
    width={width}
    height={height} 
    viewBox={"0 0 409.294 409.294"}
    x="0px" y="0px"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
    <path d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z"/><path d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z"/>  </g>
  </svg>
);
export default SVG;

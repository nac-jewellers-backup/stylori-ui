import React from "react";
import "./screens.css";

export const Loading = (
  <div>
    {!window.location.pathname.includes("silver") &&
      !window.location.pathname.includes("styloriSilver") && (
        <div className="overall-loader">
          <div id="loading"></div>
        </div>
      )}
    {window.location.pathname.includes("silver") &&
      window.location.pathname.includes("styloriSilver") && (
        <div className="overall-loader1">
          <div id="sillverloading"></div>
        </div>
      )}
  </div>
);
export default Loading;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const TwitterContainer = () => {
  const location = useLocation();
 
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div>
      {location.pathname === "/" ? (
        <>
          <section className="twitterContainer">
            <div className="twitter-embed">
              <a
                className="twitter-timeline"
                data-height="420px"
                href="https://twitter.com/StyloriLove?ref_src=twsrc%5Etfw"
              >
                Tweets by StyloriLove
              </a>
            </div>
          </section>{" "}
        </>
      ) : (
        <>
          {" "}
          <section className="twitterContainer">
            <div className="twitter-embed">
              <a
                className="twitter-timeline"
                data-height="420px"
                href="https://twitter.com/StyloriSilver?ref_src=twsrc%5Etfw"
              >
                Tweets by StyloriSilver
              </a>
            </div>
          </section>{" "}
        </>
      )}
    </div>
  );
};

export default TwitterContainer;

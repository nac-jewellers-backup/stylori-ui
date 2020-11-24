import React, { useEffect } from "react";

const TwitterContainer = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return (
        <section className="twitterContainer">
            <div className="twitter-embed">
                <a class="twitter-timeline"
                    data-height="420px"
                    href="https://twitter.com/StyloriSilver?ref_src=twsrc%5Etfw">Tweets by StyloriSilver</a>
            </div>
        </section>
    );
};

export default TwitterContainer;
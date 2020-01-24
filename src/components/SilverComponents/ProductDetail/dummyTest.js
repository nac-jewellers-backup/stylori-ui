import React from 'react';
import { Typography } from '@material-ui/core';
import MetaTags from 'react-meta-tags';


export default function DummyTest() {
    return(
    <div>
    <div>
          <MetaTags>
            {/* <title>{this.props.data[0].title}</title> */}
            {/* <meta name="description" content={this.props.data[0].dis} />
            <meta name="keywords" content={this.props.data[0].productsPendants[0].name} /> */}

            <meta property="og:title" id="fb-title" content="title" />
            <meta property="og:description" content="description" />
            <meta property="og:type" content="product" />
            <meta property="og:url" id="fb-product-url" content={window.location.href} />
            <meta property="og:image" id="fb_imageUrl" content="https://assets-cdn.stylori.com/474x474/images/product/SE0735/SE0735-1Y.jpg" />

            {/* <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@StyloriLove" />
            <meta name="twitter:title" id="twitter-title" content={this.props.data[0].title} />
            <meta name="twitter:description" content={this.props.data[0].dis} />
            <meta name="twitter:image" id="twitter_imageUrl" content={this.props.data[0].fadeImages} /> */}
          </MetaTags>

        </div>
        <div>
            <Typography>hi all.</Typography>
        </div>
<div className="product-share">
<h5>Share the Jewellery</h5>
<a class="facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
    <img class="lazyload" src="https://assets.stylori.com/images/static/newsprite/iconmonstr-facebook-5-share.svg" />
</a>&nbsp;
<a class="twitter" target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
    <img class="lazyload" src="https://assets.stylori.com/images/static/newsprite/iconmonstr-twitter-5-share.svg" />
</a>&nbsp;
{/* <a class="google" target="_blank">
    <img class="lazyload" src="https://assets.stylori.com/images/static/newsprite/iconmonstr-google-plus-5-share.svg" />
</a> */}
</div>
</div>
)
}
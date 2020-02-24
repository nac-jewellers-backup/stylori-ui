import React from "react"
import MetaTags from 'react-meta-tags';
export const TwitterShare = (props) =>{
    console.log("props------- TWITTER", props)
    return (
        <MetaTags>
       <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@StyloriLove" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.data[0].title} />
    <meta property="og:description" content={props.data[0].dis} />
    <meta property="og:image" content='https://assets.stylori.com/product/SP0181/600X600/SP0181-1W.webp'/>
    
 
    </MetaTags>
    )
} 
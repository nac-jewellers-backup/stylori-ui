import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import StyloriNews from 'components/Feedes/StyloriNews';
import { storyData } from './storyTemplateData';
import TweeterEmbedded from './tweeterEmbedded'

export default function SocialLinkFrame() {
    return (
        <Grid container >
            <Grid container>
                <Grid item md={12} style={{ marginTop: "10px" }}>
                    <Typography style={{ color: "#394578" }} component="h4">Instagram</Typography>
                </Grid>
                <Grid item container style={{ marginTop: "5px", border: "1px solid #ccc" }}>
                    <iframe
                        src="https://assets-cdn.stylori.com/assets/7b4c4135f67d8ee467c80ebc286cd3c3bad477ad.html"
                        width="100%"
                        height="430px"
                        frameBorder={0}>
                    </iframe>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} style={{ marginTop: "30px" }}>
                    <Typography style={{ color: "#394578" }} component="h4">Facebook</Typography>
                </Grid>
                <Grid item container style={{ marginTop: "5px" }} >
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstylori&tabs=timeline&width=340&height=500&small_header=true&hide_cta=false&adapt_container_width=false&hide_cover=true&show_facepile=false&appId/embed"
                        width="100%"
                        height="350px"
                        frameBorder={0}
                    ></iframe>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} style={{ marginTop: "30px" }}>
                    <Typography style={{ color: "#394578" }} component="h4">Stylori News</Typography>
                </Grid>
                <Grid item style={{ width: "343px", border: "1px solid #ccc", marginTop: "5px" }}>
                    <StyloriNews fadeImages={storyData.NewsFeeds.carousel.data} dataCarousel={storyData.NewsFeeds.carousel.setting} />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} style={{ marginTop: "30px" }}>
                    <Typography style={{ color: "#394578" }} component="h4">Tweet</Typography>
                </Grid>
                <Grid item style={{ width: "343px", border: "1px solid #ccc", marginTop: "5px" }}>
                    <TweeterEmbedded />
                
                </Grid>
            </Grid>
        </Grid>
    )
}
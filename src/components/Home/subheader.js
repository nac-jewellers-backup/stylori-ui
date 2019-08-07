import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { HomeSlider } from './carouselData'
import './home.css'
// const tile1 = [
//     {
//         img1: 'https://assets-cdn.stylori.com/276x276/images/homepage/276X276 PIXELS MANGO COLLECTIONS TILE-01 (1).jpg',
//         title1: 'Image',
//         author1: 'author',
//     },
// ];
// const tileData = [
//     {
//         img: 'https://assets-cdn.stylori.com/552x276/images/homepage/Stylori-ring-tile.jpg',
//         title: 'Image',
//         author: 'author',
//         cols: 2,
//     },

//     {
//         img: 'https://assets-cdn.stylori.com/276x276/images/homepage/276X276 PIXELS MANGO COLLECTIONS TILE-01 (1).jpg',
//         title: 'Image',
//         author: 'author',

//     },
//     {
//         img: 'https://assets-cdn.stylori.com/552x276/images/homepage/Stylori-ring-tile.jpg',
//         title: 'Image',
//         author: 'author',
//     },

//     {
//         img: 'https://assets-cdn.stylori.com/276x276/images/homepage/276X276 PIXELS MANGO COLLECTIONS TILE-01 (1).jpg',
//         title: 'Image',
//         author: 'author',
//         cols: 2,
//     },
// ];
// const photos = [
//     {
//         src: 'https://assets-cdn.stylori.com/552x276/images/homepage/Stylori-ring-tile.jpg',
//         width: 7,
//         height: 3
//     },
//     {
//         src: 'https://assets-cdn.stylori.com/276x276/images/homepage/276X276 PIXELS MANGO COLLECTIONS TILE-01 (1).jpg',
//         width: 1,
//         height: 1
//     },
//     {
//         src: 'https://assets-cdn.stylori.com/276x567/images/homepage/blush 3.jpg',
//         width: 4,
//         height: 10
//     },
//     {
//         src: 'https://assets-cdn.stylori.com/276x276/images/homepage/-11.jpg',
//         width: 1,
//         height: 1
//     },
//     {
//         src: 'https://assets-cdn.stylori.com/276x276/images/homepage/276X276 PIXELS MANGO COLLECTIONS TILE-01 (1).jpg',
//         width: 7,
//         height: 3
//     },

// ];

const Subheader = () => {
    return (
        <div >
            <div >
                <AppBar position="static" className="Subheader">
                    <Toolbar style={{ marginTop: "10px" }}>
                        <Container maxWidth="lg">
                            <Grid container spacing={12} className='SubheaderTopDiv'>
                                {HomeSlider.map(row =>
                                    <Grid spacing={4} key={row.name}>
                                        <img height="33px"
                                            src={row.icon} alt="" />
                                        <p style={{ marginTop: "-1px" }} className="contents">{row.name}</p>
                                    </Grid>
                                )}
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
                {/* <Container >
                <div style={{ marginTop: "25px" }}>
                    <Gallery photos={photos} />
                </div>
            </Container>  */}


                <div style={{ paddingTop: "15px" }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={2} >
                            <Grid container item xs={9}>
                                <Grid container xs={12} spacing={2}>

                                    <Grid item xs={8}>
                                        <img height="100%" width="100%" src='https://assets-cdn.stylori.com/552x276/images/homepage/Stylori-ring-tile.jpg' alt="" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img height="100%" width="100%" src='https://assets-cdn.stylori.com/276x276/images/homepage/276X276 PIXELS MANGO COLLECTIONS TILE-01 (1).jpg' alt="" />
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} spacing={2} style={{ marginTop: "6px" }}>

                                    <Grid item xs={4}>
                                        <img height="100%" width="100%" src='https://assets-cdn.stylori.com/276x276/images/homepage/-11.jpg' alt="" />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <img height="100%" width="100%" src='https://assets-cdn.stylori.com/552x276/images/homepage/Stylori_ Daisy Days.jpg' alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} spacing={2} style={{ height: "650px" }}>
                                <img height="100%" width="100%" src='https://assets-cdn.stylori.com/276x567/images/homepage/blush 3.jpg' alt="" /></Grid>
                        </Grid>
                    </Container>
                </div>
                {/* <Grid container spacing={2} >
                        <Grid item xs={8}>
                            <GridList  cols={3} >
                                {tileData.map(tile => (
                                    <GridListTile key={tile.img} cols={tile.cols || 1} >
                                        <img src={tile.img}  style={{width:"100%",height:"100%"}}/>
                                    </GridListTile>
                                ))}

                            </GridList>
                        </Grid>
                        <Grid item xs={4}>
                            <GridList >
                                {tile1.map(tile => (
                                    <GridListTile key={tile.img1} cols={tile.cols || 1} style={{width:"100%",height:"100%"}}>
                                        <img src={tile.img1}  style={{width:"100%",height:"100%"}} />
                                    </GridListTile>
                                ))}

                            </GridList>
                        </Grid>
                    </Grid> */}
            </div>

        </div>
    )
}
export default Subheader;
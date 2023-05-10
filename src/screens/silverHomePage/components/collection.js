import React from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { menuListHeaderNew } from 'mappers/dummydata/headerdataStyloriSilver';
import { HomePageStyles } from '../style';
import { Link } from 'react-router-dom';



export const CollectionNav = (props) => {
    const classes = HomePageStyles(props)


    return (
        <div>
            <Box style={{ display: "flex",backgroundColor:"#fff" }}>
                {
                    props?.menu?.menu && <Box className={classes.navBox}>
                        <Grid container>
                            <Grid item xs={10} className={classes.navList}
                            // onMouseLeave={SecondSubNavHoverClose}
                            >
                                <Grid container justifyContent='flex-start'>
                                    {
                                        menuListHeaderNew?.[props?.menu?.index - 1]?.[props?.menu?.menu]?.map((e, i) => {
                                            return (

                                                <Box className={classes.navListItemCollection}>
                                                    <a href={e?.url} style={{ textDecoration: "none" }}>
                                                        <img width="75px" height="75px" src={e?.img}></img>
                                                        <Typography className={classes.subImgItems}>
                                                            {e?.title}</Typography>
                                                    </a>
                                                </Box>
                                            )
                                        })
                                    }
                                </Grid>

                            </Grid>
                            <Grid item xs={2}>
                                {menuListHeaderNew?.[props?.menu?.index - 1]?.bigImage ?
                                    <Box>
                                        <img className={classes.bigImage}
                                            src={
                                                menuListHeaderNew?.[props?.menu?.index - 1]?.bigImage}></img>
                                    </Box> : null}
                            </Grid>
                        </Grid>
                    </Box>
                }
            </Box >
        </div >
    )
}
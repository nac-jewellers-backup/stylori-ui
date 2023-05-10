import React from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    ListItem,
    ListItemText,
    List
} from "@material-ui/core";
import { menuListHeaderNew } from 'mappers/dummydata/headerdataStyloriSilver';
import { HomePageStyles } from '../style';
import { Link } from 'react-router-dom';



export const Jewellery = (props) => {
    const classes = HomePageStyles(props)

    return (
        <div style={{backgroundColor:"#fff",width:"100%"}}>
            <Box style={{ display: "flex" }}>
                {
                    props?.menu?.menu && <Box className={classes.navBox}>
                        <List style={{ height: "100%" }}>
                            <ListItem className={classes.navList}
                            // onMouseLeave={SecondSubNavHoverClose}
                            >
                                {
                                    menuListHeaderNew?.[props?.menu?.index - 1]?.[props?.menu?.menu]?.map((e, i) => {

                                        return (
                                            <ListItemText className={classes.navListItem}>
                                                <a href={e?.url}
                                                    onMouseOver={() =>
                                                        props?.SecondSubNavHover(e?.value, i)}
                                                >{e?.title}</a>
                                            </ListItemText>
                                        )
                                    })
                                }

                            </ListItem>
                        </List>
                    </Box>
                }
                {console.log(menuListHeaderNew?.[props?.menu?.index - 1]?.[props?.menu?.menu]?.[props?.menu?.childindex]?.bigImage, "qwerty")}
                <Grid container className={classes.gridNavItem} >
                    <Grid item xs={9}>
                        <Grid container>
                            {
                                menuListHeaderNew?.[props?.menu?.index - 1]?.[props?.menu?.menu]?.[props?.menu?.childindex]?.[props?.menu?.childmenu]?.map(e => {
                                    return (
                                        <Grid item xs={4} className={classes.subNavBox}>
                                            <a href={e.url} style={{ textDecoration: "none" }}>
                                                <img width="85px" height="85px" src={e?.img}></img>
                                                <Typography className={classes.subImgItems}>
                                                    {e?.content}</Typography>
                                            </a>

                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        {menuListHeaderNew?.[props?.menu?.index - 1]?.[props?.menu?.menu]?.[props?.menu?.childindex]?.bigImage ?
                            <Box>
                                <img className={classes.bigImage}
                                    src={
                                        menuListHeaderNew?.[props?.menu?.index - 1]?.[props?.menu?.menu]?.[props?.menu?.childindex]?.bigImage}></img>
                            </Box> : null}
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}
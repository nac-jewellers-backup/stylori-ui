import React from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    ListItem,
    ListItemText
} from "@material-ui/core";
import { menuListHeaderNew } from 'mappers/dummydata/headerdataStyloriSilver';
import { HomePageStyles } from '../style';



export const StyleNav = (props) => {
    const classes = HomePageStyles(props)

    return (
        <div>
            <Box style={{ display: "flex",backgroundColor:"#fff" }}>
                {
                    props?.menu?.menu && <Box className={classes.navBox}>
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
                    </Box>
                }
                {/* {console.log(menuListHeaderNew?.[props?.menu?.index]?.[props?.menu?.menu]?.[props?.menu?.childindex]?.[props?.menu?.childmenu], "qwerty")}
                <Grid container className={classes.gridNavItem}>
                    <Grid item xs={8}>
                        <Grid container>
                            {
                                menuListHeaderNew?.[props?.menu?.index - 1]?.[props?.menu?.menu]?.[props?.menu?.childindex]?.[props?.menu?.childmenu]?.map(e => {
                                    return (
                                        <Grid item xs={4} >
                                            <img width="105px" height="105px" src={e?.img}></img>
                                            <Typography className={classes.subImgItems}>
                                                {e?.content}</Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid> */}
            </Box>
        </div>
    )
}
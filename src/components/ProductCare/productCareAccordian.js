import React from 'react';
import { Grid } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import '../faqs/faqs.css'


import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Collapse from '@material-ui/core/Collapse';
import Plus from '../../../src/assets/plus';
import Minus from '../../../src/assets/minus';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        borderBottom: "1px solid #e8e8e8 "
    },
    titleColor: {
        color: '#ed1165',
        fontWeight: 500,
        marginTop: "3%",
        fontSize: "22px",
        fontFamily: "Roboto",
        paddingTop: "10px",

    },
    titleColorsmall: {
        color: '#ed1165',
        fontWeight: 500,
        marginTop: "3%",
        fontSize: "16px",
        fontFamily: "Roboto",
        paddingTop: "10px",

    },
    details: {
        color: "#394578",
        borderTop: "0px",
        fontWeight: 600,
        fontSize: "14px",
        padding: "20px 0px"
    },
    icon: {
        height: "10px",
        width: "10px",
        marginRight: "3px",
    },
    listeditems: {
        '&:hover': {
            backgroundColor: "#fff !important"
        }
    }

}));

export default function ProductCareAccordian(props) {
    const value = props.value;

    const checkerOpen = () => {

        if (props.accordian === "Plus") {
            return <Minus className={classes.icon} />
        }

        else if (props.accordian === "Arrows") {
            return <ExpandLess />
        }
        else {
            return ""
        }
    }
    const checkerClose = () => {

        if (props.accordian === "Plus") {
            return <Plus className={classes.icon} />
        }

        else if (props.accordian === "Arrows") {
            return <ExpandMore />
        }
        else {
            return ""
        }
    }
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (

        <Grid className={classes.root}  >
            <List style={{ padding: "0px" }} >
                <ListItem style={{ padding: "0px" }} autoFocus={false} className={classes.listeditems} button onClick={handleClick}>
                    <Typography style={{ width: "100%" }} className={classes.details} >{value.Questions}</Typography>
                    <List style={{ float: "end" }}> {open ? checkerOpen() : checkerClose()}</List>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem style={{ paddingLeft: "0px", paddingBottom: "0px" }} button className={classes.listeditems}>
                            <List style={{ padding: "0px" }}>
                                <Grid container style={{ display: "inline-block !important" }} className={classes.listeditems}>

                                    {value.SubTitle &&
                                        <Typography style={{ fontWeight: 700, color: "#394578", fontSize: "12px", paddingBottom: "8px", width: "100%" }}>
                                            {value.SubTitle}
                                        </Typography>
                                    }


                                    <Grid item>
                                        {value.para &&
                                            <Typography style={{ width: "100%", fontSize: "13px", color: "#666" }}>{value.para}</Typography>
                                        }
                                    </Grid>
                                    <Grid item>
                                        <Grid>
                                            <img style={{ width: "100%" }} class="imgPadding" src={value.img} />
                                        </Grid>

                                    </Grid>
                                    <Grid container>
                                        <Grid item class="fifty">
                                            {value.basicTitle &&
                                                <Typography style={{ fontSize: "12px", color: "#394578", paddingBottom: "8px", fontWeight: 700 }}>
                                                    {value.basicTitle}
                                                </Typography>
                                            }
                                            <Typography dangerouslySetInnerHTML={{ __html: value.Answers }} style={{ fontSize: "13px", color: "#666", paddingBottom: "10px", }}>
                                                {/* {value.Answers} */}
                                            </Typography>
                                        </Grid>


                                        <Grid item class="fiftyImg">
                                            {value.rightContent &&
                                                <Typography dangerouslySetInnerHTML={{ __html: value.rightContent }} class="rightContent" >
                                                    {/* {value.rightContent} */}
                                                </Typography>
                                            }
                                            {value.rightImg &&
                                                <Typography>
                                                    <img class="rightImg" style={{ justifyContent: `${value.align}`, display: "flex" }} src={value.rightImg} />
                                                </Typography>
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </List>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Grid>

    )
}

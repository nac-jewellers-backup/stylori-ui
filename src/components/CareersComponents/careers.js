import React from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';
import { TextField, Grid, Typography, Button, Collapse } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: "20px 15px 20px 15px"
    },
    contact_us: {
        fontSize: "21px",
        color: "#ed1165",
        fontWeight: 600,
        marginBottom: "10px"
    },
    Subtitle: {
        color: "#394578",
        fontSize: "17px",
        padding: "14px ",
        cursor: "pointer",
        '&:hover': {
            color: "#ed1165"
        }
        // fontWeight: 600
    },
    Subtitle2: {
        color: "#394578",
        fontSize: "13px",
        fontWeight: 600,
        padding: "14px",
    },
    Subtitle3: {
        color: "#394578",
        fontSize: "17px",
        margin: "30px 0px 10px 0px",
        fontWeight: 600
    },
    widthFull: {
        width: "100%"
    },
    textFeild: {
        margin: "15px 0px 20px 0px !important"
    },
    smallSizeTypo: {
        color: "#666",
        fontSize: "14px",
        lineHeight: "19px"
    },
    maginBottomOnly: {
        marginBottom: "15px"
    }, Button: {
        backgroundColor: "#ed1165",
        width: "100%",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#ed1165",
        }

    },
    dottedvalue: {
        borderTop: "1px dashed #CCC",
        margin: "40px 0px 10px 0px",
        width: "100%",
    },
    smallSizeTypoblue: {
        fontSize: "13px",
        color: "#394578",
        lineHeight: "20px"
    },
    midconatiner: {
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            justifyContent: "flex-start"
        }
    }
}));

export default function CustomizedInputs() {
    const [open, setOpen] = React.useState(true);

    const handleChanges = () => {
        setOpen(!open);
    };
    const classes = useStyles();



    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.widthFull}>
                <Typography variant="h2" className={classes.contact_us}>
                    Careers
             </Typography>
                <p class={classes.smallSizeTypo}>
                    We’re young, energetic and passionate. Headquartered in Chennai, working at Stylori is all about working together as a team and as an individual. It is about wanting to create something new, exciting and something big.
				<br />
                    <br />
                    To this end, we are looking for individuals who are dynamic, self driven, and committed; who want to be a part of something huge and insanely awesome. We are progressing towards a new world order, one which requires constant innovation and creativity to stay ahead of the game and where time is the most precious commodity. We have seized this chance and dived right in. So work in Stylori will present you with immense opportunities, crazy challenges and an amazing growth potential – all in all a stimulating and rewarding career opportunity.
                <br />
                    <br />Come join us and be a part of a new revolution in jewellery business!
			</p>
                <Grid container style={{ paddingTop: "20px" }} justify="center">
                    <Typography variant="h2" className={classes.contact_us}>
                        Open Positions
             </Typography>
                </Grid>
                <Grid container onClick={() => handleChanges()} >
                    <Grid item style={{ backgroundColor: "#fafafa", width: "100%" }}>
                        <Typography variant="h4" className={classes.Subtitle}>
                            Contact us
                    </Typography>
                    </Grid>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Typography variant="h4" className={classes.Subtitle2}>
                            hello@stylori.com
                        </Typography>
                    </Collapse>
                </Grid>
            </Grid>
        </Grid>
    );
}

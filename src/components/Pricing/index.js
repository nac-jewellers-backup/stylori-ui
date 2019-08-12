import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({

    colorMain: {
        color: theme.palette.secondary.main
    },
    h6FontSize: {

        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px',
            fontWeight: 'bold'

        },

    },
    offerPricePadding: {
        paddingLeft: '15px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '8px',

        },
    },
    deletePrice: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
            fontWeight: 'bold'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px',
        },
    },
    youSave: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '11px',
        },
    }
}));



export const Pricing = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Typography
                variant="caption"
                color="textSecondary"
                component="div"
                className={`${props.title != null & props.title !== '' ? '' : 'shine'}`}
                style={{ paddingBottom: "5px", textAlign: "left" }}
            >
                {/* Dazzling Gold Bloom Diamond Pendant */}
                {props.title}
            </Typography>
            {/*  */}
            <Typography style={{ display: "flex", width: '100%' }}>
                <Typography
                    variant="caption"
                    color="textSecondary"
                    className={`${props.price != null & props.price !== '' ? '' : 'shine'} ${classes.deletePrice}`}
                    component="p"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <del>₹&nbsp;{props.price}</del>
                </Typography>
                <Typography

                    variant="h6"
                    component="h6"
                    className={`${props.offerPrice != null & props.offerPrice !== '' ? '' : 'shine'} ${classes.colorMain} ${classes.h6FontSize} ${classes.offerPricePadding} `}

                >
                    ₹&nbsp;{props.offerPrice}
                </Typography>
            </Typography>
            {/*  */}
            <Typography style={{ display: "flex" }}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    className={`${classes.colorMain} ${classes.youSave}`}
                    component="p"

                >
                    You save
</Typography>
                <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                    className={`${props.save != null & props.save !== '' ? '' : 'shine'} ${classes.colorMain} ${classes.offerPricePadding} `}
                >
                    ₹ {props.save}
                </Typography>
            </Typography>
        </div>
    )
}
const styles = theme => ({
    dis: {
        color: theme.palette.text.secondary,
    },
    icon: {
        color: theme.palette.primary.main,
    },
    pricedetails: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            padding: "0"

        },
        [theme.breakpoints.up('lg')]: {
            padding: "0 10px"
        },
    },
    width: {
        [theme.breakpoints.down('xs')]: {
            padding: "0 10px"

        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: "15px",
            paddingLeft: "15px",
        },
    },
    // pricetabs
    pagination: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
            width: "100%"
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: "50px",
            paddingRight: "50px",
            textAlign: "center"
        },
    },
    tabsheadcolor: {
        color: theme.palette.secondary.main,
    },
    tabsRingBckg: {
        background: theme.palette.primary.main,
    },


    normalfonts: {
        color: theme.palette.text.primary,
    },
    normalcolorback: {
        background: theme.palette.text.primary
    },
    fontwhite: {
        color: theme.palette.overallButoon.contrastText
    },
    backgwhite: {
        background: theme.palette.overallButoon.contrastText
    },
    fontgray: {
        color: theme.palette.text.disabled
    },
    // buynow 
    buttons: {
        background: theme.palette.overallButoon.primary,
        color: theme.palette.overallButoon.contrastText
    },
    backgsecondary: {
        background: theme.palette.secondary.main,
    },

});
export default styles;
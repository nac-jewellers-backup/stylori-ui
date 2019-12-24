const styles = theme => ({
    title: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '15px',
            // fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '11px',
        },
    },
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
            padding: "0 10px"
        },
    },
    // pricetabs
    modals: {
        [theme.breakpoints.down('xs')]: {
            background: '#fff !important',
            height: 'auto',
            width: '60%',
            marginTop: '3%',
            marginBottom: '3%',
            marginLeft: '20%',
            outline: 'none !important',
        },
        [theme.breakpoints.up('lg')]: {
            background: '#fff !important',
            height: 'auto',
            width: '60%',
            marginTop: '3%',
            marginBottom: '3%',
            marginLeft: '20%',
            outline: 'none !important',
        },
    },
    pagination: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
            width: "100%"
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: "25px",
            paddingRight: "25px",
            // textAlign: "center"
        },
    },
    tabs_values_font:{
        [theme.breakpoints.down('xs')]: {
            fontSize:"11px !important",
            marginTop:"5px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize:"12px !important",
            marginTop:"5px"
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
const styles = theme => ({
    title: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '15px',
            // fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '11px !important',
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

            // textAlign: "center"
        },
    },
    tabs_values_font: {
        [theme.breakpoints.down('xs')]: {
            fontSize: "8px !important",
            marginTop: "5px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "9px !important",
            marginTop: "5px"
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
    shadow: {
        boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
    },
    [theme.breakpoints.up('md')]: {
        shadow: {
            boxShadow: "none"
        }, 
    }

});
export default styles;

import { Autorenew } from "@material-ui/icons";

const styles = theme => ({
    searchCheck: {
        paddingRight: "12px",
        paddingLeft: "12px",
        marginTop: "12px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "12px",
            paddingRight: "16px",
            paddingLeft: "16px",
        }
    },
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
            height: '100%',
            overflowY: "scroll",
            width: '60%',
            marginTop: '3%',
            marginBottom: '3%',
            marginLeft: '20%',
            outline: 'none !important',
        },
        [theme.breakpoints.up('lg')]: {
            background: '#fff !important',
            height: '100%',
            overflowY: "scroll",
            width: '60%',
            marginTop: '3%',
            marginBottom: '3%',
            marginLeft: '20%',
            outline: 'none !important',
        },
    },
    modals_document: {
        [theme.breakpoints.down('xs')]: {
            background: '#fff !important',
            height: '95%',
            overflow: "none",
            width: '95%',
            margin:"auto",
            outline: 'none !important',
        },
        [theme.breakpoints.up('lg')]: {
            background: '#fff !important',
            height: '90%',
            overflow: "none",
            width: '90%',
            margin:"auto",
            outline: 'none !important',
        },
    },
    modals_video: {
        [theme.breakpoints.down('xs')]: {
            background: '#fff !important',
            // height: '90%',
            marginTop:"2%",
            overflowY: "scroll",
            width: '90%',
            margin:"auto",
            outline: 'none !important',
        },
        [theme.breakpoints.up('lg')]: {
            background: '#fff !important',
            // height: '70%',
            marginTop:"2%",
            overflowY: "scroll",
            width: '70%',
            margin:"auto",
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

    normalfonts_tabs: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
            marginLeft: "4px",
            // marginRight: "8px"
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: "center",
            marginLeft: "8px",
            marginRight: "8px"
        },
    },
    tabs_values_font: {
        [theme.breakpoints.down('xs')]: {
            fontSize: "8px !important",
            marginTop: "5px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "10px !important",
            marginTop: "5px"
        },
    },
    tabsheadcolor: {
        color: theme.palette.secondary.main,
    },
    tabsRingBckg: {
        background: theme.palette.primary.main,
    },

    TypoListed: {
        fontSize: "0.8rem",
        paddingTop: "2px"
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

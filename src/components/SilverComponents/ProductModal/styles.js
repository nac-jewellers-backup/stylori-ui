import { makeStyles } from '@material-ui/core/styles';
// import '../../fonts/font.css'
export const useStyles = makeStyles(theme => ({

    containerTop: {
        display: 'flex',
        backgroundColor: "#fff",
        width: "100%",
        margin: "3% 0% 3% 0%"
    },
    [theme.breakpoints.up('lg')]: {
        containerTop: {
            // width: "1300px !important",
            margin: "auto",
            marginTop: "3%",
            marginBottom: "1%",
            backgroundColor: "#fff",
        }
    },
    [theme.breakpoints.down('sm')]: {
        containerTop: {
            display: 'flex',
            backgroundColor: "#fff",
            width: "100%",
            margin: "2% 0% 0% 0% !important"
        },
        productCardDetail: {
            paddingTop: '4% !important',
            paddingBottom: '4% !important'
        },
    },
    [theme.breakpoints.down('md')]: {
        containerTop: {
            display: 'flex',
            backgroundColor: "#fff",
            width: "100%",
            margin: "2% 0% 2% 0% !important"
        },
        productCardDetail: {
            paddingTop: '4% !important',
            paddingBottom: '4% !important'
        },
    },

    ProductGrids: {
        padding: "2%"
    },
    productCardDetail: {
        paddingTop: '8%',
        paddingBottom: '8%'

    },
    btnshop: {
        backgroundColor: theme.palette.secondary.dark2,
        borderRadius: 0,
        color: 'white',
        boxShadow: 'rgb(204, 204, 204) 5px 6px 8px',
        padding: '0px 12px',
        fontWeight: 'bold',
        fontFamily: 'Robot-Bold',
        letterSpacing: '5px',
        fontSize: '16px'
    },
    btnshop2: {
        backgroundColor: theme.palette.secondary.dark2,
        borderRadius: 0,
        color: 'white',
        boxShadow: '0 8px 16px 0 #ccc, 0 6px 20px 0 #ccc',
        padding: '0px 12px',
        fontWeight: 'bold',
        fontFamily: 'Robot-Bold',
        letterSpacing: '5px',
        fontSize: '16px',
        "&:hover":{
            backgroundColor: theme.palette.secondary.dark2,
            opacity:0.9
        }
    },
    productCardTitle: {
        // fontFamily: 'Robot-Bold',
        color: theme.palette.secondary.dark2,
        letterSpacing: '5px',
        fontSize: '1.7rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.3rem',
            fontWeight:'bold'
        },
    },
    productCardTitle2: {
        // fontFamily: 'Robot-Bold',
        color: theme.palette.secondary.dark2,
        letterSpacing: '5px',
        fontSize: '1.7rem !important',
        fontWeight:'bold !important',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.3rem',
            fontWeight:'bold'
        },
    },
    productCardDescription: {
        textAlign: 'center',
        // fontFamily: 'Robot-Regular',
        color: theme.palette.secondary.dark2,
        paddingTop: '2%',
        paddingBottom: '5%',
        [theme.breakpoints.down('sm')]:{
            fontSize: '0.8rem !important',
        }
        
    },
    productCardDescription2: {
        textAlign: 'center',
        // fontFamily: 'Robot-Regular',
        
        color: theme.palette.secondary.dark2,
        paddingTop: '2%',
        marginBottom: "5%",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        [theme.breakpoints.down('sm')]:{
            fontSize: '0.8rem !important',
        }
    }
}));
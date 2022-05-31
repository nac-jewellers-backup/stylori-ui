import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({

    pricing: {
        float: 'left'
    },
    colorMain: {
        color: theme.palette.secondary.main
    },
    h6FontSize: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '20px ',
            // fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.98rem',
            // letterSpacing:"1px"

        },
    },
    off: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '11px',
            // fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
        },
    },
    offerPricePadding: {
        [theme.breakpoints.down('lg')]: {
            // paddingLeft: '15px',
            // marginTop: '7px',
        }, [theme.breakpoints.down('xs')]: {
            paddingLeft: '0px',
        },
    },
    deletePrice: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem',
        },
    },
    youSave: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '11px',
        },
    },
    dis: {
        color: theme.palette.text.secondary,
    },
    backgsecondary: {
        background: theme.palette.secondary.light,
    },
    resetpadd: {
        paddingLeft: "8px",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "0px"
        },
    },
    alignval:{
        [theme.breakpoints.only('sm')]: {
           width:"100%"
        },
    },
    pricesilver:{
        color:`${theme.palette.secondary.dark2}`,
        // fontWeight:'bolder',
        fontSize:'20px',
        fontFamily:'Roboto-black , serif !important',
        // padding:'0px 0px 10px 0px',
        [theme.breakpoints.down('sm')]:{
            color: theme.palette.primary.main,
            padding:'0px',
        }
    },
    // robotoBlack:{
    //     fontFamily:'Roboto-black , serif !important'
    //   }
}));
export default styles;

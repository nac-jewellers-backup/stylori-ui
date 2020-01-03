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
            fontSize: '20px',
            // fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
            letterSpacing:"1px"

        },
    },
    off: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '12px',
            // fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
        },
    },
    offerPricePadding: {
        [theme.breakpoints.down('lg')]: {
            // paddingLeft: '15px',
            marginTop: '7px',
        },[theme.breakpoints.down('xs')]: {
            paddingLeft: '0px',
        },
    },
    deletePrice: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
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
}));
export default styles;
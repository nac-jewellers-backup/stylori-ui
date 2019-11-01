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
            fontSize: '22px',
            // fontWeight: 'bold'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px',
            fontWeight: 'bold'

        },

    },
    offerPricePadding: {
        paddingLeft: '15px',
        marginTop: '7px',
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
            fontSize: '11px',
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
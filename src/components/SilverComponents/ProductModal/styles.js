import { makeStyles } from '@material-ui/core/styles';
// import '../../fonts/font.css'
export const useStyles = makeStyles(theme => ({

    ProductGrids: {
        paddingBottom: '5%'
    },
    productCardDetail: {
        paddingTop: '8%',
        paddingBottom: '8%'

    },
    btnshop: {
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
        backgroundColor: "#e0e0e0",
        borderRadius: "3px",
        padding: '6px 16px',
        fontWeight: '500',
        letterSpacing: '0.02857em',
        fontSize: '0.875rem',
        lineHeight: 1.75
    },
    productCardTitle: {
        fontFamily: 'Robot-Bold',
        color: theme.palette.secondary.dark,
        letterSpacing: '5px',
        fontSize: '28px'
    },
    productCardDescription: {
        textAlign: 'center',
        fontFamily: 'Robot-Regular',
        color: theme.palette.secondary.dark,
        paddingTop: '2%',
        paddingBottom: '5%',
    }
}));
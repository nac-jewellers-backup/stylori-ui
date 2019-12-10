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
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: 0,
        color: 'white',
        boxShadow: '0 8px 16px 0 #ccc, 0 6px 20px 0 #ccc',
        padding: '0px 22px',
        fontWeight: 'bold',
        fontFamily: 'Robot-Bold',
        letterSpacing: '5px',
        fontSize: '22px'
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
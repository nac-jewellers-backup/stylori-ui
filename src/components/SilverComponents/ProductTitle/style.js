import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    containervalue: {
        padding: "0px 12px"
    },
    [theme.breakpoints.down('sm')]: {
        containervalue: {
            padding: "0px 0px !important"
        }
    },
    title: {
        textAlign: 'center',
        color: theme.palette.secondary.dark,
        // fontFamily: 'Robot-black',
        letterSpacing: '5px',
        fontSize: '16px',
        [theme.breakpoints.only('xs')]: {
            letterSpacing: '1px',
            fontSize: '12px'
        },

    },
    title2: {
        textAlign: 'center',
        color: theme.palette.secondary.dark2,
        // fontFamily: 'Robot-black',
        letterSpacing: '5px',
        fontSize: '16px',
        fontWeight:"bold",
        [theme.breakpoints.only('xs')]: {
            letterSpacing: '1px',
            fontSize: '12px'
        },

    },
    hrline: {
        border: `1px solid ${theme.palette.secondary.dark}`
    },
    hrline2: {
        border: `1px solid ${theme.palette.secondary.dark2}`
    },
    hrlineleft: {
        textAlign: 'right'
    },
    hrlineright: {
        textAlign: 'left'
    },
    silverPDPage:{
        color: theme.palette.secondary.main,
    },
    silverPDPagehrline:{
        border: `1px solid ${theme.palette.secondary.main}`,
    }
}))
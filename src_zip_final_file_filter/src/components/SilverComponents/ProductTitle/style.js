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
        fontFamily: 'Robot-black',
        letterSpacing: '5px',
        fontSize: '16px',
        [theme.breakpoints.only('xs')]: {
            letterSpacing: '1px',
            fontSize: '12px'
        },

    },
    hrline: {
        border: `1px solid ${theme.palette.secondary.dark}`
    },
    hrlineleft: {
        textAlign: 'right'
    },
    hrlineright: {
        textAlign: 'left'
    }
}))
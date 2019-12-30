import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({

    TypoGraphy: {
        maxWidth: "900px", padding: "20px 0px 22px 0px ", textAlign: "center", fontSize: "1.0rem"
    },
    [theme.breakpoints.down('sm')]: {
        TypoGraphy: {
            maxWidth: "900px", padding: "20px 10px 22px 10px ", textAlign: "center", fontSize: "0.77rem"
        }
    },

}));
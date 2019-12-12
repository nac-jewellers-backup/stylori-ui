import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({

    containerTop: {
        display: 'flex',
        backgroundColor: "#fff",
        width: "100%",
        margin: "0px",
        padding: "20px 0px 80px 0px"
    },
    [theme.breakpoints.up('lg')]: {
        containerTop: {
            width: "1300px !important",
            margin: "auto",
            backgroundColor: "#fff",
            padding: "20px 0px 80px 0px !important"
        }
    },
    [theme.breakpoints.only('xl')]: {
        containerTop: {
            width: "1700px !important",
            margin: "auto",
            backgroundColor: "#fff",
            padding: "20px 0px 80px 0px !important"
        }
    },
    [theme.breakpoints.down('sm')]: {
        containerTop: {
            display: 'flex',
            backgroundColor: "#fff",
            width: "100%",
            margin: "0px",
            padding: "10px 0px 30px 0px !important"
        }
    },

}));
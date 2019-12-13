import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({

    img: {
        boxShadow: '10px 10px 5px #ccc',
    },
    containerset: {
        margin: "40px 0px 40px 0px", padding: "40px 2px 10px 2px"
    },
    [theme.breakpoints.down('sm')]: {
        containerset: {
            margin: "8px 0px 10px 0px !important",
            padding: "10px 5px 10px 5px !important"
        },
    },

}))
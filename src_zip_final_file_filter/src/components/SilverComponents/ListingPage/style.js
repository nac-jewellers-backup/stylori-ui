import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    MainGrid: {
        paddingTop: '15px',
        paddingBottom: '15px'
    },
    FilterGrid: {

    },
    Filters: {
        background: theme.palette.secondary.main,
        padding: '9px',
        margin: '9px',
        color: 'white',
    },
    filterName: {
        margin: 'auto',
        letterSpacing: '3px',
        fontSize: '12px'
    },
    filterArrow: {
        margin: 'auto',
        fontSize: '16px'
    }

}));
export default styles;
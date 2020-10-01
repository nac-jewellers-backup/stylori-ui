import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    colorTheme:{color:theme.palette.badgeColor.background},
    silverColor:{color:theme.palette.primary.main},
    similarProducts:{color:`${theme.palette.secondary.main} !important`, fontSize:'12px !important'}
}));
export default styles;

import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    colorTheme:{color:theme.palette.badgeColor.background},
    silverColor:{color:theme.palette.primary.main, fontSize:'28px !important'},
    similarProducts:{color:`${theme.palette.secondary.main} !important`, fontSize:'12px !important'}
}));
export default styles;

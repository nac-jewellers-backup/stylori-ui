import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    colorTheme:{color:theme.palette.badgeColor.background},
    silverColor:{color:'white', fontSize:'15px !important'},
    similarProducts:{color:`${theme.palette.secondary.main} !important`, fontSize:'12px !important'}
}));
export default styles;

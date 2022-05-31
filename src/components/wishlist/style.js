import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    colorTheme:{color:theme.palette.badgeColor.background,marginLeft:'-30px'},
    silverTheme:{marginRight:'20px',fontFamily:"FontAwesome !important"},
    silverColor:{color:'#111', fontSize:'18px !important'},
    similarProducts:{color:`${theme.palette.secondary.main} !important`, fontSize:'12px !important'}
}));
export default styles;

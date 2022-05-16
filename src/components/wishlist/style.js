import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    colorTheme:{color:theme.palette.badgeColor.background,marginLeft:'-30px'},
    silverTheme:{marginRight:'20px',fontFamily:"FontAwesome !important"},
    silverColor:{color:theme.palette.primary.main, fontSize:'20px !important',zIndex: 500,
    position: 'absolute',
    margin: '10px',right:"20px"},
    similarProducts:{color:`${theme.palette.secondary.main} !important`, fontSize:'12px !important'}
}));
export default styles;

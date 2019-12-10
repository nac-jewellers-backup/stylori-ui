import '../../fonts/font.css'
import { makeStyles } from '@material-ui/core/styles';

export const styles = theme => ({
headIcons:{
  color: theme.palette.primary.main,
  fontFamily: "fontawesome",
  textAlign:'right',
  fontSize: '20px !important',
  marginTop: '18px !important',
  '& i':{
    marginLeft: "24px",
  letterSpacing: "4px",
    cursor: 'pointer',
    [theme.breakpoints.only('xs')]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  }
},
headerNavbarList:{
  color: theme.palette.secondary.dark,
  textAlign:'right'
},
menuListCursor: {
  cursor: 'pointer',
  color: theme.palette.secondary.dark,
  fontFamily:'Robot-Black'
},
mobileNavIcon:{
  color: theme.palette.secondary.main,
}
});


export const useStyles = makeStyles(theme => ({
  paperdiv: {
    position: 'absolute',
    width: 'fit-content'
  },
  root: {
    width: '100%'
  },
  mouseOverPopover: {
    zIndex: 1000,
    top: '18px !important',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    '& span':{
      fontFamily:'Robot-Regular',
      letterSpacing:'1px'
    },
   
    '& nav': {
      padding: '0 !important'
    },
    '& li:hover': {
     
      backgroundColor: theme.palette.primary.main,

    }
  }

}));

// export default {styles, useStyles};
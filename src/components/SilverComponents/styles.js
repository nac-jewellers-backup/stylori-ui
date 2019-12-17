// import '../../fonts/font.css'
import { makeStyles } from '@material-ui/core/styles';

export const styles = theme => ({
  headIcons: {
    color: theme.palette.primary.main,
    fontFamily: "fontawesome",
    textAlign: 'right',
    fontSize: '20px !important',
    marginTop: '18px !important',
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-end",
  },
  searchcontainer: {
    padding: "4px",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  iconFafa: {
    color: theme.palette.secondary.dark,
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: 'pointer',
    alignItems: "center",
    display: "flex",
    fontSize: "20px",
    [theme.breakpoints.only('xs')]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  iconFafaheart: {
    color: theme.palette.secondary.dark,
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: 'pointer',
    alignItems: "center",
    display: "flex",
    fontSize: "17px",
    [theme.breakpoints.only('xs')]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },

  callerNum: {
    fontSize: "13px",
    color: theme.palette.secondary.dark,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: " 0px 20px 0px 0px",
    fontWeight: 600,
    letterSpacing: 2
  },
  headerNavbarList: {
    color: theme.palette.secondary.dark,
    textAlign: 'right'
  },
  menuListCursor: {
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontWeight: 600,
    color: "#6e6d72",
    paddingBottom: "10px",
    '&:hover': {
      color: theme.palette.secondary.dark,
      paddingBottom: "2px",
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    }
  },
  mobileNavIcon: {
    fill: "rgba(166, 168, 171, 1) !important",
  }
});


export const useStyles = makeStyles(theme => ({
  paperdiv: {
    position: 'absolute',
    width: 'fit-content',

  },
  root: {
    width: '100%',
  },
  mouseOverPopover: {
    zIndex: 1000,
    top: '25px !important',
    backgroundColor: theme.palette.background.fade,
    color: 'white',
    '& span': {
      fontFamily: 'Roboto',
      letterSpacing: '1px'
    },
    '& nav': {
      padding: '0px !important'
    },
    '& li:hover': {
      backgroundColor: theme.palette.secondary.dark,

    }
  },
  listedItems: {
    padding: "0px",
    fontSize: "0.7rem !important"
  },
  listedItemsub: {
    padding: "0px",
    fontSize: "0.7rem !important",
  },
  listedItemsvalue: {
    padding: "2px 16px 2px 16px",
    fontSize: "0.7rem !important",
    letterSpacing: 2
  },
  subtopic1: {
    padding: "10px 0px 10px 0px",
  },
  subtopic2: {
    padding: "10px 0px 10px 0px",
    borderTop: "1px solid",
    backgroundColor: theme.palette.background.darkFade,
  }

}));

// export default {styles, useStyles};
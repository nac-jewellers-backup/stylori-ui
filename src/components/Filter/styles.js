const drawerWidth = 280;

const styles = theme => ({
    root: {
      display: 'flex',
  
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
  
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
  
  
  
    },
    drawerPaper: {
      width: drawerWidth,
      position: 'sticky !important',
      top: '153px'
  
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
  
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    colorMain: {
      color: theme.palette.primary.main
    },
    colorMainBackground: {
      backgroundColor: theme.palette.primary.main
    },
    productCardscheck:{
      width:'80%',
   
      [theme.breakpoints.down('md')]: {
        width: '100% !important'
      },
      [theme.breakpoints.up('xl')]: {
        width:  '90%'
      },
    },
    productCardsuncheck: {
      width:  '100%',
      [theme.breakpoints.down('md')]: {
        width: '100% !important'
      },
      [theme.breakpoints.up('xl')]: {
        width:  '100%',
      },
    }
  });

  export default styles;
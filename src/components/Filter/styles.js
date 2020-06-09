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
    minHeight: 'calc(100vh - 136px)',
    // maxHeight: 'calc(100vh - 136px)',
    // top: '153px'

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
  colorMainSecondary: {
    color: theme.palette.secondary.main
  },
  li_item_filter: {
    [theme.breakpoints.only('xl')]: {
      paddingTop: '15px',
      paddingBottom: '15px'
    },

  },
  borderBottomList: {
    borderBottom: '1px solid #efeeee',
    paddingTop: '2px !important',
    paddingBottom: '2px !important'
  },
  sublistMobile: {
    color: theme.palette.secondary.light,
    paddingTop: '3px',
    paddingBottom: '3px',
    '& svg': {
      fontSize: '0.95rem'
    }
  },

  colorBackgroundList: {
    backgroundColor: 'white',

    '&:hover': {
      backgroundImage: 'linear-gradient(to left, #f9e3e3, rgba(246, 153, 163, 1))',
    }
  },
  colorBackgroundListSilver: {
    backgroundColor: 'white',

    '&:hover': {
      backgroundImage: `linear-gradient(to left, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    }
  },
  colorMainBackground: {
    backgroundColor: theme.palette.primary.main,
    "&:hover":{
      backgroundColor: theme.palette.primary.main,
      opacity:0.9,
      // '& span::after':{
      //   content: '"haii"',
      //   position: 'absolute',
      //   opacity: 1,
      //   top: 6,

      //   right: '-20px',
      //   transition: '0.5s'
      // }
      
    }

  },
  productCardscheck: {
    width: '80%',
    // backgroundColor:'whitesmoke',

    [theme.breakpoints.down('md')]: {
      width: '100% !important'
    },
    [theme.breakpoints.up('xl')]: {
      width: '90%'
    },
  },
  filterMain: {
    backgroundColor: 'white',
    overflow: 'scroll',
    height: '73vh',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  },
  productCardsuncheck: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100% !important'
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
    },
  },
  priceError:{
    paddingLeft: '14px',
    fontSize: '14px',
    color: 'red',
  },
  filtersLoading:{
    // 83
    minHeight: 'calc(100vh - 240px)',
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  widthFilter:{
    width:'100%'
  }
});

export default styles;